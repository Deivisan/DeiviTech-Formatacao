# DeiviTech OS - Validação do Sistema
# Verifica integridade após instalação

param(
    [ValidateSet("gamer", "dev", "corporate", "basic")]
    [string]$Profile = "basic"
)

Write-Host "`n🔍 Validando instalação do DeiviTech OS..." -ForegroundColor Cyan

$validationResults = @{
    Passed = 0
    Failed = 0
    Warnings = 0
}

function Test-Item {
    param(
        [string]$Name,
        [scriptblock]$Test,
        [string]$SuccessMessage,
        [string]$FailMessage
    )
    
    Write-Host "  Testando: $Name..." -ForegroundColor Yellow
    
    try {
        $result = & $Test
        if ($result) {
            Write-Host "    ✓ $SuccessMessage" -ForegroundColor Green
            $script:validationResults.Passed++
        } else {
            Write-Host "    ✗ $FailMessage" -ForegroundColor Red
            $script:validationResults.Failed++
        }
    } catch {
        Write-Host "    ⚠ Erro: $($_.Exception.Message)" -ForegroundColor Yellow
        $script:validationResults.Warnings++
    }
}

Write-Host "`n📋 Validações do Sistema:" -ForegroundColor Cyan

Test-Item -Name "Administrador" -Test {
    $currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($currentUser)
    $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
} -SuccessMessage "Executando como Administrador" -FailMessage "Execute como Administrador"

Test-Item -Name "Windows Original" -Test {
    (Get-CimInstance -ClassName Win32_OperatingSystem).Caption -match "Windows"
} -SuccessMessage "Windows detectado" -FailMessage "Windows não detectado"

Test-Item -Name "Espaço em Disco" -Test {
    $drive = Get-PSDrive C
    ($drive.Free / 1GB) -gt 10
} -SuccessMessage "Espaço suficiente (>10GB)" -FailMessage "Espaço insuficiente"

Test-Item -Name "Conexão Internet" -Test {
    Test-Connection -ComputerName 8.8.8.8 -Count 1 -Quiet
} -SuccessMessage "Conectado à internet" -FailMessage "Sem conexão"

Test-Item -Name "PowerShell 5.1+" -Test {
    $PSVersionTable.PSVersion.Major -ge 5
} -SuccessMessage "PowerShell OK" -FailMessage "PowerShell desatualizado"

Write-Host "`n📋 Validações de Segurança:" -ForegroundColor Cyan

Test-Item -Name "Windows Defender" -Test {
    Get-MpComputerStatus -ErrorAction SilentlyContinue | Select-Object -ExpandProperty AntivirusEnabled
} -SuccessMessage "Windows Defender ativo" -FailMessage "Windows Defender desativado"

Test-Item -Name "Firewall" -Test {
    (Get-NetFirewallProfile -Profile Domain,Public,Private | Where-Object { $_.Enabled -eq $true }).Count -gt 0
} -SuccessMessage "Firewall ativo" -FailMessage "Firewall desativado"

Write-Host "`n📋 Validações de Performance:" -ForegroundColor Cyan

Test-Item -Name "Serviços Essenciais" -Test {
    $services = @("Winmgmt", "EventLog", "Dhcp", "Dnscache")
    ($services | Where-Object { (Get-Service -Name $_ -ErrorAction SilentlyContinue).Status -eq 'Running' }).Count -eq $services.Count
} -SuccessMessage "Serviços essenciais rodando" -FailMessage "Alguns serviços parados"

Test-Item -Name "Memória RAM" -Test {
    (Get-CimInstance -ClassName Win32_ComputerSystem).TotalPhysicalMemory / 1GB -gt 2
} -SuccessMessage "Memória OK" -FailMessage "Memória insuficiente"

Write-Host "`n📋 Validações de Perfil ($Profile):" -ForegroundColor Cyan

switch ($Profile) {
    "gamer" {
        Test-Item -Name "Game Mode" -Test {
            Get-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AutoGameModeEnabled" -ErrorAction SilentlyContinue | Select-Object -ExpandProperty AutoGameModeEnabled -eq 1
        } -SuccessMessage "Game Mode ativado" -FailMessage "Game Mode desativado"
    }
    "dev" {
        Test-Item -Name "VS Code" -Test {
            Test-Path "C:\Program Files\Microsoft VS Code\Code.exe"
        } -SuccessMessage "VS Code instalado" -FailMessage "VS Code não instalado"
    }
    "corporate" {
        Test-Item -Name "BitLocker Suporte" -Test {
            (Get-BitLockerVolume -ErrorAction SilentlyContinue).VolumeStatus -ne $null
        } -SuccessMessage "BitLocker disponível" -FailMessage "BitLocker não disponível"
    }
    "basic" {
        Test-Item -Name "Manutenção Agendada" -Test {
            Get-ScheduledTask -TaskName "DeiviTech-WeeklyCleanup" -ErrorAction SilentlyContinue -WarningAction SilentlyContinue | Select-Object -ExpandProperty State -eq "Ready"
        } -SuccessMessage "Manutenção agendada" -FailMessage "Manutenção não configurada"
    }
}

Write-Host "`n📊 RESULTADO DA VALIDAÇÃO:" -ForegroundColor Cyan
Write-Host "  ✓ Passados: $($validationResults.Passed)" -ForegroundColor Green
Write-Host "  ✗ Falhas:  $($validationResults.Failed)" -ForegroundColor Red
Write-Host "  ⚠ Avisos:  $($validationResults.Warnings)" -ForegroundColor Yellow

if ($validationResults.Failed -eq 0) {
    Write-Host "`n✅ Validação concluída com sucesso!" -ForegroundColor Green
    exit 0
} else {
    Write-Host "`n❌ Alguns testes falharam. Execute o script de instalação novamente." -ForegroundColor Red
    exit 1
}
