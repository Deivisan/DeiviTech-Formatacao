# DeiviTech OS - Perfil Basic
# Configurações para usuários comuns

Write-Host "  🏠 Configurando perfil Basic..." -ForegroundColor Cyan

Write-Host "    └─ Interface simplificada..." -ForegroundColor Yellow
Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "MenuShowDelay" -Value 0 -ErrorAction SilentlyContinue

Write-Host "    └─ Manutenção automática..." -ForegroundColor Yellow
$taskAction = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-WindowStyle Hidden -Command 'Remove-Item -Path $env:TEMP\* -Recurse -Force -ErrorAction SilentlyContinue'"
$taskTrigger = New-ScheduledTaskTrigger -Daily -At 10am
Register-ScheduledTask -TaskName "DeiviTech-BasicCleanup" -Action $taskAction -Trigger $taskTrigger -Description "Limpeza automática DeiviTech OS" -ErrorAction SilentlyContinue

Write-Host "    ✅ Perfil Basic configurado" -ForegroundColor Green
