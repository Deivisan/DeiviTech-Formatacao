# DeiviTech OS - Instalador Base
# Extensão/Segunda Opção ao lado do Ghost Spectre
# Execute como Administrador no PowerShell

param(
    [ValidateSet("gamer", "dev", "corporate", "basic")]
    [string]$Profile = "basic"
)

$ErrorActionPreference = "Stop"

Write-Host @"

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║     ██████╗ ██████╗ ██╗   ██╗██╗   ██╗███████╗██╗      ║
║     ██╔══██╗██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║      ║
║     ██║  ██║██████╔╝ ╚████╔╝ ██║   ██║█████╗  ██║      ║
║     ██║  ██║██╔══██╗  ╚██╔╝  ██║   ██║██╔══╝  ██║      ║
║     ██████╔╝██║  ██║   ██║   ╚██████╔╝███████╗███████╗║
║     ╚═════╝ ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚══════╝║
║                                                            ║
║              SISTEMA PERSONALIZADO v1.0                    ║
║              Segunda Opção | Marca Própria                ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

"@ -ForegroundColor Cyan

Write-Host "Perfil selecionado: $Profile" -ForegroundColor Yellow
Write-Host ""

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "❌ Execute como Administrador!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Verificação de administrador OK" -ForegroundColor Green
Write-Host "💾 Verificando espaço em disco..." -ForegroundColor Yellow

$driveC = Get-PSDrive C
if ($driveC.Free / 1GB -lt 10) {
    Write-Host "❌ Espaço insuficiente. Mínimo 10GB necessário." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Espaço em disco OK ($([math]::Round($driveC.Free / 1GB, 2))GB livre)" -ForegroundColor Green
Write-Host ""

Write-Host "🔧 Iniciando configuração do perfil: $Profile" -ForegroundColor Cyan

$configScript = Join-Path $PSScriptRoot "config\configure-$Profile.ps1"

if (Test-Path $configScript) {
    Write-Host "📜 Executando script de configuração..." -ForegroundColor Yellow
    & $configScript
} else {
    Write-Host "⚠ Script de perfil não encontrado. Usando configuração básica." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📦 Registrando no sistema..." -ForegroundColor Yellow

$regPath = "HKLM:\SOFTWARE\DeiviTech\OS"
if (-not (Test-Path $regPath)) {
    New-Item -Path $regPath -Force | Out-Null
}

Set-ItemProperty -Path $regPath -Name "Version" -Value "1.0.0"
Set-ItemProperty -Path $regPath -Name "Profile" -Value $Profile
Set-ItemProperty -Path $regPath -Name "InstallDate" -Value (Get-Date -Format "yyyy-MM-dd")
Set-ItemProperty -Path $regPath -Name "Status" -Value "Installed"

Write-Host "✅ DeiviTech OS registrado no sistema" -ForegroundColor Green
Write-Host ""

Write-Host @"

╔════════════════════════════════════════════════════════════╗
║                                                            ║
║  ✅ INSTALAÇÃO CONCLUÍDA COM SUCESSO!                    ║
║                                                            ║
║  Perfil: $Profile                                         ║
║  Data: $(Get-Date -Format 'yyyy-MM-dd HH:mm')             ║
║                                                            ║
║  Para suporte: https://wa.me/5575981231019                ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

"@ -ForegroundColor Green

Write-Host "🔄 Reinicie o PC para aplicar todas as otimizações." -ForegroundColor Yellow
