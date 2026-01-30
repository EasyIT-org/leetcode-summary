import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "_source" / "merged_problems.json"
OUT_JSON = ROOT / "data" / "leetcode_top1000.json"
OUT_MD_DIR = ROOT / "markdown"

FIELDS = [
    "title",
    "problem_id",
    "frontend_id",
    "difficulty",
    "problem_slug",
    "topics",
    "description",
    "examples",
    "constraints",
    "follow_ups",
    "hints",
    "code_snippets",
]


def _safe_int(value):
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def _slugify(text):
    if not text:
        return "problem"
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    text = text.strip("-")
    return text or "problem"


def _format_examples(examples):
    lines = []
    if not examples:
        return ["(none)"]
    for ex in examples:
        num = ex.get("example_num")
        label = f"Example {num}" if num is not None else "Example"
        lines.append(f"### {label}")
        ex_text = ex.get("example_text", "")
        if ex_text:
            lines.append("```text")
            lines.append(ex_text)
            lines.append("```")
        else:
            lines.append("(no example text)")
        images = ex.get("images") or []
        if images:
            lines.append("Images:")
            for img in images:
                lines.append(f"- {img}")
        lines.append("")
    return lines


def _format_list_block(items):
    if not items:
        return ["(none)"]
    return [f"- {item}" for item in items]


def _format_code_snippets(snippets):
    if not snippets:
        return ["(none)"]
    lines = []
    for lang, code in snippets.items():
        lines.append(f"### {lang}")
        fence = lang if re.fullmatch(r"[a-zA-Z0-9_+-]+", lang) else "text"
        lines.append(f"```{fence}")
        lines.append(code.rstrip())
        lines.append("```")
        lines.append("")
    return lines


def main():
    if not SOURCE.exists():
        raise SystemExit(f"Missing source dataset: {SOURCE}")

    with SOURCE.open("r", encoding="utf-8") as f:
        data = json.load(f)

    questions = data.get("questions", [])

    filtered = []
    seen_ids = set()
    for q in questions:
        fid_raw = q.get("frontend_id")
        fid = _safe_int(fid_raw)
        if fid is None:
            continue
        if fid in seen_ids:
            continue
        if not q.get("description"):
            continue
        seen_ids.add(fid)
        filtered.append((fid, q))

    filtered.sort(key=lambda item: item[0])
    top = [q for _, q in filtered][:1000]

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_MD_DIR.mkdir(parents=True, exist_ok=True)

    normalized = []
    for q in top:
        normalized.append({k: q.get(k) for k in FIELDS})

    with OUT_JSON.open("w", encoding="utf-8") as f:
        json.dump(normalized, f, ensure_ascii=False, indent=2)

    for q in normalized:
        fid = _safe_int(q.get("frontend_id"))
        title = q.get("title") or ""
        slug = _slugify(q.get("problem_slug") or title)
        name = f"{fid:04d}-{slug}.md" if fid is not None else f"{slug}.md"
        md_path = OUT_MD_DIR / name

        lines = []
        header = f"{fid}. {title}" if fid is not None else title
        lines.append(f"# {header}")
        lines.append("")
        lines.append(f"- Difficulty: {q.get('difficulty') or 'unknown'}")
        topics = q.get("topics") or []
        if topics:
            lines.append(f"- Topics: {', '.join(topics)}")
        else:
            lines.append("- Topics: (none)")
        lines.append(f"- Slug: {q.get('problem_slug') or ''}")
        lines.append(f"- Problem ID: {q.get('problem_id') or ''}")
        lines.append("")

        lines.append("## Description")
        lines.append(q.get("description") or "(none)")
        lines.append("")

        lines.append("## Examples")
        lines.extend(_format_examples(q.get("examples")))
        lines.append("")

        lines.append("## Constraints")
        lines.extend(_format_list_block(q.get("constraints")))
        lines.append("")

        lines.append("## Hints")
        lines.extend(_format_list_block(q.get("hints")))
        lines.append("")

        lines.append("## Follow Ups")
        lines.extend(_format_list_block(q.get("follow_ups")))
        lines.append("")

        lines.append("## Code Snippets")
        lines.extend(_format_code_snippets(q.get("code_snippets")))

        md_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")

    print(f"Wrote {len(normalized)} problems to {OUT_JSON} and {OUT_MD_DIR}")


if __name__ == "__main__":
    main()
