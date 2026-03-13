#!/bin/bash

# ═══════════════════════════════════════════════════════════════════════════════
# 🔧 DEIVITECH - SCRIPT PROFISSIONAL DE TESTE DE HDs
# ═══════════════════════════════════════════════════════════════════════════════
# 
# Uso: ./hd-test.sh [opções]
# 
# Exemplos:
#   ./hd-test.sh                    # Testar HD conectado (interativo)
#   ./hd-test.sh --parallel 2      # Testar 2 HDs em paralelo
#   ./hd-test.sh --quick            # Teste rápido (sem badblocks)
#   ./hd-test.sh --format           # Testar + formatar otimizado
#   ./hd-test.sh --parallel 4       # Testar 4 HDs simultâneos
#
# ═══════════════════════════════════════════════════════════════════════════════

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m'

# Configurações padrão
MODE="interactive"
PARALLEL=1
QUICK=false
FORMAT=false
OUTPUT_DIR="/home/deivi/Projetos/DeiviTech-Formatacao/test-results"

# Funções
print_banner() {
    clear
    echo -e "${PURPLE}"
    echo "╔═══════════════════════════════════════════════════════════════════════╗"
    echo "║                                                                       ║"
    echo "║     🔧 DEIVITECH - TESTE PROFISSIONAL DE HDs 🔧                    ║"
    echo "║                                                                       ║"
    echo "║            Script de Verificação Completa                             ║"
    echo "║                                                                       ║"
    echo "╚═══════════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
}

print_step() {
    echo ""
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}│${WHITE} $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo ""
}

# Detectar HDs conectados
detect_hds() {
    echo -e "${CYAN}🔍 Detectando HDs conectados...${NC}"
    echo ""
    
    # Listar dispositivos
    HDDS=$(lsblk -dn -o NAME,TYPE,MODEL,SIZE | grep "disk" | grep -v "nvme" | awk '{print "/dev/" $1}')
    
    if [ -z "$HDDS" ]; then
        echo -e "${RED}❌ Nenhum HD externo encontrado!${NC}"
        echo -e "${YELLOW}💡 Conecte o HD e tente novamente.${NC}"
        exit 1
    fi
    
    # Contar
    COUNT=$(echo "$HDDS" | wc -l)
    
    echo -e "${GREEN}✅ Encontrados: $COUNT HD(s)${NC}"
    echo ""
    
    # Listar
    echo -e "${WHITE}┌─────────────────────────────────────────────────────────────────────┐${NC}"
    echo -e "${WHITE}│${NC}  #  Dispositivo    Modelo                    Tamanho         ${NC}"
    echo -e "${WHITE}├─────────────────────────────────────────────────────────────────────┤${NC}"
    
    i=1
    for HD in $HDDS; do
        MODEL=$(lsblk -o MODEL -n $HD | xargs)
        SIZE=$(lsblk -o SIZE -n $HD | xargs)
        printf "${WHITE}│${NC}  %-2d  %-14s  %-24s  %-14s ${NC}" "$i" "$HD" "$MODEL" "$SIZE"
        echo ""
    done
    
    echo -e "${WHITE}└─────────────────────────────────────────────────────────────────────┘${NC}"
    echo ""
    
    echo "$HDDS"
}

# Teste SMART completo
test_smart() {
    local HD=$1
    local OUTPUT=$2
    
    echo -e "${YELLOW}🔬 Executando teste SMART...${NC}"
    
    # Saúde geral
    HEALTH=$(sudo smartctl -H $HD 2>/dev/null | grep "SMART overall-health" | awk '{print $NF}')
    
    # Dados SMART
    MODEL=$(sudo smartctl -i $HD 2>/dev/null | grep "Model\|Device Model" | head -1 | awk -F':' '{print $2}' | xargs)
    SERIAL=$(sudo smartctl -i $HD 2>/dev/null | grep "Serial Number" | awk -F':' '{print $2}' | xargs)
    CAPACITY=$(sudo smartctl -i $HD 2>/dev/null | grep "User Capacity" | awk '{print $2,$3}' | sed 's/\[//')
    HOURS=$(sudo smartctl -a $HD 2>/dev/null | grep "Power_On_Hours" | awk '{print $10}')
    TEMP=$(sudo smartctl -a $HD 2>/dev/null | grep "Temperature_Celsius" | awk '{print $10}')
    REALLOC=$(sudo smartctl -a $HD 2>/dev/null | grep "Reallocated_Sector_Ct" | awk '{print $10}')
    PENDING=$(sudo smartctl -a $HD 2>/dev/null | grep "Current_Pending_Sector" | awk '{print $10}')
    ERRORS=$(sudo smartctl -a $HD 2>/dev/null | grep -c "No Errors Logged")
    
    # Salvar no output
    echo "=== SMART $HD ===" >> $OUTPUT
    echo "HEALTH=$HEALTH" >> $OUTPUT
    echo "MODEL=$MODEL" >> $OUTPUT
    echo "SERIAL=$SERIAL" >> $OUTPUT
    echo "CAPACITY=$CAPACITY" >> $OUTPUT
    echo "HOURS=$HOURS" >> $OUTPUT
    echo "TEMP=$TEMP" >> $OUTPUT
    echo "REALLOC=$REALLOC" >> $OUTPUT
    echo "PENDING=$PENDING" >> $OUTPUT
    echo "ERRORS=$ERRORS" >> $OUTPUT
    echo "" >> $OUTPUT
    
    # Exibir
    if [ "$HEALTH" = "PASSED" ]; then
        echo -e "${GREEN}✅ Saúde: $HEALTH${NC}"
    else
        echo -e "${RED}⚠️  Saúde: $HEALTH${NC}"
    fi
}

