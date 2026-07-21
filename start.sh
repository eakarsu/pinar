#!/bin/sh
set -eu
project_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
port=${PORT:-4173}
case "$port" in
  ''|*[!0-9]*) echo 'PORT must be an integer from 1 through 65535' >&2; exit 2 ;;
esac
[ "$port" -ge 1 ] && [ "$port" -le 65535 ] || { echo 'PORT must be an integer from 1 through 65535' >&2; exit 2; }
[ -d "$project_dir/node_modules" ] || { echo 'Prepared dependencies are missing' >&2; exit 1; }
[ -f "$project_dir/dist/index.html" ] || { echo 'Prepared static artifact is missing' >&2; exit 1; }
[ -f "$project_dir/BOUNDARY.json" ] && [ -f "$project_dir/dist/boundary.json" ] || { echo 'Boundary evidence is missing from the prepared artifact' >&2; exit 1; }
cmp -s "$project_dir/BOUNDARY.json" "$project_dir/dist/boundary.json" || { echo 'Built boundary evidence is stale' >&2; exit 1; }
if command -v lsof >/dev/null 2>&1 && lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Port $port is already in use; no process was terminated" >&2
  exit 1
fi
cd "$project_dir"
exec "$project_dir/node_modules/.bin/vite" preview --host 127.0.0.1 --port "$port" --strictPort
