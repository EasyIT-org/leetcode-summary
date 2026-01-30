import json
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
WEB = ROOT / "web"


class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Serve / from web/ directory, but allow /index.json and /data/* from root.
        if path == "/index.json":
            return str(ROOT / "index.json")
        if path.startswith("/data/"):
            return str(ROOT / path.lstrip("/"))
        # Default to web directory
        return str((WEB / path.lstrip("/")).resolve())

    def log_message(self, format, *args):
        # Quiet by default; uncomment for debugging
        return


def main():
    host = os.environ.get("HOST", "127.0.0.1")
    port = int(os.environ.get("PORT", "8000"))

    if not WEB.exists():
        raise SystemExit("Missing web/ directory")

    server = ThreadingHTTPServer((host, port), Handler)
    print(f"Serving on http://{host}:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