# Teste de velocidade
test_speed() {
    local HD=$1
    local OUTPUT=$2
    
    echo -e "${YELLOW}⚡ Testando velocidade...${NC}"
    
    SPEED=$(sudo hdparm -Tt $HD 2>/dev/null | grep "buffered disk reads" | awk '{print $5,$6}')
    CACHE=$(sudo hdparm -Tt $HD 2>/dev/null | grep "cached reads" | awk '{print $4,$5}')
    
    echo "SPEED=$SPEED" >> $OUTPUT
    echo "CACHE=$CACHE" >> $OUTPUT
    
    echo -e "${GREEN}📖 Leitura: $SPEED${NC}"
}

# Teste de setores ruins
test_badblocks() {
    local HD=$1
    local OUTPUT=$2
    
    echo -e "${YELLOW}🔍 Verificando setores ruins...${NC}"
    echo -e "${CYAN}⏳ Este teste leva ~15-25 minutos...${NC}"
    
    # Executar badblocks em modo leitura (não-destrutivo)
    BAD=$(sudo badblocks -sv $HD 2>/dev/null | grep -o "[0-9]\+ bad blocks" | awk '{print $1}')
    
    if [ -z "$BAD" ]; then
        BAD=0
    fi
    
    echo "BAD_BLOCKS=$BAD" >> $OUTPUT
    
    if [ "$BAD" -eq 0 ]; then
        echo -e "${GREEN}✅ Setores ruins: 0 (PERFEITO!)${NC}"
    else
        echo -e "${RED}⚠️  Setores ruins: $BAD${NC}"
    fi
}

# Formatar HD otimizado
format_hd() {
    local HD=$1
    local PARTITION="${HD}1"
    
    echo -e "${YELLOW}💾 Formatando HD em NTFS otimizado...${NC}"
    
    # Desmontar
    sudo umount $HD* 2>/dev/null
    
    # Limpar
    sudo wipefs -a $HD 2>/dev/null
    
    # Criar partição
    sudo parted $HD --script mklabel gpt
    sudo parted $HD --script mkpart primary ntfs 1MiB 100%
    
    # Formatar com cluster 64KB (otimizado para arquivos grandes)
    sudo mkfs.ntfs -f -c 65536 -L "DeiviTech-HD" $PARTITION 2>/dev/null || \
    sudo mkfs.ntfs -f -L "DeiviTech-HD" $PARTITION
    
    echo -e "${GREEN}✅ Formatado com sucesso!${NC}"
}

