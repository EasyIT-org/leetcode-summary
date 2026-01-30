import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "leetcode_top1000.json"
OUT = ROOT / "todo.md"


def main():
    if not DATA.exists():
        raise SystemExit(f"Missing {DATA}")

    with DATA.open("r", encoding="utf-8") as f:
        items = json.load(f)

    lines = ["# LeetCode Top 1000 TODO", "", "Format: [ ] frontend_id title | slug", ""]

    def safe_int(value):
        try:
            return int(value)
        except (TypeError, ValueError):
            return None

    items_sorted = sorted(items, key=lambda x: safe_int(x.get("frontend_id")) or 10**9)

    for item in items_sorted:
        fid = safe_int(item.get("frontend_id"))
        title = (item.get("title") or "").strip()
        slug = (item.get("problem_slug") or "").strip()
        if fid is None:
            continue
        lines.append(f"- [ ] {fid:04d} {title} | {slug}")

    OUT.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
