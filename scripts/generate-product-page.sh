#!/bin/bash

# Script para gerar página de produto individual com dados do HD testado
# Uso: ./generate-product-page.sh [serial] [modelo] [capacidade] [preco] [horas] [temp] [saude] [velocidade]
# Exemplo: ./generate-product-page.sh "WD-WXF1C2279984" "WD Blue 500GB" "500" "50" "2896" "30" "100" "79"

SERIAL="${1:-WD-WXF1C2279984}"
MODEL="${2:-WD Blue 500GB}"
CAPACITY="${3:-500}"
PRICE="${4:-50}"
HOURS="${5:-2896}"
TEMP="${6:-30}"
HEALTH="${7:-100}"
SPEED="${8:-79}"

# Criar página HTML
cat > "/home/deivi/Projetos/DeiviTech-Formatacao/hdd-$SERIAL.html" << EOF
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔧 HD $MODEL - DeiviTech</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 25px 80px rgba(0,0,0,0.4);
        }
        .header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        .header h1 { font-size: 2.5em; margin-bottom: 10px; }
        .header .badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 0.9em;
        }
        .content { padding: 40px; }
        
        /* Grid de especificações */
        .specs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .spec-card {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            padding: 24px;
            border-radius: 16px;
            text-align: center;
        }
        .spec-card .icon { font-size: 2.5em; margin-bottom: 10px; }
        .spec-card .value { font-size: 1.8em; font-weight: 800; color: #1e3c72; }
        .spec-card .label { font-size: 0.85em; color: #64748b; margin-top: 5px; }
        
        /* Status SMART */
        .smart-status {
            background: #ecfdf5;
            border: 2px solid #10b981;
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 30px;
        }
        .smart-status h3 {
            color: #10b981;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        .smart-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }
        .smart-item {
            background: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }
        .smart-item .label { font-size: 0.8em; color: #64748b; }
        .smart-item .value { font-weight: 700; color: #1e3c72; }
        
        /* Performance */
        .performance {
            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 30px;
        }
        .performance h3 { color: #92400e; margin-bottom: 15px; }
        .perf-bars { display: flex; flex-direction: column; gap: 10px; }
        .perf-bar {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .perf-bar .label { width: 80px; font-weight: 600; }
        .perf-bar .bar {
            flex: 1;
            height: 24px;
            background: rgba(255,255,255,0.5);
            border-radius: 12px;
            overflow: hidden;
        }
        .perf-bar .fill {
            height: 100%;
            background: linear-gradient(90deg, #f59e0b, #d97706);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 10px;
            color: white;
            font-weight: 700;
            font-size: 0.85em;
        }
        
        /* Preço */
        .price-section {
            text-align: center;
            padding: 30px;
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            border-radius: 16px;
            color: white;
            margin-bottom: 30px;
        }
        .price-section .label { font-size: 1.2em; opacity: 0.9; }
        .price-section .price { font-size: 3.5em; font-weight: 800; margin: 15px 0; }
        .price-section .price small { font-size: 0.4em; opacity: 0.8; }
        .price-section .old-price { text-decoration: line-through; opacity: 0.7; }
        
        /* Botão WhatsApp */
        .btn-whatsapp {
            display: block;
            background: linear-gradient(135deg, #25D366 0%, #20BD5A 100%);
            color: white;
            text-decoration: none;
            padding: 20px 40px;
            border-radius: 16px;
            font-size: 1.3em;
            font-weight: 700;
            text-align: center;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-whatsapp:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
        }
        
        /* Footer */
        .footer {
            text-align: center;
            padding: 30px;
            background: #f8fafc;
            color: #64748b;
        }
        .footer .brand { font-size: 1.5em; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💾 HD Testado & Aprovado</h1>
            <span class="badge">🏥 Saúde: ${HEALTH}% • ✅ 0 Setores Ruins</span>
        </div>
        
        <div class="content">
            <!-- Especificações -->
            <div class="specs-grid">
                <div class="spec-card">
                    <div class="icon">🏷️</div>
                    <div class="value">${MODEL}</div>
                    <div class="label">Modelo</div>
                </div>
                <div class="spec-card">
                    <div class="icon">💾</div>
                    <div class="value">${CAPACITY}GB</div>
                    <div class="label">Capacidade</div>
                </div>
                <div class="spec-card">
                    <div class="icon">🔢</div>
                    <div class="value">${SERIAL:0:12}</div>
                    <div class="label">Serial</div>
                </div>
                <div class="spec-card">
                    <div class="icon">⏱️</div>
                    <div class="value">${HOURS}h</div>
                    <div class="label">Horas de Uso</div>
                </div>
            </div>
            
            <!-- Status SMART -->
            <div class="smart-status">
                <h3>✅ Status SMART: APROVADO</h3>
                <div class="smart-grid">
                    <div class="smart-item">
                        <div class="label">Saúde</div>
                        <div class="value">${HEALTH}%</div>
                    </div>
                    <div class="smart-item">
                        <div class="label">Temperatura</div>
                        <div class="value">${TEMP}°C</div>
                    </div>
                    <div class="smart-item">
                        <div class="label">Setores Ruins</div>
                        <div class="value">0</div>
                    </div>
                    <div class="smart-item">
                        <div class="label">Reallocated</div>
                        <div class="value">0</div>
                    </div>
                </div>
            </div>
            
            <!-- Performance -->
            <div class="performance">
                <h3>⚡ Performance de Leitura</h3>
                <div class="perf-bars">
                    <div class="perf-bar">
                        <span class="label">Leitura</span>
                        <div class="bar">
                            <div class="fill" style="width: ${SPEED}%;">${SPEED} MB/s</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Preço -->
            <div class="price-section">
                <div class="label">Valor Promocional</div>
                <div class="price">R\$ ${PRICE}<small>,00</small></div>
                <div class="old-price">De: R\$ $((PRICE * 2)),00</div>
            </div>
            
            <!-- Botão -->
            <a href="#" class="btn-whatsapp" onclick="confirmarCompra()">
                📱 Confirmar via WhatsApp
            </a>
            
            <p style="text-align: center; margin-top: 20px; color: #64748b;">
                🚚 Entrega: Retirar no local ou Uber (custo cliente)<br>
                🛡️ Garantia: 30 dias
            </p>
        </div>
        
        <div class="footer">
            <div class="brand">🦞 DeiviTech</div>
            <div>Testes profissionais com transparência total</div>
        </div>
    </div>
    
    <script>
        function confirmarCompra() {
            const mensagem = \`🔧 *DeiviTech Formatação*

Olá! Gostaria de comprar o HD:

💾 *Modelo:* ${MODEL}
📦 *Capacidade:* ${CAPACITY} GB
🔢 *Serial:* ${SERIAL}
🏥 *Saúde:* ${HEALTH}%
⚡ *Velocidade:* ${SPEED} MB/s

💰 *Valor:* R\$ ${PRICE},00

Aguardo retorno!\`;
            
            window.open('https://wa.me/5575981231019?text=' + encodeURIComponent(mensagem), '_blank');
        }
    </script>
</body>
</html>
EOF

echo "✅ Página gerada: hdd-$SERIAL.html"
echo "📄 Arquivo criado em: /home/deivi/Projetos/DeiviTech-Formatacao/hdd-$SERIAL.html"
