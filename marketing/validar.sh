#!/bin/bash

# ========================================
# VALIDADOR DE CONSISTÊNCIA MARKETING
# DeiviTech Formatação 2026
# ========================================
#
# Valida a consistência dos arquivos de marketing:
# - Verifica metodologia HTML em sources NotebookLM
# - Valida paleta oficial em prompts
# - Conta cards/slides em notebooklm_cards_slides.md
# - Busca cores antigas (erro crítico)
# - Verifica timestamp em templates HTML
#
# Baseado em:
# - ShellCheck best practices
# - OneUptime bash standards
# - Main function pattern
# - Colorized output (ANSI codes)
#
# Uso: ./validar.sh
# ========================================

set -euo pipefail  # Strict mode: exit on error, undefined vars, pipe failures

# ========================================
# CORES PARA OUTPUT (ANSI ESCAPE CODES)
# ========================================
readonly GREEN='\033[0;32m'
readonly RED='\033[0;31m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly BOLD='\033[1m'
readonly RESET='\033[0m'

# ========================================
# CONTADORES E CONFIGURAÇÃO
# ========================================
ERRORS=0
WARNINGS=0
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ========================================
# FUNÇÕES DE OUTPUT
# ========================================
success() {
    echo -e "${GREEN}✓${RESET} $*"
}

error() {
    echo -e "${RED}✗${RESET} $*"
    ((ERRORS++))
}

warning() {
    echo -e "${YELLOW}⚠${RESET} $*"
    ((WARNINGS++))
}

info() {
    echo -e "${BLUE}ℹ${RESET} $*"
}

header() {
    echo -e "\n${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
    echo -e "${BOLD}$*${RESET}"
    echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}\n"
}

