# DeiviTech OS - Perfil Corporate
# Configurações para empresas

Write-Host "  🏢 Configurando perfil Corporate..." -ForegroundColor Cyan

Write-Host "    └─ Políticas de segurança..." -ForegroundColor Yellow
Set-MpPreference -DisableRealtimeMonitoring $false -ErrorAction SilentlyContinue

Write-Host "    └─ Firewall..." -ForegroundColor Yellow
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True -ErrorAction SilentlyContinue

Write-Host "    └─ Updates configurados..." -ForegroundColor Yellow
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" -Name "NoAutoUpdate" -Value 0 -ErrorAction SilentlyContinue

Write-Host "    ✅ Perfil Corporate configurado" -ForegroundColor Green
