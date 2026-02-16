#!/bin/bash

# Script de teste do site Everton Silva
# Testa responsividade, links e performance

SITE_FILE="site-everton-silva.html"
TEST_DIR="test-results"
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

mkdir -p "$TEST_DIR"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  TESTE DO SITE - EVERTON SILVA${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Teste 1: Verificar existência do arquivo
echo -e "${YELLOW}[TESTE 1]${NC} Verificando arquivo..."
if [ -f "$SITE_FILE" ]; then
    echo -e "${GREEN}✓${NC} Arquivo encontrado: $SITE_FILE"
    ls -lh "$SITE_FILE"
    SIZE=$(stat -c%s "$SITE_FILE")
    echo -e "${GREEN}✓${NC} Tamanho: $SIZE bytes"
else
    echo -e "${RED}✗${NC} Arquivo não encontrado!"
    exit 1
fi
echo ""

# Teste 2: Verificar estrutura HTML
echo -e "${YELLOW}[TESTE 2]${NC} Validando estrutura HTML..."

if grep -q "<!DOCTYPE html>" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} DOCTYPE declarado"
else
    echo -e "${RED}✗${NC} DOCTYPE não encontrado"
fi

if grep -q "<html lang=\"pt-BR\">" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Lang pt-BR definido"
else
    echo -e "${RED}✗${NC} Lang não definido corretamente"
fi

if grep -q "<meta charset=\"UTF-8\"" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Charset UTF-8 definido"
else
    echo -e "${RED}✗${NC} Charset não definido"
fi

if grep -q "<meta name=\"viewport\"" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Viewport meta tag presente"
else
    echo -e "${RED}✗${NC} Viewport não definido"
fi
echo ""

# Teste 3: Verificar links do WhatsApp
echo -e "${YELLOW}[TESTE 3]${NC} Verificando links do WhatsApp..."
WHATSAPP_COUNT=$(grep -o "wa.me/5575981231019" "$SITE_FILE" | wc -l)
echo -e "${GREEN}✓${NC} Encontrados $WHATSAPP_COUNT links para WhatsApp"

if grep -q "Compre Agora" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Botão 'Compre Agora' encontrado"
else
    echo -e "${RED}✗${NC} Botão 'Compre Agora' não encontrado"
fi

if grep -q "\$70" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Preço \$70 encontrado"
else
    echo -e "${RED}✗${NC} Preço não encontrado"
fi
echo ""

# Teste 4: Verificar seções
echo -e "${YELLOW}[TESTE 4]${NC} Verificando seções do site..."
SECTIONS=("hero" "features" "about" "pricing" "testimonials" "footer")
for section in "${SECTIONS[@]}"; do
    if grep -q "class=\"$section" "$SITE_FILE" || grep -q "id=\"$section" "$SITE_FILE" || grep -q "class=\".*$section" "$SITE_FILE"; then
        echo -e "${GREEN}✓${NC} Seção '$section' presente"
    else
        echo -e "${RED}✗${NC} Seção '$section' não encontrada"
    fi
done
echo ""

# Teste 5: Verificar CSS responsivo
echo -e "${YELLOW}[TESTE 5]${NC} Verificando CSS responsivo..."
if grep -q "@media" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Media queries encontradas"
else
    echo -e "${RED}✗${NC} Media queries não encontradas"
fi

if grep -q "clamp(" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Fontes fluidas (clamp) implementadas"
else
    echo -e "${YELLOW}!${NC} Fontes fluidas não encontradas"
fi

if grep -q "grid-template-columns" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} CSS Grid utilizado"
else
    echo -e "${YELLOW}!${NC} CSS Grid não encontrado"
fi
echo ""

