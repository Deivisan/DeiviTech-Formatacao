# DeiviTech OS - Documentação de Instalação

## Visão Geral

DeiviTech OS é uma versão personalizada e otimizada do Windows para diferentes perfis de uso.

## Perfis Disponíveis

| Perfil | Público | Preço Sugerido |
|--------|---------|----------------|
| Gamer | Jogadores hardcore | R$ 150 |
| Dev | Desenvolvedores | R$ 180 |
| Corporate | Empresas | R$ 200 |
| Basic | Usuários comuns | R$ 80 |

## Instalação

### Método 1: Script Automatizado

```powershell
# Baixe o script
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/Deivisan/DeiviTech-Formatacao/main/deivitech-os/scripts/install/install-base.ps1" -OutFile "$env:TEMP\install-deivitech.ps1"

# Execute como Administrador
powershell -ExecutionPolicy Bypass -File "$env:TEMP\install-deivitech.ps1" -Profile gamer
```

### Método 2: Manual

1. Clone o repositório
2. Execute PowerShell como Administrador
3. Navegue até a pasta `deivitech-os/scripts/install`
4. Execute: `.\install-base.ps1 -Profile <perfil>`

## Perfis

### Gamer
- Game Mode ativado
- Otimizações de rede para jogos
- Software: Steam, Epic Games, OBS
- Remoção de serviços desnecessários

### Dev
- VS Code, Git, Docker
- WSL2 Ubuntu
- Terminal Windows configurado
- Node.js, Python

### Corporate
- BitLocker
- Políticas de segurança
- Teams, Office
- Updates atrasados (estabilidade)

### Basic
- Interface simplificada
- Manutenção automática
- Apps essenciais
- Tutoriais integrados

## Troubleshooting

### Erro: "Execute como Administrador"
```powershell
# Clique com botão direito no PowerShell
# Selecione "Executar como Administrador"
```

### Erro: Winget não encontrado
Baixe o instalador: https://github.com/microsoft/winget-cli

### Suporte
WhatsApp: https://wa.me/5575981231019
GitHub: https://github.com/Deivisan/DeiviTech-Formatacao

## Licença

Uso interno DeiviTech © 2026
