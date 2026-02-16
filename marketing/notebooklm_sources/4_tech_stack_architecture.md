# TECH STACK & ARQUITETURA DEIVITECH
**Fonte Técnica para NotebookLM - Entendendo o "Motor" do Negócio**

## 1. Arquitetura do Sistema (O "Como Funciona")
A plataforma DeiviTech não é um site comum. É uma **Aplicação Web Estática (JAMstack)** hospedada no GitHub Pages.
*   **Velocidade:** Por não ter banco de dados lento no backend, o site carrega instantaneamente. Isso reflete a promessa da marca de "Performance".
*   **Privacidade:** A "Análise IA" roda 100% no navegador do usuário (Client-Side). Nenhum dado do PC do cliente é enviado para servidores externos.
    *   *Argumento de Venda:* "Seus dados de hardware nunca saem do seu computador."

## 2. Tecnologias Utilizadas (Para Credibilidade)
*   **Frontend:** HTML5 Semântico + Tailwind CSS (para design responsivo e moderno).
*   **Lógica de Negócio:** JavaScript Puro (Vanilla JS).
    *   *Exemplo:* O carrinho de compras em `hardware.html` é uma aplicação JS completa que roda na memória do navegador.
*   **Deploy:** GitHub Actions (CI/CD). Atualizações do site são automáticas e seguras.
*   **Interatividade:** Font Awesome (ícones) e Animações CSS (`@keyframes fadeInUp`).

## 3. A "Análise IA" (O Segredo Técnico)
A ferramenta em `analise.html` usa APIs reais do navegador:
*   `navigator.hardwareConcurrency`: Detecta quantos núcleos o processador tem.
*   `navigator.deviceMemory`: Detecta a quantidade de RAM aproximada.
*   `WebGL`: Usado para identificar a Placa de Vídeo (GPU).
*   **O Veredito:** Um algoritmo lógico cruza esses dados. Se (RAM < 4GB) -> Recomenda Chrome OS. Se (CPU > 4 núcleos && RAM > 8GB) -> Recomenda Ghost Spectre.

## 4. Sistema de Relatórios HTML (Arquitetura Revolucionária)

### Stack Técnico
*   **Geração:** Scripts Python/JavaScript que injetam dados reais em templates HTML
*   **Dados de Entrada:** JSON com specs do cliente (CrystalDiskMark, CPU-Z, benchmarks)
*   **Template Engine:** HTML5 + CSS3 com gradientes (`linear-gradient(135deg, #3498db, #2ecc71)`)
*   **Gráficos:** Chart.js para visualizações interativas (barras CrystalDiskMark)
*   **Vídeo Frames:** `<video>` tags com controles nativos (mostra testes rodando)
*   **Timestamp Dinâmico:** JavaScript `new Date().toLocaleString('pt-BR')` no footer
*   **Botão WhatsApp:** Link `wa.me/5575992134212?text=` com mensagem pré-formatada

### Processo de Deploy
1.  Técnico roda testes no PC do cliente
2.  Script automatizado gera arquivo `.html` único
3.  Arquivo salvo em `v2/reports/` com nome único (ex: `hd-report-WD-WXU1CA1L1134.html`)
4.  Enviado via WhatsApp como documento anexo (não link externo)

### Por Que Funciona Offline
*   Todo CSS inline ou em `<style>` tags
*   Gráficos Chart.js carregados de CDN na primeira abertura, depois cache do navegador
*   Imagens base64 embedded (se necessário)
*   Cliente pode abrir sem internet após download inicial

## 5. OpenClaw Bot (Futuro Automação)
**Status Atual:** Rodando em sandbox
*   **Hardware:** Ryzen 7 5700G + 16GB RAM (PC principal DeiviTech)
*   **Função Futura:** Triagem automática de leads no WhatsApp
    *   Cliente: "Oi, quero orçamento"
    *   Bot: "Olá! Qual tipo de serviço? 1️⃣ Formatação 2️⃣ Upgrade Hardware 3️⃣ Diagnóstico"
    *   Cliente escolhe → Bot qualifica → Passa pra atendimento humano com contexto completo
*   **Aguardando:** Testes de confiabilidade antes de ativar com clientes reais

## 6. Problemas Identificados no Site Atual (A Corrigir)
1.  **Preços Sumidos:** Página de preços não está acessível/visível (CRÍTICO)
2.  **Sem Prova Social:** Faltam depoimentos de clientes (baixa conversão)
3.  **Botão WhatsApp Não Fixo:** Some ao rolar página (perda de leads)
4.  **SEO Fraco:** Título genérico (não ranqueia local)
5.  **Sem Timestamp:** Site parece abandonado (sem "Atualizado em...")
6.  **"Análise IA" Não Clicável:** Link quebrado ou texto sem botão
