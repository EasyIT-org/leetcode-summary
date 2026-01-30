#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TODO="$ROOT/todo.md"

if [[ ! -f "$TODO" ]]; then
  echo "todo.md not found at $TODO" >&2
  exit 1
fi

line=$(rg -n "^- \[ \] " "$TODO" | head -n 1 | sed 's/^[0-9]*://')
if [[ -z "$line" ]]; then
  echo "No pending todo items found." >&2
  exit 0
fi

# Format: - [ ] 0001 Title | slug
id=$(echo "$line" | sed -E 's/^- \[ \] ([0-9]+).*/\1/')
if [[ -z "$id" ]]; then
  echo "Failed to parse frontend_id from: $line" >&2
  exit 1
fi

prompt_file="$ROOT/.tmp_prompt.txt"
output_file="$ROOT/.tmp_qwen_output.json"

python3 "$ROOT/scripts/build_prompt.py" --id "$id" > "$prompt_file"

QWEN_CMD=${QWEN_CMD:-qwen}
QWEN_ARGS=${QWEN_ARGS:-}

# Send prompt to Qwen CLI via stdin. Adjust QWEN_CMD/QWEN_ARGS if your CLI differs.
set +e
qwen_out=$("$QWEN_CMD" $QWEN_ARGS < "$prompt_file")
status=$?
set -e
if [[ $status -ne 0 ]]; then
  echo "Qwen command failed (exit $status). Set QWEN_CMD/QWEN_ARGS if needed." >&2
  exit $status
fi

echo "$qwen_out" > "$output_file"

python3 "$ROOT/scripts/update_index.py" --input "$output_file"
python3 "$ROOT/scripts/mark_done.py" --id "$id"

echo "Processed $id and updated index.json + todo.md"
