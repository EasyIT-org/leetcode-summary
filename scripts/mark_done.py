import argparse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TODO = ROOT / "todo.md"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--id", required=True)
    args = parser.parse_args()
    fid = args.id.zfill(4)

    if not TODO.exists():
        raise SystemExit("todo.md not found")

    lines = TODO.read_text(encoding="utf-8").splitlines()
    updated = False
    prefix = f"- [ ] {fid} "
    done_prefix = f"- [x] {fid} "

    for i, line in enumerate(lines):
        if line.startswith(prefix):
            lines[i] = done_prefix + line[len(prefix):]
            updated = True
            break

    if not updated:
        raise SystemExit(f"No pending todo entry found for {fid}")

    TODO.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    print(f"Marked {fid} as done in {TODO}")


if __name__ == "__main__":
    main()
