# NotebookLM MCP — Integração com VS Code Insiders

Este diretório contém instruções e scripts para instalar e executar o NotebookLM MCP ([khengyun/notebooklm-mcp](https://github.com/khengyun/notebooklm-mcp)) como um servidor MCP local e integrá-lo com o VS Code Insiders.

Resumo rápido:

- Instalar o gerenciador `uv` (recomendado) ou usar `pip`.
- Instalar `notebooklm-mcp` e rodar `notebooklm-mcp init` com o ID do seu notebook.
- Iniciar o servidor (STDIO/HTTP/SSE) e configurá-lo como `mcp` no VS Code Insiders/cliente MCP.

Passos rápidos (exemplo, macOS / Linux):

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh  # (see https://astral.sh/uv/)
uv add notebooklm-mcp
uv run notebooklm-mcp init https://notebooklm.google.com/notebook/YOUR_NOTEBOOK_ID
uv run notebooklm-mcp --config notebooklm-config.json server --transport http --port 8001
```

Passos rápidos (Windows PowerShell):

```powershell
Invoke-RestMethod 'https://astral.sh/uv/install.sh' -UseBasicParsing | Invoke-Expression
uv add notebooklm-mcp
uv run notebooklm-mcp init https://notebooklm.google.com/notebook/YOUR_NOTEBOOK_ID
uv run notebooklm-mcp --config notebooklm-config.json server --transport http --port 8001
```

Obs: `init` cria `notebooklm-config.json` e a pasta `chrome_profile_notebooklm` com a sessão do Chrome (persistente).

Integrando com VS Code Insiders

1. Instale uma extensão MCP-Client que suporte servidores MCP remotos (ex.: "MCP Explorer", "MCP Client" ou outra de sua escolha).
2. Inicie o servidor HTTP: `uv run notebooklm-mcp --config notebooklm-config.json server --transport http --port 8001`.
3. Configure seu cliente/provedor MCP para `http://localhost:8001/mcp` ou `http://[IP]:8001/mcp`.

Exemplo de `mcp.json` (clientes) para usar localmente com o servidor HTTP:

```json
{
  "mcpServers": {
    "notebooklm": {
      "type": "http",
      "url": "http://localhost:8001/mcp"
    }
  }
}
```

Exemplo de tarefas do VS Code (temos um `tasks.json` em `.vscode/` neste repositório) — ele aciona o servidor via `uv`.

Usos adicionais

- Docker: há instruções no README oficial do projeto para criar/run container `notebooklm-mcp`.
- Configuração `notebooklm-config.json` para personalizar: tempo limite, notebook ID, headless, etc.

Observações de segurança

- O `chrome_profile_notebooklm` contém sessões do Chrome — adicione ao `.gitignore` e não suba para repositório remoto.
- Nunca exponha a porta HTTP do MCP sem segurança em hosts públicos (use firewall/proxy se necessário).

Mais: veja o README completo na origem do projeto: [khengyun/notebooklm-mcp](https://github.com/khengyun/notebooklm-mcp)