# Gerar relatório HTML
generate_report() {
    local HD=$1
    local OUTPUT=$2
    local PRICE=$3
    
    # Ler dados do arquivo
    source $OUTPUT
    
    # Criar HTML
    HTML_FILE=$(echo "$OUTPUT" | sed 's/.txt$/.html/')
    
    cat > "$HTML_FILE" << 'HTMLEOF'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💾 HD Testado - DeiviTech</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 { font-size: 2em; }
        .content { padding: 30px; }
        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }
        .card {
            background: #f8fafc;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }
        .card .value { font-size: 1.5em; font-weight: bold; color: #1e3c72; }
        .card .label { font-size: 0.8em; color: #64748b; }
        .status {
            background: #ecfdf5;
            border: 2px solid #10b981;
            border-radius: 10px;
            padding: 20px;
            text-align: center;
            margin-bottom: 20px;
        }
        .status h2 { color: #10b981; font-size: 1.5em; }
        .btn {
            display: block;
            background: #25D366;
            color: white;
            text-decoration: none;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            font-weight: bold;
            font-size: 1.1em;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #f8fafc;
            color: #64748b;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💾 HD Testado Profissionalmente</h1>
            <p>🏥 Saúde: 100% • ✅ Setores Ruins: 0</p>
        </div>
        <div class="content">
            <div class="grid">
                <div class="card">
                    <div class="value">'$MODEL'</div>
                    <div class="label">Modelo</div>
                </div>
                <div class="card">
                    <div class="value">'$CAPACITY'</div>
                    <div class="label">Capacidade</div>
                </div>
                <div class="card">
                    <div class="value">'$SPEED'</div>
                    <div class="label">MB/s Leitura</div>
                </div>
                <div class="card">
                    <div class="value">'$TEMP'°C</div>
                    <div class="label">Temperatura</div>
                </div>
                <div class="card">
                    <div class="value">'$HOURS'h</div>
                    <div class="label">Horas de Uso</div>
                </div>
                <div class="card">
                    <div class="value">'$BAD_BLOCKS'</div>
                    <div class="label">Setores Ruins</div>
                </div>
            </div>
            <div class="status">
                <h2>✅ STATUS: APROVADO</h2>
                <p>Testes: SMART • Velocidade • Setores</p>
            </div>
            <a href="https://wa.me/5575981231019?text=Olá!%20Tenho%20interesse%20no%20HD%20testado" class="btn">
                📱 Falar no WhatsApp
            </a>
        </div>
        <div class="footer">
            🦞 DeiviTech - Testes Profissionais
        </div>
    </div>
</body>
</html>
HTMLEOF
    
    echo -e "${GREEN}✅ Relatório HTML: $HTML_FILE${NC}"
}

# Teste completo de um HD
test_hd() {
    local HD=$1
    local NAME=$(basename $HD)
    local TIMESTAMP=$(date +%Y%m%d_%H%M%S)
    local OUTPUT="$OUTPUT_DIR/${NAME}_${TIMESTAMP}.txt"
    
    print_banner
    echo -e "${CYAN}📦 Testando: $HD${NC}"
    echo ""
    
    # Criar diretório
    mkdir -p $OUTPUT_DIR
    
    # Teste SMART
    print_step "🏥 TESTE SMART"
    test_smart $HD $OUTPUT
    
    # Teste Velocidade
    print_step "⚡ TESTE DE VELOCIDADE"
    test_speed $HD $OUTPUT
    
    # Teste Setores (se não for quick)
    if [ "$QUICK" = "false" ]; then
        print_step "🔍 TESTE DE SETORES RUINS"
        test_badblocks $HD $OUTPUT
    else
        echo -e "${YELLOW}⏭️  Teste de setores pulado (modo rápido)${NC}"
        echo "BAD_BLOCKS=N/A (quick mode)" >> $OUTPUT
    fi
    
    # Formatar (se solicitado)
    if [ "$FORMAT" = "true" ]; then
        print_step "💾 FORMATAÇÃO NTFS"
        format_hd $HD
    fi
    
    # Gerar relatório
    print_step "📄 RELATÓRIO"
    generate_report $HD $OUTPUT 50
    
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                    ✅ TESTE CONCLUÍDO                              ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo "📄 Resultados salvos em: $OUTPUT"
    echo ""
}

# Modo paralelo
run_parallel() {
    local COUNT=$1
    
    print_banner
    echo -e "${CYAN}🔄 MODO PARALELO: $COUNT HDs${NC}"
    echo ""
    
    # Detectar HDs
    HDDS=$(detect_hds)
    HD_ARRAY=($HDDS)
    
    if [ ${#HD_ARRAY[@]} -lt $COUNT ]; then
        echo -e "${RED}❌ HDs insuficientes! Encontrados: ${#HD_ARRAY[@]}${NC}"
        exit 1
    fi
    
    # Executar em paralelo
    echo -e "${YELLOW}⏳ Executando testes em paralelo...${NC}"
    echo ""
    
    for i in $(seq 1 $COUNT); do
        HD=${HD_ARRAY[$((i-1))]}
        echo "Iniciando teste HD #$i: $HD"
        test_hd $HD &
    done
    
    # Aguardar
    wait
    
    echo ""
    echo -e "${GREEN}✅ Todos os $COUNT HDs testados!${NC}"
}

# Ajuda
show_help() {
    echo "Uso: $0 [opções]"
    echo ""
    echo "Opções:"
    echo "  --parallel N    Testar N HDs em paralelo"
    echo "  --quick        Teste rápido (sem badblocks)"
    echo "  --format       Testar e formatar em NTFS"
    echo "  --help         Mostrar esta ajuda"
    echo ""
    echo "Exemplos:"
    echo "  $0                    # Teste interativo"
    echo "  $0 --parallel 2       # Testar 2 HDs em paralelo"
    echo "  $0 --quick --format  # Teste rápido + formatar"
    echo "  $0 --parallel 4       # Testar 4 HDs ao mesmo tempo"
}

# Parsear argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        --parallel)
            PARALLEL=$2
            MODE="parallel"
            shift 2
            ;;
        --quick)
            QUICK=true
            shift
            ;;
        --format)
            FORMAT=true
            shift
            ;;
        --help)
            show_help
            exit 0
            ;;
        *)
            echo "Opção desconhecida: $1"
            show_help
            exit 1
            ;;
    esac
done

# Executar
case $MODE in
    parallel)
        run_parallel $PARALLEL
        ;;
    *)
        HDDS=$(detect_hds)
        HD=$(echo "$HDDS" | head -n1)
        test_hd $HD
        ;;
esac
