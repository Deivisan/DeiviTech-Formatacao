# Perfil Corporate - Segurança empresarial

Write-Host "  🏢 Perfil Corporate..." -ForegroundColor Cyan

Set-MpPreference -DisableRealtimeMonitoring $false -ErrorAction SilentlyContinue
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled True -ErrorAction SilentlyContinue

Write-Host "    ✅ Corporate OK" -ForegroundColor Green
