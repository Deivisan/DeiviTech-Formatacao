# NotebookLM -> Campanha de Marketing: Cards e Slides (DeiviTech)
# ✅ ATUALIZADO: 15/02/2026 - Metodologia HTML + Taxa Conversão 85-90% + Timestamp

Este documento descreve como usar o NotebookLM (Google) para gerar um conjunto de cards (imagens) e slides para uma campanha de marketing do repositório DeiviTech-Formatacao.

## 🚀 NOVOS INSIGHTS CRÍTICOS (Fevereiro 2026)

### Diferencial Competitivo Único
- **Relatórios HTML Personalizados:** Enviados via WhatsApp como arquivo (não link), funcionam offline
- **Taxa de Conversão:** 85-90% dos clientes que veem relatório fecham venda (vs 30-40% mercado)
- **Timestamp Personalizado:** "Gerado em [DATA] às [HORA] - DeiviTech" em todos relatórios
- **Exemplos Reais:** `hd-report-WD-WXU1CA1L1134.html`, `Diagnostico-Mel.html`
- **Paleta Atualizada:** Azul #3498db, Roxo #9b59b9, Verde #2ecc71 (gradientes azul→verde)
- **Sistema de Indicações:** Ambos ganham R$ 10 (indicador + indicado)
- **OpenClaw Bot:** Rodando em sandbox (futuro triagem WhatsApp)

---

## Resumo do NotebookLM (o que importa para essa campanha)
- NotebookLM é uma plataforma do Google que permite carregar suas fontes (PDF, HTML, sites, slides e mais) e gerar resumos, slides, infográficos, Resumos em Áudio, e outras saídas usando Gemini.
- Existe versão gratuita (consumer) e upgrades via Google One (NotebookLM Pro), Google Workspace e Enterprise (por Google Cloud). Os preços dependem do canal (Google One, Workspace, Vertex AI para integrações empresariais). Faça upgrade se precisar de mais geração de conteúdo, dados privados na organização e análises.
- Recursos úteis para a campanha: geração de slides, criação de infográficos, transformação de fontes em guias e resumos, geração de imagens e prompts para imagem (via geradores integrados da Google - Gemini Image/Imagen equivalentes).

## Conteúdo do repositório (fontes para upload)
Faça upload dos arquivos/URLs abaixo no NotebookLM para que o modelo entenda o contexto do produto e gere cards e slides contextualizados:
- `README.md` - Visão geral, serviços, proposta de valor, contato e CTA.
- `marketing/plano_marketing.md` - Slogans, ideias de campanha, público e calendários.
- `marketing/prompts_nano_banana_pro.txt` - Prompts de imagem atuais (ótima base para imagens).
- `formatacao.html`, `hardware.html`, `analise.html`, `sobre.html` - Descrições detalhadas de serviços, preços, combos e planos.
- `css/common.css` e `js/common.js` - Para sugestões visuais (cores e estilo).
- **NOVO:** `marketing/insights/METODOLOGIA-RELATORIOS-IA.md` - Metodologia HTML personalizada
- **NOVO:** `transcricoes/GROK-SESSION-2026-02-15.md` - Sessão estratégica completa com Grok

