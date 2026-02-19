# DeiviTech OS - Perfil Gamer
# Configurações otimizadas para jogos

Write-Host "  🎮 Configurando perfil Gamer..." -ForegroundColor Cyan

Write-Host "    └─ Game Mode..." -ForegroundColor Yellow
Set-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AutoGameModeEnabled" -Value 1 -ErrorAction SilentlyContinue
Set-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AllowAutoGameMode" -Value 1 -ErrorAction SilentlyContinue

Write-Host "    └─ Otimização de rede..." -ForegroundColor Yellow
Set-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters" -Name "DefaultTTL" -Value 64 -ErrorAction SilentlyContinue

Write-Host "    └─ Removendo telemetria..." -ForegroundColor Yellow
$services = @("DiagTrack", "DPS", "W32Time")
foreach ($svc in $services) {
    Set-Service -Name $svc -StartupType Disabled -ErrorAction SilentlyContinue
}

Write-Host "    ✅ Perfil Gamer configurado" -ForegroundColor Green
