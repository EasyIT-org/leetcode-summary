#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 N" >&2
  exit 1
fi

N="$1"
if ! [[ "$N" =~ ^[0-9]+$ ]]; then
  echo "N must be a positive integer" >&2
  exit 1
fi

if [[ "$N" -le 0 ]]; then
  echo "N must be >= 1" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

for ((i=1; i<=N; i++)); do
  echo "==> Run $i/$N"
  "$ROOT/scripts/process_next.sh"
done
