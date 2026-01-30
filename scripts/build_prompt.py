import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "leetcode_top1000.json"


def safe_int(value):
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--id", required=True, help="frontend_id, e.g. 1 or 0001")
    args = parser.parse_args()

    fid = safe_int(args.id)
    if fid is None:
        raise SystemExit("Invalid id")

    with DATA.open("r", encoding="utf-8") as f:
        items = json.load(f)

    problem = None
    for item in items:
        if safe_int(item.get("frontend_id")) == fid:
            problem = item
            break

    if not problem:
        raise SystemExit(f"Problem {fid} not found")

    title = problem.get("title") or ""
    slug = problem.get("problem_slug") or ""
    difficulty = problem.get("difficulty") or ""
    description = problem.get("description") or ""
    constraints = problem.get("constraints") or []
    examples = problem.get("examples") or []

    example_texts = []
    for ex in examples:
        text = ex.get("example_text")
        if text:
            example_texts.append(text)

    prompt = f"""You are a coding interview expert.\n\nTask: Extract 3-7 key techniques used to solve the LeetCode problem below.\n- Use concise lowercase phrases (e.g., \"hash map\", \"two pointers\", \"binary search\").\n- Prefer common algorithm/data-structure technique names.\n- Return STRICT JSON only (no markdown, no extra commentary).\n\nReturn JSON schema:\n{{\n  \"frontend_id\": {fid},\n  \"title\": {json.dumps(title)},\n  \"techniques\": [\"technique 1\", \"technique 2\"]\n}}\n\nProblem:\nTitle: {title}\nFrontend ID: {fid}\nSlug: {slug}\nDifficulty: {difficulty}\n\nDescription:\n{description}\n\nExamples:\n{("\n\n").join(example_texts) if example_texts else "(none)"}\n\nConstraints:\n{("\n").join(constraints) if constraints else "(none)"}\n"""

    print(prompt)


if __name__ == "__main__":
    main()
