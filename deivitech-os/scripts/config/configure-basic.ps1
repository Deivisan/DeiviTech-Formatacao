# DeiviTech OS - Perfil Basic
# Interface simplificada para usuários comuns
# Execute como Administrador

Write-Host "🏠 Configurando perfil Basic..." -ForegroundColor Cyan

function Set-SimpleUI {
    Write-Host "  Interface simplificada..." -ForegroundColor Yellow
    
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\VisualEffects" -Name "VisualFXSetting" -Value 2
    
    Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "MenuShowDelay" -Value 0
    Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "ForegroundLockTimeout" -Value 0
    Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "UserPreferencesMask" -Value ([byte[]](0x90,0x12,0x03,0x80))
    
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "LaunchTo" -Value 1
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced" -Name "HideIcons" -Value 0
    
    Write-Host "    ✓ UI simplificada" -ForegroundColor Green
}

function Install-EssentialApps {
    Write-Host "  Apps essenciais..." -ForegroundColor Yellow
    
    $essentialApps = @(
        "Google.Chrome",
        "VideoLAN.VLC",
        "7zip.7zip"
    )
    
    foreach ($app in $essentialApps) {
        try {
            winget install --id $app -e --silent --accept-package-agreements 2>$null
            Write-Host "    ✓ $app" -ForegroundColor Green
        } catch {
            Write-Host "    ✗ $app" -ForegroundColor Red
        }
    }
}

function Enable-Maintenance {
    Write-Host "  Manutenção automática..." -ForegroundColor Yellow
    
    $taskAction = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -Command 'Optimize-Volume -DriveLetter C -Defrag -ErrorAction SilentlyContinue'"
    $taskTrigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Saturday -At 10am
    Register-ScheduledTask -TaskName "DeiviTech-WeeklyCleanup" -Action $taskAction -Trigger $taskTrigger -Description "Manutenção semanal DeiviTech OS" -ErrorAction SilentlyContinue
    
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Active Setup Temp Folders" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Downloaded Program Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Internet Cache Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Old ChkDsk Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Recycle Bin" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Setup Log Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\System error memory dump files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\System error minidump files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Temporary Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Temporary Setup Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Thumbnail Cache" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Update Cleanup" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Windows Error Reporting Archive Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Windows Error Reporting Queue Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\VolumeCaches\Windows Upgrade Log Files" -Name "StateFlags0100" -Value 2 -ErrorAction SilentlyContinue
    
    Write-Host "    ✓ Manutenção ativada" -ForegroundColor Green
}

function Add-HelpTutorials {
    Write-Host "  Tutoriais..." -ForegroundColor Yellow
    
    $helpShortcut = "$env:Public\Desktop\Ajuda DeiviTech OS.lnk"
    $wshShell = New-Object -ComObject WScript.Shell
    $shortcut = $wshShell.CreateShortcut($helpShortcut)
    $shortcut.TargetPath = "https://deivisan.github.io/DeiviTech-Formatacao"
    $shortcut.Description = "Ajuda e Tutoriais DeiviTech OS"
    $shortcut.Save()
    
    Write-Host "    ✓ Atalho de ajuda criado" -ForegroundColor Green
}

Set-SimpleUI
Install-EssentialApps
Enable-Maintenance
Add-HelpTutorials

Write-Host "🏠 Perfil Basic configurado!" -ForegroundColor Green
