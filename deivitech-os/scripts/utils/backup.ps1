# DeiviTech OS - Utilitário de Backup
# Cria backup do sistema antes de modificações

param(
    [switch]$SystemState,
    [switch]$Drivers,
    [switch]$Profiles,
    [string]$BackupPath = "$env:USERPROFILE\DeiviTechOS-Backups"
)

$ErrorActionPreference = "Stop"

function Write-BackupLog {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] [$Level] $Message"
    
    $color = switch ($Level) {
        "INFO"    { "Cyan" }
        "SUCCESS" { "Green" }
        "WARN"    { "Yellow" }
        "ERROR"   { "Red" }
    }
    Write-Host $logMessage -ForegroundColor $color
}

$backupDate = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$backupFolder = Join-Path $BackupPath $backupDate

Write-BackupLog "========================================" "INFO"
Write-BackupLog "  DeiviTech OS - Backup System" "INFO"
Write-BackupLog "========================================" "INFO"

if (-not (Test-Path $BackupPath)) {
    New-Item -ItemType Directory -Path $BackupPath -Force | Out-Null
}

if (-not (Test-Path $backupFolder)) {
    New-Item -ItemType Directory -Path $backupFolder -Force | Out-Null
}

Write-BackupLog "Pasta de backup: $backupFolder" "INFO"

if ($SystemState) {
    Write-BackupLog "`n📦 Criando ponto de restauração do sistema..." "INFO"
    
    try {
        Checkpoint-Computer -Description "DeiviTechOS_Backup_$backupDate" -ErrorAction Stop
        Write-BackupLog "✓ Ponto de restauração criado" "SUCCESS"
    } catch {
        Write-BackupLog "✗ Falha ao criar ponto de restauração: $($_.Exception.Message)" "ERROR"
    }
}

if ($Drivers) {
    Write-BackupLog "`n📦 Fazendo backup dos drivers..." "INFO"
    
    $driversFolder = Join-Path $backupFolder "Drivers"
    New-Item -ItemType Directory -Path $driversFolder -Force | Out-Null
    
    try {
        $exportResult = & pnputil /export /adir "$driversFolder" 2>&1
        Write-BackupLog "✓ Drivers exportados para: $driversFolder" "SUCCESS"
    } catch {
        Write-BackupLog "⚠ Erro ao exportar drivers: $($_.Exception.Message)" "WARN"
    }
}

if ($Profiles) {
    Write-BackupLog "`n📦 Fazendo backup dos perfis de usuário..." "INFO"
    
    $profilesFolder = Join-Path $backupFolder "Profiles"
    New-Item -ItemType Directory -Path $profilesFolder -Force | Out-Null
    
    $pathsToBackup = @(
        "$env:APPDATA\Microsoft\Windows Terminal",
        "$env:USERPROFILE\.gitconfig",
        "$env:USERPROFILE\.ssh"
    )
    
    foreach ($path in $pathsToBackup) {
        if (Test-Path $path) {
            $dest = Join-Path $profilesFolder (Split-Path $path -Leaf)
            try {
                Copy-Item -Path $path -Destination $dest -Recurse -Force -ErrorAction Stop
                Write-BackupLog "✓ Copiado: $path" "SUCCESS"
            } catch {
                Write-BackupLog "⚠ Erro ao copiar $path: $($_.Exception.Message)" "WARN"
            }
        }
    }
}

$registryBackup = Join-Path $backupFolder "DeiviTechOS_Registry.reg"
Write-BackupLog "`n📦 Exportando registros do DeiviTech..." "INFO"

try {
    $deiviTechPath = "HKLM:\SOFTWARE\DeiviTech"
    if (Test-Path $deiviTechPath) {
        reg export $deiviTechPath $registryBackup /y 2>$null
        Write-BackupLog "✓ Registro exportado" "SUCCESS"
    } else {
        Write-BackupLog "⚠ Nenhum registro DeiviTech encontrado" "WARN"
    }
} catch {
    Write-BackupLog "⚠ Erro ao exportar registro: $($_.Exception.Message)" "WARN"
}

$backupInfo = @{
    Date = $backupDate
    Computer = $env:COMPUTERNAME
    User = $env:USERNAME
    Profile = $Profile
    Options = @{
        SystemState = $SystemState
        Drivers = $Drivers
        Profiles = $Profiles
    }
} | ConvertTo-Json

$infoFile = Join-Path $backupFolder "backup-info.json"
Set-Content -Path $infoFile -Value $backupInfo

Write-BackupLog "`n========================================" "SUCCESS"
Write-BackupLog "  Backup concluído com sucesso!" "SUCCESS"
Write-BackupLog "  Local: $backupFolder" "SUCCESS"
Write-BackupLog "========================================" "SUCCESS"

Write-BackupLog "`nPara restaurar, use:" "INFO"
Write-BackupLog "  1. Sistema: Painel de Controle > Restauração do Sistema" "INFO"
Write-BackupLog "  2. Drivers: pnputil /add-driver $driversFolder\*.inf" "INFO"
Write-BackupLog "  3. Perfil: Copie manualmente de $profilesFolder" "INFO"

return $backupFolder
