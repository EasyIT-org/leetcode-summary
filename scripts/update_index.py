import argparse
import json
import re
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "leetcode_top1000.json"
INDEX = ROOT / "index.json"


def safe_int(value):
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def extract_json(text: str):
    # Try to parse whole text first.
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    # Fallback: find the first JSON object in text.
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if not match:
        raise ValueError("No JSON object found in input")
    return json.loads(match.group(0))


def load_problem_map():
    with DATA.open("r", encoding="utf-8") as f:
        items = json.load(f)
    result = {}
    for item in items:
        fid = safe_int(item.get("frontend_id"))
        if fid is None:
            continue
        result[f"{fid:04d}"] = item
    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", help="path to codex output file; if omitted, read stdin")
    args = parser.parse_args()

    if args.input:
        raw = Path(args.input).read_text(encoding="utf-8")
    else:
        raw = Path("/dev/stdin").read_text(encoding="utf-8")

    payload = extract_json(raw)

    fid = safe_int(payload.get("frontend_id"))
    if fid is None:
        raise SystemExit("Missing or invalid frontend_id in codex output")

    techniques = payload.get("techniques") or []
    if not isinstance(techniques, list) or not techniques:
        raise SystemExit("Missing or invalid techniques in codex output")

    # Normalize techniques: lowercase, trim, dedupe, stable order
    normalized = []
    seen = set()
    for t in techniques:
        if not isinstance(t, str):
            continue
        t_norm = t.strip().lower()
        if not t_norm:
            continue
        if t_norm in seen:
            continue
        seen.add(t_norm)
        normalized.append(t_norm)

    if not normalized:
        raise SystemExit("No usable techniques after normalization")

    fid_str = f"{fid:04d}"
    problem_map = load_problem_map()
    problem = problem_map.get(fid_str, {})

    title = problem.get("title") or payload.get("title") or ""
    slug = problem.get("problem_slug") or ""
    difficulty = problem.get("difficulty") or ""

    if INDEX.exists():
        index = json.loads(INDEX.read_text(encoding="utf-8"))
    else:
        index = {"meta": {}, "techniques": {}, "problems": {}}

    techniques_map = index.get("techniques", {})
    problems_map = index.get("problems", {})

    # Remove old technique associations for this problem.
    old = problems_map.get(fid_str, {}).get("techniques", [])
    for t in old:
        lst = techniques_map.get(t, [])
        if fid_str in lst:
            lst = [x for x in lst if x != fid_str]
            if lst:
                techniques_map[t] = lst
            else:
                techniques_map.pop(t, None)

    # Add new technique associations.
    for t in normalized:
        lst = techniques_map.get(t, [])
        if fid_str not in lst:
            lst.append(fid_str)
        techniques_map[t] = sorted(set(lst), key=lambda x: int(x))

    problems_map[fid_str] = {
        "frontend_id": fid_str,
        "title": title,
        "slug": slug,
        "difficulty": difficulty,
        "techniques": normalized,
    }

    index["techniques"] = techniques_map
    index["problems"] = problems_map
    index["meta"] = {
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "count_problems": len(problems_map),
        "count_techniques": len(techniques_map),
    }

    INDEX.write_text(json.dumps(index, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {INDEX} for {fid_str}")


if __name__ == "__main__":
    main()
