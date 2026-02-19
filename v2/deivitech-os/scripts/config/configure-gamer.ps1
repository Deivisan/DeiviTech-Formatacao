# Perfil Gamer - Otimizações para jogos

Write-Host "  🎮 Perfil Gamer..." -ForegroundColor Cyan

Set-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AutoGameModeEnabled" -Value 1 -ErrorAction SilentlyContinue

$services = @("DiagTrack", "DPS")
foreach ($svc in $services) {
    Set-Service -Name $svc -StartupType Disabled -ErrorAction SilentlyContinue
}

Write-Host "    ✅ Gamer OK" -ForegroundColor Green