## Estratégia de geração (Workflow com NotebookLM)
1. Crie um notebook e nomeie algo como "DeiviTech - Campanha Marketing 2026".
2. Faça upload das fontes listadas: README, HTMLs, marketing/MDs, **insights/**, **transcricoes/**.
3. Peça ao NotebookLM para "Analisar e nos fornecer a copy e imagens adequadas para cards e slides de marketing com foco em conversão (WhatsApp) usando a metodologia de relatórios HTML personalizados com taxa de conversão 85-90%".
4. Use as ferramentas do NotebookLM: "Gerar Infográfico" / "Gerar Apresentação" / "Gerar Resumo".
5. Para imagens, peça também "Gerar prompts perfeitos para um gerador de imagens (Gemini image ou Lyria), e exporte em resoluções específicas (1080x1080 / 1200x628 / 4:5)".
6. Revise o conteúdo e prompts antes de gerar imagens, garantindo marcas, preços e CTAs corretos.
7. Baixe as imagens e slides; prefira PNG para redes sociais (transparência se necessário) e PNG/JPG para web.

---

## 🎯 Prompt (NotebookLM) - FAST TEMPLATE ATUALIZADO

Use este prompt base ao perguntar ao NotebookLM. Ele é projetado para gerar automaticamente um conjunto de cards e um slide deck para promover DeiviTech.

### Prompt Completo (colar no NotebookLM):

"A partir das fontes carregadas (README.md, marketing/plano_marketing.md, formatacao.html, hardware.html, marketing/insights/METODOLOGIA-RELATORIOS-IA.md, transcricoes/GROK-SESSION-2026-02-15.md), gere:

**PRIORIDADE MÁXIMA - NOVOS INSIGHTS (Fevereiro 2026):**
- Metodologia HTML Personalizada (arquivos enviados via WhatsApp, não links)
- Taxa de conversão 85-90% (muito acima da média 30-40%)
- Timestamp obrigatório: 'Gerado em [DATA] às [HORA] - DeiviTech'
- Exemplos reais: hd-report-WD-WXU1CA1L1134.html, Diagnostico-Mel.html
- Paleta oficial: Azul #3498db, Roxo #9b59b6, Verde #2ecc71
- Sistema de indicações: R$ 10 para ambos (indicador + indicado)
- OpenClaw Bot em sandbox (futuro triagem WhatsApp)

1) Um conjunto de 16 cards de imagem (1080x1080) para Instagram/WhatsApp Status que descrevem: Formatação Completa, Ghost Spectre (otimização gamer), Linux (reciclagem de hardware), Upgrades (Memória, SSD), Combos promocionais, Análise IA, Pacotes de software, Processo (4 passos), Garantia 30 dias, Testemunhos (baseado em depoimentos no repo), Ofertas (Ressurreição do PC Velho, Combo Gamer Start, Home Office), CTA para WhatsApp com mensagem pré-formatada, **[NOVO] Relatório HTML Personalizado, CrystalDiskMark Gráficos, Sistema de Indicações, OpenClaw Bot**. Para cada card: inclua título curto (1-5 palavras), um subtítulo (1 linha), 2 bullets de benefícios, preço se houver, e CTA curta.

2) Um slide deck em 13 slides: slide 1 - Hero + slogan; slide 2 - Problema do público; slide 3 - O que oferece (service pillars); slide 4 - Pacotes e preços (combos); slide 5 - Processo em 4 passos; slide 6 - Benefícios e numbers (ex: 5x performance, 10% combos); slide 7 - Testemunhos; slide 8 - Garantia; slide 9 - CTA e formas de contato; slide 10 - Fechamento + mini-FAQ; **[NOVO] slide 11 - Metodologia HTML (como vendemos 85-90% mais); slide 12 - Exemplos Reais (casos HD e Mel); slide 13 - Indicações + Bot Futuro**.

3) Para cada card e slide, gere um prompt de imagem pronto para um gerador de imagens (alto nível: estilo, cores, elementos gráficos, layout) e também um prompt alternativo para um layout foto-realista.

4) Produza variantes para cada imagem (de alta-contraste, minimalista, e ilustração cartoon) e indique a resolução recomendada e proporções (Square 1080x1080; 1200x628 para Facebook/Twitter; 9:16 para Stories).

5) Liste os assets (arquivos do repo) que foram usados para gerar cada card como contexto. Não gere conteúdo que contradiga preços no repo.

Gere também um resumo curto com 5 títulos de campanhas e 5 chamadas (CTAs) para testes A/B.

Resposta desejada: JSON com 16 cards + 13 slides, cada item com: title, subtitle, body (bullets), price (if any), cta, imagePrompt_photoRealistic, imagePrompt_illustration, colors (rgba hex), font suggestions (Google Fonts), recommended ratio/size, and sourceFilesUsed[] -- E entregue no formato "Card[1..16]" / "Slide[1..13]".

Priorize a clareza, a conversão (CTA) e a aderência visual à identidade do repo (cores: azul #3498db, verde #2ecc71, roxo #9b59b6). **OBRIGATÓRIO:** Incluir timestamp 'Gerado em [DATA] - DeiviTech' em todos relatórios e slides técnicos."

---

## 🎨 Single perfect prompt (copy-paste into NotebookLM)

"Use os arquivos carregados (README.md, marketing/plano_marketing.md, formatacao.html, hardware.html, marketing/prompts_nano_banana_pro.txt, marketing/insights/METODOLOGIA-RELATORIOS-IA.md, transcricoes/GROK-SESSION-2026-02-15.md). Analise todo o conteúdo e gere:

**CONTEXTO CRÍTICO (Prioridade Máxima):**
- Metodologia HTML personalizada (arquivos .html enviados via WhatsApp, não links)
- Taxa conversão 85-90% (vs 30-40% mercado) - diferencial competitivo único
- Timestamp obrigatório: 'Gerado em [DATA] às [HORA] - DeiviTech'
- Paleta oficial: Azul #3498db, Roxo #9b59b6, Verde #2ecc71 (gradientes azul→verde)
- Exemplos reais: hd-report-WD-WXU1CA1L1134.html (HD morrendo), Diagnostico-Mel.html (carregador)
- Sistema indicações: R$ 10 ambos ganham (indicador + indicado)
- OpenClaw Bot: sandbox, futuro triagem WhatsApp

- 16 imagens-card (square 1080x1080) com textos prontos, descrição textual para cada card, imagem-prompt foto-realista e ilustração (+ 2 variantes cada), e o arquivo sugerido (ex: card_01_formatacao.png). Garanta que todos os preços sejam os valores presentes nos arquivos HTML. **OBRIGATÓRIO:** Cards 13-16 devem focar em: Relatório HTML Personalizado, CrystalDiskMark Gráficos, Sistema Indicações, OpenClaw Bot.

- 1 deck 13 slides (16:9) com títulos, bullet points, nota do apresentador (1 frase por slide), imagens sugeridas (image prompts), e sugestão de ordem/tempo de apresentação. **OBRIGATÓRIO:** Slides 11-13 devem focar em: Metodologia HTML (como vendemos 85-90% mais), Exemplos Reais (casos HD e Mel), Indicações + Bot.

- Saída em JSON: {cards: [...], slides: [...], imagesPrompts: [...]}. Para cada imagem, indique proporção, cores hex, fonte sugerida, e variação de estilo (foto, illustration, minimal).

Priorize: clareza, transformação dos ativos, CTAs diretas para WhatsApp, design consistente com a paleta: #3498db (blue), #2ecc71 (green), #9b59b6 (purple). **TIMESTAMP OBRIGATÓRIO** em todos relatórios/slides técnicos: 'Gerado em [DATA] - DeiviTech' (rodapé pequeno, cor #95a5a6)."

---

## 📋 Card Template ATUALIZADO (16 cards - incluindo novos 13-16)

Abaixo um template de cards (title, subtitle, bullets, price, cta, prompt). Edite conforme necessário.

### Cards 1-12 (Originais - mantidos)

1) Card: "Formatação Rápida"
- Title: Formatação Completa
- Subtitle: Sistema limpo e otimizado em 24h
- Bullets: "Backup seguro"; "Instalamos drivers + softwares";
- Price: R$ 25 - (Windows 10/Home a partir de R$ 25)
- CTA: "Agende via WhatsApp"
- Prompt imagem (photo-realistic): "Close-up hands cleaning a laptop internals, soft blue lighting, crisp product photography, overlay tag: 'Formatação Completa 24h' — include small green CTA button area on bottom: 'Agende via WhatsApp' — style: modern, professional, shallow DOF — ratio 1:1 1080x1080."
- Prompt imagem (illustration): "Isometric garage-workshop illustration, technician and laptop, neon blue highlights, vector clean style with DeiviTech logo space."

[... cards 2-12 mantidos conforme original ...]

### 🆕 NOVOS CARDS (13-16) - Diferenciais Competitivos

13) Card: "Relatório HTML Personalizado"
- Title: Relatório Exclusivo Seu
- Subtitle: Arquivo HTML gerado em 5 min
- Bullets: "Funciona offline no celular"; "Taxa conversão 85-90%";
- Price: R$ 50 (Diagnóstico completo)
- CTA: "Ver exemplo real"
- Prompt imagem (photo-realistic): "Smartphone screen showing custom HTML report with gradient blue-to-green background (#3498db to #2ecc71), CrystalDiskMark bar charts in purple, green 'Comprar agora' button, and timestamp footer 'Gerado em 15/02/2026 às 18:09 - DeiviTech'. Professional product photo, soft shadows, 1:1 ratio."
- Prompt imagem (illustration): "Isometric smartphone with HTML code flowing out transforming into colorful charts and buttons, tech illustration style."

14) Card: "CrystalDiskMark - Prova Visual"
- Title: Testes Profissionais
- Subtitle: Gráficos que não mentem
- Bullets: "HD antigo: 15 MB/s"; "SSD novo: 550 MB/s";
- Price: Incluso no diagnóstico
- CTA: "Veja a diferença"
- Prompt: "Side-by-side bar chart comparison. Left: short red bar '15 MB/s Read' labeled 'HD Antigo'. Right: full green bar '550 MB/s Read' labeled 'SSD Novo'. Purple header 'CrystalDiskMark Test'. Clean data viz style, gradient background blue to green (#3498db to #2ecc71), 1:1."

15) Card: "Sistema de Indicações"
- Title: Indique e Ganhe R$10
- Subtitle: Seu amigo também ganha R$10
- Bullets: "Ambos economizam"; "Sem limite de indicações";
- Price: R$ 10 desconto cada
- CTA: "Comece a indicar"
- Prompt: "Two people silhouettes facing each other, bright green coins (R$10) floating between them, arrows labeled 'INDICAÇÃO'. Gradient purple to blue background (#9b59b6 to #3498db). Bold text 'VOCÊS DOIS GANHAM R$10'. Modern energetic style, 1:1."

16) Card: "OpenClaw Bot (Em Breve)"
- Title: Atendimento IA 24/7
- Subtitle: Triagem automática no WhatsApp
- Bullets: "Respostas instantâneas"; "Qualifica leads";
- Price: Grátis para clientes
- CTA: "Em desenvolvimento"
- Prompt: "Futuristic WhatsApp chat interface. Bot avatar is glowing blue lobster (#3498db). Messages showing '1️⃣ Formatação 2️⃣ Upgrade 3️⃣ Diagnóstico' with green checkmarks. Dark mode UI, subtle circuit pattern background, 1:1."

---

## 🎬 Slide Deck ATUALIZADO (13 slides - incluindo novos 11-13)

### Slides 1-10 (Originais - mantidos)

- Slide 1 (Hero): "DeiviTech - Seu PC, Potência Máxima" — full-bleed image (hero card), 16:9, CTA "Solicitar Orçamento via WhatsApp".
- Slide 2 (Problema): "Seu PC está lento?" — data snippet, 3 bullets, image representing frustration.
- Slide 3 (Soluções): "O que fazemos" — icons for Formatação, Upgrades, Análises, Combos.
- Slide 4 (Pacotes/Economize): list combos with price and benefits.
- Slide 5 (Processo): 4-step process with icons.
- Slide 6 (Diferenciais): "Por que escolher DeiviTech" – 10 anos experiência, 30 dias garantia, atendimento domiciliar.
- Slide 7 (Prova Social): 2 testimonials and before/after images.
- Slide 8 (Garantias & Promos): Explique políticas e combos limitados.
- Slide 9 (CTA): WhatsApp link, Phone, Location (Feira de Santana), Hours.
- Slide 10 (Fechamento): Mini-FAQ e link para site e social.

### 🆕 NOVOS SLIDES (11-13) - Metodologia HTML e Diferencial

- **Slide 11 (Metodologia HTML):** "Como Vendemos 85-90% Mais" 
  - Layout split: left shows WhatsApp sending HTML file, right shows phone displaying report with timestamp
  - 3 bullets: "Arquivo personalizado", "Funciona offline", "Prova visual total"
  - Background gradient blue to green (#3498db to #2ecc71)
  - Nota apresentador: "Diferencial competitivo único - ninguém no mercado faz isso"

- **Slide 12 (Exemplos Reais):** "Casos de Sucesso"
  - Two case study cards: 
    1. "HD WD-WXU1CA1L1134": gráfico mostrando 15 MB/s → 550 MB/s, cliente fechou no mesmo dia
    2. "Notebook Mel": problema carregador identificado, reparo aprovado, cliente recorrente
  - Include before/after screenshots (blur sensitive data)
  - Nota apresentador: "Prova visual irrefutável = taxa de conversão 85-90%"

- **Slide 13 (Sistema Indicações + Bot):** Split slide
  - Top half: "Indique e Ganhe R$10" with coin icons
  - Bottom half: "OpenClaw Bot (Em Breve)" with WhatsApp interface mockup
  - Purple to blue gradient (#9b59b6 to #3498db)
  - Nota apresentador: "Crescimento orgânico + automação futura"

---

## 🎨 Regras de consistência visual ATUALIZADAS

- **Cores:** azul #3498db (primary), verde #2ecc71 (cta/positive), roxo #9b59b6 (accent), amarelo #FBBF24 (promo badge). Adapte para acessibilidade (contraste mínimo 4.5:1).
- **Fontes:** Inter / Poppins (Google Fonts).
- **Iconografia:** line icons para serviços e solid icons para CTAs.
- **Imagens:** preferir PNG 1080x1080, JPG 1920x1080 (slides). Use 4:5 (1200x1500) para posts verticals e 9:16 para stories.
- **🆕 Timestamp Obrigatório:** Em rodapé de relatórios: "Gerado em [DATA] - DeiviTech" (fonte pequena, cor #95a5a6)
- **🆕 Gradientes Padrão:**
  - Fundos sutis: `linear-gradient(135deg, #3498db, #2ecc71)`
  - Headers premium: `linear-gradient(135deg, #9b59b6, #3498db)`
  - CTAs: solid #2ecc71 com hover #27ae60

---

## 💰 Preços e observações comerciais

- Preços mostrados nos cards e slides devem refletir os valores dentro do repositório (`formatacao.html` e `hardware.html`) e `plano_marketing.md`.
- NotebookLM Pro: upgrade recomendado para empresas/organizações que queiram análises e compartilhamento colaborativo em rede. Enterprise usa Vertex AI (custo por model + infra – ver preços Vertex AI se for gerar imagens em grande escala).
- Se ocorrer qualquer conflito (ex: preço desatualizado), priorize o conteúdo mais recente do `formatacao.html` e `hardware.html`.

---

## 📝 Checklist antes de gerar imagens (quality gates)

- [ ] Preços corretos e atualizados no HTML
- [ ] Logotipo em PNG com fundo transparente disponível
- [ ] Paleta de cores confirmada (Azul #3498db, Roxo #9b59b6, Verde #2ecc71)
- [ ] Textos do CTA: WhatsApp/Phone/Local
- [ ] Direitos de uso de qualquer imagem externa
- [ ] **🆕 Timestamp incluído em relatórios:** "Gerado em [DATA] às [HORA] - DeiviTech"
- [ ] **🆕 Taxa conversão 85-90%** mencionada em slides/cards relevantes
- [ ] **🆕 Exemplos reais** (hd-report, Diagnostico-Mel) usados em casos de sucesso

## ✅ Checklist Pós-Geração (NotebookLM Output)

- [ ] Todos os 16 cards gerados com prompts fotorealista + ilustração
- [ ] Todos os 13 slides com notas do apresentador
- [ ] JSON estruturado corretamente (validar sintaxe)
- [ ] Cores hex conferidas (não usar cores antigas #3b82f6, #10b981, #7c3aed)
- [ ] Preços conferidos contra formatacao.html/hardware.html
- [ ] **🆕 Cards 13-16** focam nos novos insights (HTML, gráficos, indicações, bot)
- [ ] **🆕 Slides 11-13** focam em metodologia HTML e casos reais

---

## 📊 Sugestões A/B para campanhas (5 ideias + CTAs)

1. A/B Test: "Formatação 24h" vs "Formatação + SSD 240GB" – CTA "Agende" vs "Veja o combo".
2. A/B Test: Dark gamer (Ghost Spectre) vs Clean corporate (Home Office) – CTA "Saiba mais" vs "Ganhe 10%".
3. A/B Test: Testemunho real com rosto vs Depoimento anônimo – CTA "Ler casos" vs "Solicitar orçamento".
4. A/B Test: Post com preço visível vs Post sem preço (foco problema) – CTA "Orçamento" vs "Fale conosco".
5. A/B Test: Stories vertical 9:16 com antes/depois vs carrossel 1:1 com passo a passo — CTA "Arraste pra cima" (stories) vs "Visite site" (post).
6. **🆕 A/B Test:** Relatório HTML com timestamp vs Relatório PDF estático — CTA "Ver exemplo" vs "Baixar PDF".
7. **🆕 A/B Test:** Card Sistema Indicações (R$10 ambos) vs Desconto 10% fixo — CTA "Indicar amigo" vs "Usar desconto".

---

Solicite geração agora no NotebookLM com o prompt acima, ou peça para eu rodar automático e gerar os 16 prompts finais com variantes prontos para enviar ao gerador de imagens integrado (Gemini Image).
