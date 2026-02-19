# DeiviTech OS - Perfil Dev
# Configurações para desenvolvedores

Write-Host "  💻 Configurando perfil Dev..." -ForegroundColor Cyan

Write-Host "    └─ Terminal Windows..." -ForegroundColor Yellow

Write-Host "    └─ Git config..." -ForegroundColor Yellow
git config --global core.autocrlf true 2>$null
git config --global core.editor code 2>$null

Write-Host "    └─ Variáveis de ambiente..." -ForegroundColor Yellow
$env:DEIVITECH_OS = "dev"
$env:DEIVITECH_PROFILE = "dev"

Write-Host "    ✅ Perfil Dev configurado" -ForegroundColor Green
