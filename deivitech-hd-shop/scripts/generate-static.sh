#!/bin/bash

# Script para gerar HTML estático do site
# Uso: ./scripts/generate-static.sh

echo "🔧 Gerando site estático..."

cd "$(dirname "$0")/.."

# Verificar dependências
if ! command -v bun &> /dev/null; then
    echo "❌ Bun não encontrado. Instale com: curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

# Instalar dependências
echo "📦 Instalando dependências..."
bun install

# Build para produção
echo "🏗️ Gerando HTML estático..."
bun run build

# Copiar para pasta de output
echo "📁 Copiando para pasta de distribuição..."
mkdir -p ../docs
cp -r out/* ../docs/

echo "✅ Site gerado com sucesso!"
echo "📂 Arquivos em: docs/"
echo "🌐 Acesse: file://$(pwd)/../docs/index.html"
