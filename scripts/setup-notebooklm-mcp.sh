#!/usr/bin/env bash
set -euo pipefail

DEV_CLONE=false
if [[ ${1:-} == --dev ]]; then
  DEV_CLONE=true
fi

echo "Setting up NotebookLM MCP..."

if ! command -v uv >/dev/null 2>&1; then
  echo "Installing uv (astral.sh installer)..."
  curl -LsSf https://astral.sh/uv/install.sh | sh
fi

if command -v uv >/dev/null 2>&1; then
  echo "Installing notebooklm-mcp using uv..."
  uv add notebooklm-mcp
else
  echo "uv not available; trying pip install (requires python + pip)" >&2
  pip install notebooklm-mcp
fi

if $DEV_CLONE; then
  if [[ ! -d "mcp/notebooklm-mcp" ]]; then
    git clone https://github.com/khengyun/notebooklm-mcp.git mcp/notebooklm-mcp
    echo "Cloned notebooklm-mcp into mcp/notebooklm-mcp"
  else
    echo "mcp/notebooklm-mcp already exists; skipping clone."
  fi
fi

echo "Done. Run: uv run notebooklm-mcp init <NOTEBOOK_URL> to initialize your config." 
