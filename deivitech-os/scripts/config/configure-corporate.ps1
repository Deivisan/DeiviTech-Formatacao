# DeiviTech OS - Perfil Corporate
# Segurança e produtividade empresarial
# Execute como Administrador

Write-Host "🏢 Configurando perfil Corporate..." -ForegroundColor Cyan

function Configure-SecurityPolicies {
    Write-Host "  Políticas de segurança..." -ForegroundColor Yellow
    
    Set-MpPreference -DisableRealtimeMonitoring $false
    Set-MpPreference -DisableBehaviorMonitoring $false
    Set-MpPreference -DisableScriptScanning $false
    
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate" -Name "WUServer" -Value "https://wsus.company.com" -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate" -Name "WUStatusServer" -Value "https://wsus.company.com" -ErrorAction SilentlyContinue
    
    Write-Host "    ✓ Segurança configurada" -ForegroundColor Green
}

function Enable-BitLocker {
    Write-Host "  BitLocker..." -ForegroundColor Yellow
    
    try {
        $volumes = Get-Volume | Where-Object { $_.DriveLetter -and $_.DriveType -eq 'Fixed' }
        foreach ($vol in $volumes) {
            if ($vol.BitLockerProtection -eq "Unknown") {
                Enable-BitLocker -MountPoint "$($vol.DriveLetter):" -EncryptionMethod XtsAes256 -UsedSpaceOnly -SkipHardwareTest 2>$null
            }
        }
        Write-Host "    ✓ BitLocker disponível" -ForegroundColor Green
    } catch {
        Write-Host "    ⚠ BitLocker requer TPM" -ForegroundColor Yellow
    }
}

function Install-CorporateSoftware {
    Write-Host "  Software corporativo..." -ForegroundColor Yellow
    
    $corpApps = @(
        "Microsoft.Teams",
        "Microsoft.Office",
        "Adobe.AcrobatReaderDC"
    )
    
    foreach ($app in $corpApps) {
        try {
            winget install --id $app -e --silent --accept-package-agreements 2>$null
            Write-Host "    ✓ $app" -ForegroundColor Green
        } catch {
            Write-Host "    ✗ $app" -ForegroundColor Red
        }
    }
}

function Configure-Firewall {
    Write-Host "  Firewall..." -ForegroundColor Yellow
    
    Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True
    Set-NetFirewallProfile -Profile Domain -DefaultInboundAction Allow
    Set-NetFirewallProfile -Profile Public -DefaultInboundAction Block
    
    Write-Host "    ✓ Firewall configurado" -ForegroundColor Green
}

function Configure-Updates {
    Write-Host "  Updates..." -ForegroundColor Yellow
    
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" -Name "NoAutoUpdate" -Value 0
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" -Name "AUOptions" -Value 4
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" -Name "ScheduledInstallDay" -Value 0
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" -Name "ScheduledInstallTime" -Value 3
    
    Write-Host "    ✓ Updates configurados" -ForegroundColor Green
}

Configure-SecurityPolicies
Enable-BitLocker
Install-CorporateSoftware
Configure-Firewall
Configure-Updates

Write-Host "🏢 Perfil Corporate configurado!" -ForegroundColor Green
