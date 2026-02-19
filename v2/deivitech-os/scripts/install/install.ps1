# DeiviTech OS - Script de Instalação
# Execute como Administrador no PowerShell
# Versão: 1.0.0

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
║              SISTEMA PERSONALIZADO v1.0                     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝

"@ -ForegroundColor Cyan

Write-Host "Perfil: $Profile" -ForegroundColor Yellow
Write-Host ""

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "❌ Execute como Administrador!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Administrador OK" -ForegroundColor Green

$configScript = Join-Path $PSScriptRoot "config\configure-$Profile.ps1"
if (Test-Path $configScript) {
    & $configScript
}

$regPath = "HKLM:\SOFTWARE\DeiviTech\OS"
if (-not (Test-Path $regPath)) { New-Item -Path $regPath -Force | Out-Null }
Set-ItemProperty -Path $regPath -Name "Version" -Value "1.0.0"
Set-ItemProperty -Path $regPath -Name "Profile" -Value $Profile

Write-Host ""
Write-Host "✅ Instalação concluída!" -ForegroundColor Green
Write-Host "🔄 Reinicie o PC." -ForegroundColor Yellow
