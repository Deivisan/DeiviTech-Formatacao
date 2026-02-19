# DeiviTech OS - Perfil Gamer
# Otimizações específicas para jogos
# Execute como Administrador

Write-Host "🎮 Configurando perfil Gamer..." -ForegroundColor Cyan

function Optimize-Gaming {
    Write-Host "  Game Mode..." -ForegroundColor Yellow
    
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AutoGameModeEnabled" -Value 1 -ErrorAction SilentlyContinue
    Set-ItemProperty -Path "HKCU:\Software\Microsoft\GameBar" -Name "AllowAutoGameMode" -Value 1 -ErrorAction SilentlyContinue
    
    Set-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\GameDVR" -Name "AppCaptureEnabled" -Value 0 -ErrorAction SilentlyContinue
    
    Write-Host "  ✓ Game Mode ativado" -ForegroundColor Green
}

function Optimize-Network-Gaming {
    Write-Host "  Rede para jogos..." -ForegroundColor Yellow
    
    Set-NetAdapterAdvancedProperty -DisplayName "QoS Packet Scheduler" -RegistryValue 0 -ErrorAction SilentlyContinue
    
    Write-Host "  ✓ Rede otimizada" -ForegroundColor Green
}

function Install-GamingSoftware {
    Write-Host "  Software gamer..." -ForegroundColor Yellow
    
    $gamingApps = @(
        "Valve.Steam",
        "EpicGames.EpicGamesLauncher",
        "OBSProject.OBSStudio"
    )
    
    foreach ($app in $gamingApps) {
        try {
            winget install --id $app -e --silent --accept-package-agreements --accept-source-agreements 2>$null
            Write-Host "    ✓ $app" -ForegroundColor Green
        } catch {
            Write-Host "    ✗ $app" -ForegroundColor Red
        }
    }
}

function Disable-GamingInterference {
    Write-Host "  Removendo interferências..." -ForegroundColor Yellow
    
    $services = @(
        "DiagTrack",
        "DPS",
        "W32Time",
        "WerSvc"
    )
    
    foreach ($service in $services) {
        Set-Service -Name $service -StartupType Disabled -ErrorAction SilentlyContinue
    }
    
    Write-Host "  ✓ Interferências removidas" -ForegroundColor Green
}

Optimize-Gaming
Optimize-Network-Gaming
Install-GamingSoftware
Disable-GamingInterference

Write-Host "🎮 Perfil Gamer configurado!" -ForegroundColor Green
