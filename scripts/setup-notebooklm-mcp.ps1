<#
Small helper script to setup NotebookLM MCP on Windows (PowerShell).
It installs `uv` (if not present), installs the package via `uv` or `pip`, and optionally clones the repo for development.
#>

param(
    [switch]$devClone
)

function Is-CommandAvailable($cmd) {
    $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue)
}

Write-Host "Setting up NotebookLM MCP..." -ForegroundColor Cyan

if (-not (Is-CommandAvailable uv)) {
    Write-Host "Installing uv (astral.sh installer)..." -ForegroundColor Yellow
    Invoke-RestMethod 'https://astral.sh/uv/install.sh' -UseBasicParsing | Invoke-Expression
}

if (Is-CommandAvailable uv) {
    Write-Host "Installing notebooklm-mcp using uv..." -ForegroundColor Green
    & uv add notebooklm-mcp
} else {
    Write-Host "uv not found; trying pip install (requires python + pip)" -ForegroundColor Yellow
    & pip install notebooklm-mcp
}

if ($devClone) {
    if (-not (Test-Path "mcp/notebooklm-mcp")) {
        git clone https://github.com/khengyun/notebooklm-mcp.git mcp/notebooklm-mcp
        Write-Host "Cloned notebooklm-mcp into mcp/notebooklm-mcp" -ForegroundColor Green
    } else {
        Write-Host "mcp/notebooklm-mcp already exists; skipping clone." -ForegroundColor Yellow
    }
}

Write-Host "Done. Run 'uv run notebooklm-mcp init <NOTEBOOK_URL>' to initialize your config." -ForegroundColor Cyan
