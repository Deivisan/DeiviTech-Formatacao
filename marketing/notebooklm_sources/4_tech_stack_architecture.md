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
