# Configurando com VS Code Insiders

Instruções rápidas para usar o servidor NotebookLM MCP com o VS Code Insiders.

1. Instale uma extensão cliente MCP no VS Code Insiders (exemplos):
   - "MCP Explorer" (Procure por "MCP" no marketplace) ou
   - "MCP Client" / "VSC-MCP Server" (dependendo do fluxo desejado — cliente vs. servidor)

1. Inicie o NotebookLM MCP via `uv` ou `pip` (HTTP):

```bash
uv run notebooklm-mcp --config notebooklm-config.json server --transport http --port 8001
```

1. Configure o cliente MCP no VS Code Insiders — uma forma genérica:

- Abra `settings.json` do VS Code Insiders (Ctrl+, → "Abrir settings.json")
- Adicione algo como (exemplo comum para clientes):

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

1. Verifique a conexão: a maioria das extensões expõe um painel de estado ou comandos como `MCP: List Tools` ou `MCP: Reset Cached Tools`.

Dicas:

- Para testes rápidos, use a rota HTTP e `curl` para verificar a disponibilidade (`curl -X POST http://localhost:8001/mcp ...`).

- Se estiver usando uma extensão que requeira `mcp.json` na raiz do workspace, coloque o snippet `mcp.json` do README em `mcp/mcp.json`.

- Se não quiser expor portas, use STDIO mode e contraste com clientes que suportem conexões STDIO.

- Na extensão "VSC-MCP Server" (ou similares), ajuste `mcpServer.startOnActivate` e `mcpServer.port` em `settings.json` para iniciar automaticamente.