# ========================================
# VALIDAÇÃO 1: METODOLOGIA HTML EM SOURCES
# ========================================
validate_html_methodology() {
    header "1️⃣  Validando Metodologia HTML em NotebookLM Sources"
    
    local sources_dir="${SCRIPT_DIR}/notebooklm_sources"
    local found=0
    
    if [[ ! -d "$sources_dir" ]]; then
        error "Diretório notebooklm_sources/ não encontrado"
        return 1
    fi
    
    # Termos que devem aparecer nos sources
    local -a search_terms
    search_terms=(
        "HTML personalizado"
        "WhatsApp"
        "85-90%"
        "taxa de conversão"
        "relatório"
        "timestamp"
    )
    
    for source_file in "$sources_dir"/*.md; do
        if [[ ! -f "$source_file" ]]; then
            continue
        fi
        
        local filename
        filename=$(basename "$source_file")
        local terms_found=0
        
        for term in "${search_terms[@]}"; do
            if grep -qi "$term" "$source_file"; then
                ((terms_found++))
            fi
        done
        
        if [[ $terms_found -ge 3 ]]; then
            success "$filename menciona metodologia HTML ($terms_found/6 termos)"
            ((found++))
        else
            warning "$filename menciona poucos termos metodologia ($terms_found/6)"
        fi
    done
    
    if [[ $found -ge 4 ]]; then
        success "Pelo menos 4 sources mencionam metodologia HTML ✓"
    else
        error "Apenas $found sources mencionam metodologia (esperado: mínimo 4)"
    fi
}

# ========================================
# VALIDAÇÃO 2: PALETA OFICIAL EM PROMPTS
# ========================================
validate_color_palette() {
    header "2️⃣  Validando Paleta Oficial em Prompts"
    
    local prompts_file="${SCRIPT_DIR}/prompts_nano_banana_pro.txt"
    
    if [[ ! -f "$prompts_file" ]]; then
        error "Arquivo prompts_nano_banana_pro.txt não encontrado"
        return 1
    fi
    
    # Cores oficiais que devem aparecer
    local -a official_colors
    official_colors=(
        "#3498db"  # Azul
        "#9b59b6"  # Roxo
        "#2ecc71"  # Verde
    )
    
    local all_found=true
    
    for color in "${official_colors[@]}"; do
        if grep -qi "$color" "$prompts_file"; then
            success "Cor oficial $color encontrada"
        else
            error "Cor oficial $color NÃO encontrada em prompts"
            all_found=false
        fi
    done
    
    if $all_found; then
        success "Todas as 3 cores oficiais presentes ✓"
    fi
}

# ========================================
# VALIDAÇÃO 3: CONTAGEM CARDS/SLIDES
# ========================================
validate_cards_slides_count() {
    header "3️⃣  Validando Contagem de Cards e Slides"
    
    local cards_file="${SCRIPT_DIR}/notebooklm_cards_slides.md"
    
    if [[ ! -f "$cards_file" ]]; then
        error "Arquivo notebooklm_cards_slides.md não encontrado"
        return 1
    fi
    
    # Conta menções a "Card" (case insensitive)
    local card_count
    card_count=$(grep -ci "^###.*card\|^##.*card\|^#.*card\|card [0-9]" "$cards_file" || true)
    
    # Conta menções a "Slide" (case insensitive)
    local slide_count
    slide_count=$(grep -ci "^###.*slide\|^##.*slide\|^#.*slide\|slide [0-9]" "$cards_file" || true)
    
    info "Cards mencionados: $card_count (esperado: ~16)"
    info "Slides mencionados: $slide_count (esperado: ~13)"
    
    # Validação flexível (permite +/- 2 de margem)
    if [[ $card_count -ge 14 && $card_count -le 18 ]]; then
        success "Contagem de cards está no range esperado (14-18)"
    else
        warning "Contagem de cards fora do esperado: $card_count (esperado: 16 ±2)"
    fi
    
    if [[ $slide_count -ge 11 && $slide_count -le 15 ]]; then
        success "Contagem de slides está no range esperado (11-15)"
    else
        warning "Contagem de slides fora do esperado: $slide_count (esperado: 13 ±2)"
    fi
}

# ========================================
# VALIDAÇÃO 4: CORES ANTIGAS (ERRO CRÍTICO)
# ========================================
validate_no_old_colors() {
    header "4️⃣  Verificando Cores Antigas (Erro Crítico)"
    
    # Cores antigas que NÃO devem aparecer
    local -a old_colors
    old_colors=(
        "#3b82f6"  # Azul antigo
        "#10b981"  # Verde antigo
        "#7c3aed"  # Roxo antigo (variante)
        "#8b5cf6"  # Roxo antigo
    )
    
    local found_old=false
    
    # Busca em todos arquivos .md, .html, .txt (exceto node_modules, .git)
    for color in "${old_colors[@]}"; do
        local matches
        matches=$(find "$SCRIPT_DIR" \
            -type f \
            \( -name "*.md" -o -name "*.html" -o -name "*.txt" \) \
            -not -path "*/node_modules/*" \
            -not -path "*/.git/*" \
            -exec grep -l "$color" {} + 2>/dev/null || true)
        
        if [[ -n "$matches" ]]; then
            error "Cor antiga $color encontrada em:"
            while IFS= read -r file; do
                local relative_path
                relative_path=$(realpath --relative-to="$SCRIPT_DIR" "$file")
                echo -e "   ${RED}→${RESET} $relative_path"
            done <<< "$matches"
            found_old=true
        fi
    done
    
    if ! $found_old; then
        success "Nenhuma cor antiga encontrada ✓"
    else
        error "CRÍTICO: Cores antigas devem ser substituídas pela paleta oficial!"
    fi
}

# ========================================
# VALIDAÇÃO 5: TIMESTAMP EM TEMPLATES HTML
# ========================================
validate_timestamp_in_templates() {
    header "5️⃣  Verificando Timestamp em Templates HTML"
    
    local templates_dir="${SCRIPT_DIR}/templates"
    
    if [[ ! -d "$templates_dir" ]]; then
        error "Diretório templates/ não encontrado"
        return 1
    fi
    
    local templates_found=0
    local templates_with_timestamp=0
    
    for template in "$templates_dir"/*.html; do
        if [[ ! -f "$template" ]]; then
            continue
        fi
        
        ((templates_found++))
        local filename
        filename=$(basename "$template")
        
        # Busca por padrões de timestamp:
        # - "Gerado em" (português)
        # - "timestamp" (variável/função)
        # - "DeiviTech" (assinatura)
        if grep -qi "gerado em\|timestamp\|deivistech" "$template"; then
            success "$filename contém timestamp ✓"
            ((templates_with_timestamp++))
        else
            error "$filename NÃO contém timestamp obrigatório"
        fi
    done
    
    info "Templates encontrados: $templates_found"
    
    if [[ $templates_with_timestamp -eq $templates_found && $templates_found -gt 0 ]]; then
        success "Todos templates ($templates_found/$templates_found) contêm timestamp ✓"
    elif [[ $templates_found -eq 0 ]]; then
        warning "Nenhum template HTML encontrado em templates/"
    else
        error "Apenas $templates_with_timestamp/$templates_found templates têm timestamp"
    fi
}

# ========================================
# RELATÓRIO FINAL
# ========================================
print_summary() {
    echo ""
    echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}"
    echo -e "${BOLD}📊 RESUMO DA VALIDAÇÃO${RESET}"
    echo -e "${BOLD}${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${RESET}\n"
    
    if [[ $ERRORS -eq 0 && $WARNINGS -eq 0 ]]; then
        echo -e "${GREEN}${BOLD}✓ TUDO VALIDADO COM SUCESSO!${RESET}"
        echo -e "${GREEN}  Nenhum erro ou warning encontrado.${RESET}\n"
        return 0
    else
        if [[ $ERRORS -gt 0 ]]; then
            echo -e "${RED}${BOLD}✗ ERROS ENCONTRADOS: $ERRORS${RESET}"
            echo -e "${RED}  Corrija os erros antes de prosseguir.${RESET}\n"
        fi
        
        if [[ $WARNINGS -gt 0 ]]; then
            echo -e "${YELLOW}${BOLD}⚠ WARNINGS ENCONTRADOS: $WARNINGS${RESET}"
            echo -e "${YELLOW}  Revise os warnings (não bloqueiam execução).${RESET}\n"
        fi
        
        return 1
    fi
}

# ========================================
# FUNÇÃO MAIN (MAIN FUNCTION PATTERN)
# ========================================
main() {
    echo -e "${BOLD}${BLUE}"
    echo "╔════════════════════════════════════════╗"
    echo "║  VALIDADOR MARKETING DEIVISTECH 2026   ║"
    echo "║  🦞 DevSan AGI - 15/02/2026           ║"
    echo "╚════════════════════════════════════════╝"
    echo -e "${RESET}"
    
    # Executar todas as validações
    validate_html_methodology
    validate_color_palette
    validate_cards_slides_count
    validate_no_old_colors
    validate_timestamp_in_templates
    
    # Relatório final
    print_summary
}

# ========================================
# EXECUÇÃO (só roda se script for executado diretamente)
# ========================================
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi

# ========================================
# FIM DO SCRIPT
# Criado por DevSan AGI - 15/02/2026
# Baseado em: ShellCheck, OneUptime, Main Function Pattern
# ========================================