# DeiviTech OS - Script de Instalação Base
# Execute como Administrador no PowerShell
# Versão: 1.0.0 - Fevereiro 2026

param(
    [ValidateSet("gamer", "dev", "corporate", "basic")]
    [string]$Profile = "basic",
    
    [switch]$Silent,
    [switch]$Logging
)

$ErrorActionPreference = "Stop"
$Global:DeiviTechOS = @{
    Version = "1.0.0"
    Profile = $Profile
    StartTime = Get-Date
    LogPath = "$env:TEMP\DeiviTechOS-Install.log"
}

function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] [$Level] $Message"
    
    if ($Logging) {
        Add-Content -Path $Global:DeiviTechOS.LogPath -Value $logMessage
    }
    
    $color = switch ($Level) {
        "INFO" { "Cyan" }
        "SUCCESS" { "Green" }
        "WARN" { "Yellow" }
        "ERROR" { "Red" }
        default { "White" }
    }
    
    if (-not $Silent) {
        Write-Host $logMessage -ForegroundColor $color
    }
}

function Test-Administrator {
    $currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($currentUser)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Initialize-Environment {
    Write-Log "========================================" "INFO"
    Write-Log "  DeiviTech OS v$($Global:DeiviTechOS.Version) Installer" "INFO"
    Write-Log "  Perfil: $Profile" "INFO"
    Write-Log "========================================" "INFO"
    
    if (-not (Test-Administrator)) {
        Write-Log "Execute como Administrador!" "ERROR"
        exit 1
    }
    
    Write-Log "Inicializando ambiente..." "INFO"
}

function Remove-Bloatware {
    Write-Log "Removendo bloatware..." "INFO"
    
    $bloatware = @(
        "Microsoft.3DBuilder"
        "Microsoft.BingFinance"
        "Microsoft.BingNews"
        "Microsoft.BingSports"
        "Microsoft.GetHelp"
        "Microsoft.Getstarted"
        "Microsoft.Microsoft3DViewer"
        "Microsoft.MicrosoftSolitaireCollection"
        "Microsoft.NetworkExplorer"
        "Microsoft.Office.OneNote"
        "Microsoft.People"
        "Microsoft.SkypeApp"
        "Microsoft.Wallet"
        "Microsoft.WindowsAlarms"
        "Microsoft.WindowsCamera"
        "Microsoft.WindowsMaps"
        "Microsoft.WindowsSoundRecorder"
        "Microsoft.XboxApp"
        "Microsoft.XboxGameOverlay"
        "Microsoft.XboxIdentityProvider"
        "Microsoft.ZuneMusic"
        "Microsoft.ZuneVideo"
    )
    
    foreach ($app in $bloatware) {
        try {
            Get-AppxPackage -Name $app -ErrorAction SilentlyContinue | 
                Remove-AppxPackage -ErrorAction SilentlyContinue
            Write-Log "  Removido: $app" "SUCCESS"
        } catch {
            Write-Log "  Falha: $app" "WARN"
        }
    }
}

function Optimize-Performance {
    Write-Log "Otimizando performance..." "INFO"
    
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" -Name "DisablePagingExecutive" -Value 1 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management" -Name "LargeSystemCache" -Value 1 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "NtfsMftZoneReservation" -Value 2 -ErrorAction SilentlyContinue
    
    Write-Log "  Performance otimizada" "SUCCESS"
}

function Configure-Security {
    Write-Log "Configurando segurança..." "INFO"
    
    Set-MpPreference -DisableRealtimeMonitoring $false -ErrorAction SilentlyContinue
    Set-MpPreference -DisableBehaviorMonitoring $false -ErrorAction SilentlyContinue
    
    Write-Log "  Segurança configurada" "SUCCESS"
}

function Install-BaseSoftware {
    Write-Log "Instalando software base..." "INFO"
    
    $wingetPackages = @(
        "7zip.7zip",
        "VideoLAN.VLC",
        "Google.Chrome",
        "Discord.Discord"
    )
    
    foreach ($package in $wingetPackages) {
        try {
            winget install --id $package -e --silent --accept-package-agreements --accept-source-agreements 2>$null
            Write-Log "  Instalado: $package" "SUCCESS"
        } catch {
            Write-Log "  Falha: $package" "WARN"
        }
    }
}

function Apply-Profile {
    Write-Log "Aplicando perfil: $Profile" "INFO"
    
    $profileScript = Join-Path $PSScriptRoot "config\configure-$Profile.ps1"
    
    if (Test-Path $profileScript) {
        & $profileScript
    } else {
        Write-Log "Script de perfil não encontrado: $profileScript" "WARN"
    }
}

function Set-Branding {
    Write-Log "Aplicando marca DeiviTech..." "INFO"
    
    $brandPath = "HKLM:\SOFTWARE\DeiviTech\OS"
    if (-not (Test-Path $brandPath)) {
        New-Item -Path $brandPath -Force | Out-Null
    }
    
    Set-ItemProperty -Path $brandPath -Name "Version" -Value $Global:DeiviTechOS.Version
    Set-ItemProperty -Path $brandPath -Name "Profile" -Value $Profile
    Set-ItemProperty -Path $brandPath -Name "InstallDate" -Value (Get-Date -Format "yyyy-MM-dd")
    
    Write-Log "  Marca aplicada" "SUCCESS"
}

function Complete-Installation {
    $duration = (Get-Date) - $Global:DeiviTechOS.StartTime
    
    Write-Log "========================================" "SUCCESS"
    Write-Log "  Instalação concluída!" "SUCCESS"
    Write-Log "  Perfil: $Profile" "SUCCESS"
    Write-Log "  Tempo: $($duration.ToString('mm\:ss'))" "SUCCESS"
    Write-Log "========================================" "SUCCESS"
}

Initialize-Environment
Remove-Bloatware
Optimize-Performance
Configure-Security
Install-BaseSoftware
Apply-Profile
Set-Branding
Complete-Installation
