# DeiviTech OS - Otimização de Sistema
# Script de otimização geral para qualquer perfil

param(
    [switch]$Aggressive,
    [switch]$Safe,
    [switch]$GameMode
)

$ErrorActionPreference = "Stop"

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "❌ Execute como Administrador!" -ForegroundColor Red
    exit 1
}

Write-Host "`n⚡ DeiviTech OS - Otimização de Sistema" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

function Optimize-Service {
    param($Name, $StartupType)
    try {
        Set-Service -Name $Name -StartupType $StartupType -ErrorAction Stop
        Write-Host "  ✓ $Name definido para $StartupType" -ForegroundColor Green
    } catch {
        Write-Host "  ⚠ $Name não disponível" -ForegroundColor Yellow
    }
}

function Optimize-Registry {
    param($Path, $Name, $Value, $Type = "DWord")
    try {
        if (-not (Test-Path $Path)) { New-Item -Path $Path -Force | Out-Null }
        Set-ItemProperty -Path $Path -Name $Name -Value $Value -Type $Type -ErrorAction Stop
        Write-Host "  ✓ $Name otimizado" -ForegroundColor Green
    } catch {
        Write-Host "  ⚠ $Name não pode ser otimizado" -ForegroundColor Yellow
    }
}

Write-Host "`n🔧 Otimizando serviços..." -ForegroundColor Yellow

$servicesToDisable = @(
    "DiagTrack", "WSearch", "Spooler", "TabletInputService",
    "Themes", "RemoteRegistry", "RemoteDesktopServices"
)

$servicesToEnable = @(
    "Winmgmt", "EventLog", "Dhcp", "Dnscache", "LanmanServer", "LanmanWorkstation"
)

if ($Aggressive) {
    $servicesToDisable += @("BITS", "TrustedInstaller", "wuauserv")
}

foreach ($svc in $servicesToDisable) {
    Optimize-Service -Name $svc -StartupType Disabled
}

foreach ($svc in $servicesToEnable) {
    Optimize-Service -Name $svc -StartupType Automatic
}

Write-Host "`n⚡ Otimizando memória e performance..." -ForegroundColor Yellow

$memPath = "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management"
Optimize-Registry -Path $memPath -Name "DisablePagingExecutive" -Value 1
Optimize-Registry -Path $memPath -Name "LargeSystemCache" -Value 1
Optimize-Registry -Path $memPath -Name "ClearPageFileAtShutdown" -Value 0

Write-Host "`n🎮 Otimizando para jogos..." -ForegroundColor Yellow

if ($GameMode -or $Aggressive) {
    $gamePath = "HKCU:\Software\Microsoft\GameBar"
    Optimize-Registry -Path $gamePath -Name "AutoGameModeEnabled" -Value 1
    Optimize-Registry -Path $gamePath -Name "AllowAutoGameMode" -Value 1
    
    $gameDevPath = "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\GameDVR"
    Optimize-Registry -Path $gameDevPath -Name "AppCaptureEnabled" -Value 0
    
    Write-Host "  ✓ Game Mode ativado" -ForegroundColor Green
}

Write-Host "`n🌐 Otimizando rede..." -ForegroundColor Yellow

$netPath = "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters"
Optimize-Registry -Path $netPath -Name "DefaultTTL" -Value 64
Optimize-Registry -Path $netPath -Name "TcpTimedWaitDelay" -Value 30
Optimize-Registry -Path $netPath -Name "MaxUserPort" -Value 65534

Write-Host "`n💾 Otimizando disco..." -ForegroundColor Yellow

$diskPath = "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem"
Optimize-Registry -Path $diskPath -Name "NtfsMftZoneReservation" -Value 2
Optimize-Registry -Path $diskPath -Name "NtfsDisableLastAccessUpdate" -Value 1 -Type "DWord"
Optimize-Registry -Path $diskPath -Name "DisableTurboBoost" -Value 0

Write-Host "`n🔄 Aplicando tweaks visuais..." -ForegroundColor Yellow

if ($Safe) {
    Write-Host "  Modo Seguro: pulando tweaks visuais" -ForegroundColor Cyan
} else {
    $visualPath = "HKCU:\Control Panel\Desktop"
    Optimize-Registry -Path $visualPath -Name "MenuShowDelay" -Value 0
    Optimize-Registry -Path $visualPath -Name "ForegroundLockTimeout" -Value 0
    
    $visualPath2 = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\VisualEffects"
    Optimize-Registry -Path $visualPath2 -Name "VisualFXSetting" -Value 2
}

Write-Host "`n🧹 Limpando sistema..." -ForegroundColor Yellow

try {
    Remove-Item -Path "$env:TEMP\*" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  ✓ Temp limpo" -ForegroundColor Green
} catch { }

try {
    Remove-Item -Path "$env:LOCALAPPDATA\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "  ✓ Local Temp limpo" -ForegroundColor Green
} catch { }

Write-Host "`n========================================" -ForegroundColor Green
Write-Host "✅ Otimização concluída!" -ForegroundColor Green
Write-Host "   Reinicie o PC para aplicar todas as mudanças." -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Green