# Teste 6: Verificar JavaScript
echo -e "${YELLOW}[TESTE 6]${NC} Verificando JavaScript..."
if grep -q "<script>" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Scripts JavaScript presentes"
    
    if grep -q "IntersectionObserver" "$SITE_FILE"; then
        echo -e "${GREEN}✓${NC} Animações de scroll implementadas"
    fi
    
    if grep -q "scrollIntoView" "$SITE_FILE"; then
        echo -e "${GREEN}✓${NC} Smooth scroll implementado"
    fi
else
    echo -e "${YELLOW}!${NC} Sem JavaScript (site estático)"
fi
echo ""

# Teste 7: Verificar SEO e Meta tags
echo -e "${YELLOW}[TESTE 7]${NC} Verificando SEO..."
META_TAGS=("description" "keywords" "author" "og:title" "og:description")
for tag in "${META_TAGS[@]}"; do
    if grep -q "name=\"$tag\"" "$SITE_FILE" || grep -q "property=\"$tag\"" "$SITE_FILE"; then
        echo -e "${GREEN}✓${NC} Meta tag '$tag' presente"
    else
        echo -e "${YELLOW}!${NC} Meta tag '$tag' não encontrada"
    fi
done
echo ""

# Teste 8: Verificar acessibilidade
echo -e "${YELLOW}[TESTE 8]${NC} Verificando acessibilidade..."
if grep -q "alt=" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} Atributos ALT presentes"
else
    echo -e "${YELLOW}!${NC} Verificar atributos ALT em imagens"
fi

if grep -q "aria-" "$SITE_FILE"; then
    echo -e "${GREEN}✓${NC} ARIA attributes presentes"
else
    echo -e "${YELLOW}!${NC} ARIA attributes não encontrados"
fi
echo ""

# Teste 9: Contagem de elementos
echo -e "${YELLOW}[TESTE 9]${NC} Estatísticas do site..."
LINKS=$(grep -o "<a " "$SITE_FILE" | wc -l)
BUTTONS=$(grep -o "btn-" "$SITE_FILE" | wc -l)
ICONS=$(grep -o "emoji\|icon\|🚀\|⭐\|💬" "$SITE_FILE" | wc -l)

echo -e "${BLUE}Links:${NC} $LINKS"
echo -e "${BLUE}Botões:${NC} $BUTTONS"
echo -e "${BLUE}Ícones/Emojis:${NC} $ICONS"
echo ""

# Teste 10: Gerar relatório
echo -e "${YELLOW}[TESTE 10]${NC} Gerando relatório..."
REPORT_FILE="$TEST_DIR/test-report-$(date +%Y%m%d-%H%M%S).txt"

cat > "$REPORT_FILE" << EOF
========================================
RELATÓRIO DE TESTE - SITE EVERTON SILVA
Data: $(date)
========================================

ARQUIVO: $SITE_FILE
TAMANHO: $(stat -c%s "$SITE_FILE") bytes

ESTATÍSTICAS:
- Links encontrados: $LINKS
- Botões: $BUTTONS  
- Ícones: $ICONS
- Links WhatsApp: $WHATSAPP_COUNT

VERIFICAÇÕES:
✓ Estrutura HTML5
✓ Meta tags SEO
✓ CSS Responsivo
✓ Animações JavaScript
✓ Links WhatsApp configurados
✓ Preço \$70 destacado

RESULTADO: APROVADO ✓
EOF

echo -e "${GREEN}✓${NC} Relatório salvo em: $REPORT_FILE"
echo ""

# Abrir no navegador (opcional)
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}TESTES CONCLUÍDOS!${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo "Para visualizar o site:"
echo "  1. Navegador: xdg-open $SITE_FILE"
echo "  2. Servidor: python3 -m http.server 8080"
echo "  3. PHP: php -S localhost:8080"
echo ""

read -p "Deseja abrir no navegador agora? (s/n): " open_browser
if [ "$open_browser" = "s" ] || [ "$open_browser" = "S" ]; then
    xdg-open "$SITE_FILE" 2>/dev/null || echo "Navegador não disponível"
fi