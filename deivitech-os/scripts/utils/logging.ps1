# DeiviTech OS - Utilitário de Logging
# Funções de logging para scripts

$Global:LogFile = "$env:TEMP\DeiviTechOS.log"
$Global:LogLevel = "INFO"

function Write-Log {
    param(
        [Parameter(Mandatory=$true)]
        [string]$Message,
        
        [ValidateSet("DEBUG", "INFO", "WARN", "ERROR", "SUCCESS")]
        [string]$Level = "INFO"
    )
    
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $logMessage = "[$timestamp] [$Level] $Message"
    
    Add-Content -Path $Global:LogFile -Value $logMessage
    
    $color = switch ($Level) {
        "DEBUG"   { "Gray" }
        "INFO"    { "Cyan" }
        "WARN"    { "Yellow" }
        "ERROR"   { "Red" }
        "SUCCESS" { "Green" }
    }
    
    Write-Host $logMessage -ForegroundColor $color
}

function Write-LogDebug { param([string]$Message) Write-Log -Message $Message -Level "DEBUG" }
function Write-LogInfo  { param([string]$Message) Write-Log -Message $Message -Level "INFO" }
function Write-LogWarn  { param([string]$Message) Write-Log -Message $Message -Level "WARN" }
function Write-LogError { param([string]$Message) Write-Log -Message $Message -Level "ERROR" }
function Write-LogSuccess { param([string]$Message) Write-Log -Message $Message -Level "SUCCESS" }

function Start-LogSection {
    param([string]$SectionName)
    Write-Log "========================================" "INFO"
    Write-Log "  $SectionName" "INFO"
    Write-Log "========================================" "INFO"
}

function Get-LogPath {
    return $Global:LogFile
}

function Clear-OldLogs {
    param([int]$DaysToKeep = 7)
    
    $logDir = Split-Path $Global:LogFile -Parent
    $cutoffDate = (Get-Date).AddDays(-$DaysToKeep)
    
    Get-ChildItem -Path $logDir -Filter "DeiviTechOS*.log" | 
        Where-Object { $_.LastWriteTime -lt $cutoffDate } |
        Remove-Item -Force
    
    Write-LogSuccess "Logs antigos removidos"
}

Export-ModuleMember -Function @(
    'Write-Log',
    'Write-LogDebug',
    'Write-LogInfo',
    'Write-LogWarn',
    'Write-LogError',
    'Write-LogSuccess',
    'Start-LogSection',
    'Get-LogPath',
    'Clear-OldLogs'
)
