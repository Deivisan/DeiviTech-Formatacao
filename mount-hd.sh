#!/bin/bash

# Script de montagem automática de HD
# Uso: ./mount-hd.sh [mount|unmount|status]

MOUNT_POINT="$HOME/hd_mount"
ACTION="${1:-status}"

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[OK]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[AVISO]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERRO]${NC} $1"
}

# Detectar dispositivos USB/HD externos
detect_devices() {
    print_status "Detectando dispositivos de armazenamento..."
    echo ""
    echo -e "${BLUE}=== Discos do Sistema (NVMe) ===${NC}"
    lsblk -f | grep -E "nvme"
    echo ""
    echo -e "${YELLOW}=== Dispositivos USB/SATA Externos ===${NC}"
    lsblk -f | grep -E "(sd[a-z]|sr[0-9]|mmcblk)" || echo "Nenhum dispositivo externo detectado"
    echo ""
    echo -e "${GREEN}=== Todos os Dispositivos ===${NC}"
    lsblk -f
}

# Montar dispositivo
mount_device() {
    # Verificar se há dispositivos disponíveis
    DEVICES=$(lsblk -dn -o NAME,TYPE | grep -E "disk" | grep -v "nvme" | awk '{print "/dev/" $1}')
    
    if [ -z "$DEVICES" ]; then
        print_error "Nenhum dispositivo externo detectado!"
        print_status "Conecte o HD e tente novamente."
        exit 1
    fi
    
    # Listar dispositivos encontrados
    echo -e "${BLUE}Dispositivos encontrados:${NC}"
    echo "$DEVICES" | nl
    echo ""
    
    # Perguntar qual montar (ou usar o primeiro)
    read -p "Digite o número do dispositivo (ou Enter para o primeiro): " choice
    
    if [ -z "$choice" ]; then
        SELECTED=$(echo "$DEVICES" | head -n1)
    else
        SELECTED=$(echo "$DEVICES" | sed -n "${choice}p")
    fi
    
    if [ -z "$SELECTED" ]; then
        print_error "Seleção inválida!"
        exit 1
    fi
    
    print_status "Dispositivo selecionado: $SELECTED"
    
    # Verificar partições
    PARTITIONS=$(lsblk -dn -o NAME "$SELECTED" | grep -v "$(basename $SELECTED)$" | awk '{print "/dev/" $1}')
    
    if [ -n "$PARTITIONS" ]; then
        echo -e "${BLUE}Partições encontradas:${NC}"
        echo "$PARTITIONS" | nl
        read -p "Digite o número da partição (ou Enter para a primeira): " part_choice
        
        if [ -z "$part_choice" ]; then
            DEVICE=$(echo "$PARTITIONS" | head -n1)
        else
            DEVICE=$(echo "$PARTITIONS" | sed -n "${part_choice}p")
        fi
    else
        DEVICE="$SELECTED"
    fi
    
    print_status "Montando $DEVICE em $MOUNT_POINT..."
    
    # Criar ponto de montagem
    mkdir -p "$MOUNT_POINT"
    
    # Tentar montagem com udisksctl primeiro
    if command -v udisksctl &> /dev/null; then
        udisksctl mount -b "$DEVICE" --filesystem-type=auto 2>/dev/null
        if [ $? -eq 0 ]; then
            print_success "Dispositivo montado com sucesso via udisksctl!"
            echo ""
            ls -la "$MOUNT_POINT"
            echo ""
            echo -e "${GREEN}Acesso:${NC} cd $MOUNT_POINT"
            exit 0
        fi
    fi
    
    # Fallback para mount manual
    sudo mount "$DEVICE" "$MOUNT_POINT" 2>/dev/null
    if [ $? -eq 0 ]; then
        print_success "Dispositivo montado com sucesso!"
        echo ""
        ls -la "$MOUNT_POINT"
        echo ""
        echo -e "${GREEN}Acesso:${NC} cd $MOUNT_POINT"
    else
        print_error "Falha ao montar o dispositivo!"
        print_status "Tentando identificar o sistema de arquivos..."
        sudo fdisk -l "$DEVICE" 2>/dev/null || sudo blkid "$DEVICE"
    fi
}

# Desmontar dispositivo
unmount_device() {
    print_status "Desmontando dispositivos em $MOUNT_POINT..."
    
    # Verificar se há algo montado
    MOUNTED=$(mount | grep "$MOUNT_POINT")
    
    if [ -z "$MOUNTED" ]; then
        print_warning "Nenhum dispositivo montado em $MOUNT_POINT"
        exit 0
    fi
    
    # Tentar com udisksctl
    DEVICE=$(mount | grep "$MOUNT_POINT" | awk '{print $1}')
    
    if command -v udisksctl &> /dev/null; then
        udisksctl unmount -b "$DEVICE" 2>/dev/null
        if [ $? -eq 0 ]; then
            print_success "Dispositivo desmontado com sucesso!"
            exit 0
        fi
    fi
    
    # Fallback
    sudo umount "$MOUNT_POINT" 2>/dev/null
    if [ $? -eq 0 ]; then
        print_success "Dispositivo desmontado com sucesso!"
    else
        print_error "Falha ao desmontar! Verifique se há arquivos abertos."
    fi
}

# Mostrar status
show_status() {
    print_status "Status dos dispositivos de armazenamento:"
    echo ""
    lsblk -f
    echo ""
    
    MOUNTED=$(mount | grep "$MOUNT_POINT")
    if [ -n "$MOUNTED" ]; then
        print_success "Dispositivo montado:"
        echo "$MOUNTED"
        echo ""
        echo -e "${BLUE}Conteúdo:${NC}"
        ls -la "$MOUNT_POINT" 2>/dev/null || print_warning "Não foi possível listar conteúdo"
    else
        print_warning "Nenhum dispositivo montado em $MOUNT_POINT"
    fi
}

# Menu principal
case "$ACTION" in
    mount|m)
        mount_device
        ;;
    unmount|umount|u)
        unmount_device
        ;;
    status|s)
        show_status
        ;;
    detect|d)
        detect_devices
        ;;
    *)
        echo "Uso: $0 [mount|unmount|status|detect]"
        echo ""
        echo "Comandos:"
        echo "  mount    - Montar HD externo"
        echo "  unmount  - Desmontar HD"
        echo "  status   - Ver status atual"
        echo "  detect   - Detectar dispositivos"
        echo ""
        show_status
        ;;
esac