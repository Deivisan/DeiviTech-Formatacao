# DeiviTech OS - Perfil Desenvolvedor
# Ambiente otimizado para desenvolvimento
# Execute como Administrador

Write-Host "💻 Configurando perfil Dev..." -ForegroundColor Cyan

function Install-DevTools {
    Write-Host "  Ferramentas de desenvolvimento..." -ForegroundColor Yellow
    
    $devApps = @(
        "Microsoft.VisualStudioCode",
        "Git.Git",
        "Docker.DockerDesktop",
        "Postman.Postman",
        "NodeJS.NodeJS"
    )
    
    foreach ($app in $devApps) {
        try {
            winget install --id $app -e --silent --accept-package-agreements --accept-source-agreements 2>$null
            Write-Host "    ✓ $app" -ForegroundColor Green
        } catch {
            Write-Host "    ✗ $app" -ForegroundColor Red
        }
    }
}

function Configure-Terminal {
    Write-Host "  Terminal..." -ForegroundColor Yellow
    
    try {
        winget install --id "Microsoft.WindowsTerminal" -e --silent --accept-package-agreements 2>$null
        
        $settingsPath = "$env:APPDATA\Microsoft\Windows Terminal\settings.json"
        if (Test-Path $settingsPath) {
            $settings = Get-Content $settingsPath | ConvertFrom-Json
            $settings.profiles.defaults.colorScheme = "DeiviTech"
            $settings | ConvertTo-Json -Depth 10 | Set-Content $settingsPath
        }
        
        Write-Host "    ✓ Terminal configurado" -ForegroundColor Green
    } catch {
        Write-Host "    ✗ Terminal" -ForegroundColor Red
    }
}

function Configure-Git {
    Write-Host "  Git..." -ForegroundColor Yellow
    
    git config --global core.autocrlf true
    git config --global core.editor code
    git config --global init.defaultBranch main
    
    Write-Host "    ✓ Git configurado" -ForegroundColor Green
}

function Enable-WSL {
    Write-Host "  WSL2..." -ForegroundColor Yellow
    
    try {
        wsl --install --no-distribution-banner 2>$null
        Write-Host "    ✓ WSL2 disponível" -ForegroundColor Green
    } catch {
        Write-Host "    ✗ WSL2" -ForegroundColor Red
    }
}

function Setup-Docker {
    Write-Host "  Docker..." -ForegroundColor Yellow
    
    $dockerPath = "C:\Program Files\Docker\Docker\resources\bin\docker.exe"
    if (Test-Path $dockerPath) {
        docker system info 2>$null | Out-Null
        Write-Host "    ✓ Docker disponível" -ForegroundColor Green
    } else {
        Write-Host "    ✗ Docker não instalado" -ForegroundColor Yellow
    }
}

Install-DevTools
Configure-Terminal
Configure-Git
Enable-WSL
Setup-Docker

Write-Host "💻 Perfil Dev configurado!" -ForegroundColor Green
