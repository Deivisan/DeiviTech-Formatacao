# Perfil Basic - Interface simplificada

Write-Host "  🏠 Perfil Basic..." -ForegroundColor Cyan

Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "MenuShowDelay" -Value 0 -ErrorAction SilentlyContinue

Write-Host "    ✅ Basic OK" -ForegroundColor Green
