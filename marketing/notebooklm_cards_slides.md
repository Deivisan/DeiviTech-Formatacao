# NotebookLM -> Campanha de Marketing: Cards e Slides (DeiviTech)

Este documento descreve como usar o NotebookLM (Google) para gerar um conjunto de cards (imagens) e slides para uma campanha de marketing do repositório DeiviTech-Formatacao.

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

## Estratégia de geração (Workflow com NotebookLM)
1. Crie um notebook e nomeie algo como "DeiviTech - Campanha Marketing 2025".
2. Faça upload das fontes listadas: README, HTMLs, marketing/MDs.
3. Peça ao NotebookLM para "Analisar e nos fornecer a copy e imagens adequadas para cards e slides de marketing com foco em conversão (WhatsApp)".
4. Use as ferramentas do NotebookLM: "Gerar Infográfico" / "Gerar Apresentação" / "Gerar Resumo".
5. Para imagens, peça também "Gerar prompts perfeitos para um gerador de imagens (Gemini image ou Lyria), e exporte em resoluções específicas (1080x1080 / 1200x628 / 4:5)".
6. Revise o conteúdo e prompts antes de gerar imagens, garantindo marcas, preços e CTAs corretos.
7. Baixe as imagens e slides; prefira PNG para redes sociais (transparência se necessário) e PNG/JPG para web.

## Prompt (NotebookLM) - FAST TEMPLATE (usa os arquivos carregados)
Use este prompt base ao perguntar ao NotebookLM. Ele é projetado para gerar automaticamente um conjunto de cards e um slide deck para promover DeiviTech.

Prompt (colar no NotebookLM):

"A partir das fontes carregadas (README.md, marketing/plano_marketing.md, formatacao.html, hardware.html, etc.), gere:
1) Um conjunto de 12 cards de imagem (1080x1080) para Instagram/WhatsApp Status que descrevem: Formatação Completa, Ghost Spectre (otimização gamer), Linux (reciclagem de hardware), Upgrades (Memória, SSD), Combos promocionais, Análise IA, Pacotes de software, Processo (4 passos), Garantia 30 dias, Testemunhos (baseado em depoimentos no repo), Ofertas (Ressurreição do PC Velho, Combo Gamer Start, Home Office), CTA para WhatsApp com mensagem pré-formatada. Para cada card: inclua título curto (1-5 palavras), um subtítulo (1 linha), 2 bullets de benefícios, preço se houver, e CTA curta.
2) Um slide deck em 10 slides: slide 1 - Hero + slogan; slide 2 - Problema do público; slide 3 - O que oferece (service pillars); slide 4 - Pacotes e preços (combos); slide 5 - Processo em 4 passos; slide 6 - Benefícios e numbers (ex: 5x performance, 10% combos); slide 7 - Testemunhos; slide 8 - Garantia; slide 9 - CTA e formas de contato; slide 10 - Fechamento + mini-FAQ.
3) Para cada card e slide, gere um prompt de imagem pronto para um gerador de imagens (alto nível: estilo, cores, elementos gráficos, layout) e também um prompt alternativo para um layout foto-realista.
4) Produza variantes para cada imagem (de alta-contraste, minimalista, e ilustração cartoon) e indique a resolução recomendada e proporções (Square 1080x1080; 1200x628 para Facebook/Twitter; 9:16 para Stories).
5) Liste os assets (arquivos do repo) que foram usados para gerar cada card como contexto. Não gere conteúdo que contradiga preços no repo.

Gere também um resumo curto com 5 títulos de campanhas e 5 chamadas (CTAs) para testes A/B.

Resposta desejada: JSON com 12 cards + 10 slides, cada item com: title, subtitle, body (bullets), price (if any), cta, imagePrompt_photoRealistic, imagePrompt_illustration, colors (rgba hex), font suggestions (Google Fonts), recommended ratio/size, and sourceFilesUsed[] -- E entregue no formato "Card[1..12]" / "Slide[1..10]".

Priorize a clareza, a conversão (CTA) e a aderência visual à identidade do repo (cores: azul #3b82f6, verde #10b981, roxo #7c3aed)."

## Single perfect prompt (copy-paste into NotebookLM)

"Use os arquivos carregados (README.md, marketing/plano_marketing.md, formatacao.html, hardware.html, marketing/prompts_nano_banana_pro.txt). Analise todo o conteúdo e gere:
- 12 imagens-card (square 1080x1080) com textos prontos, descrição textual para cada card, imagem-prompt foto-realista e ilustração (+ 2 variantes cada), e o arquivo sugerido (ex: card_01_formatacao.png). Garanta que todos os preços sejam os valores presentes nos arquivos HTML.
- 1 deck 10 slides (16:9) com títulos, bullet points, nota do apresentador (1 frase por slide), imagens sugeridas (image prompts), e sugestão de ordem/tempo de apresentação.
- Saída em JSON: {cards: [...], slides: [...], imagesPrompts: [...]}. Para cada imagem, indique proporção, cores hex, fonte sugerida, e variação de estilo (foto, illustration, minimal).

Priorize: clareza, transformação dos ativos, CTAs diretas para WhatsApp e design consistente com a paleta: #3b82f6 (blue), #10b981 (green), #7c3aed (purple)."



## Card Template (12 principais, cada um definido com imagem e copy)
Abaixo um template de cards (title, subtitle, bullets, price, cta, prompt). Edite conforme necessário.

1) Card: "Formatação Rápida"
- Title: Formatação Completa
- Subtitle: Sistema limpo e otimizado em 24h
- Bullets: "Backup seguro"; "Instalamos drivers + softwares";
- Price: R$ 25 - (Windows 10/Home a partir de R$ 25) — usar preço do site
- CTA: "Agende via WhatsApp"
- Prompt imagem (photo-realistic): "Close-up hands cleaning a laptop internals, soft blue lighting, crisp product photography, overlay tag: 'Formatação Completa 24h' — include small green CTA button area on bottom: 'Agende via WhatsApp' — style: modern, professional, shallow DOF — ratio 1:1 1080x1080."
- Prompt imagem (illustration): "Isometric garage-workshop illustration, technician and laptop, neon blue highlights, vector clean style with DeiviTech logo space."

2) Card: "Ghost Spectre - Gamer"
- Title: Ghost Spectre
- Subtitle: Sistema otimizado para FPS alto
- Bullets: "70% menos RAM"; "Boot em 15s";
- Price: Preço a combinar
- CTA: "Saiba mais" (link para página Ghost Spectre)
- Prompt imagem (photo-realistic): "Futuristic gaming setup with purple/red RGB, ghost-like translucent mascot over a gaming PC, dynamic light, high contrast, 4K marketing photo — 1080x1080 square." 
- Prompt imagem (illustration): "Dark aggressive cyberpunk ghost character holding a game controller and PC with flame-like trails."

3) Card: "Linux - Ressurreição"
- Title: Linux Gratuito
- Subtitle: Revive PCs antigos e economize
- Bullets: "Gratuito"; "Mais seguro & leve";
- Price: 0
- CTA: "Instale já"
- Prompt: "Friendly, bright image of an old laptop transforming into a vibrant one with Ubuntu icons, green highlights, flat vector style."

4) Card: "SSD 240GB"
- Title: SSD 240GB (Recomendado)
- Subtitle: 5x mais rápido que HD
- Bullets: "Velocidade 550MB/s"; "Garantia 2 anos";
- Price: R$ 120
- CTA: "Turbine seu PC"
- Prompt: "Macro shot of SSD with neon speed streaks, strong highlight on connector, high-detail visual, 1:1 ratio."

5) Card: "Combos" (Economico/Performance/Gamer)
- Title: Combos Especiais
- Subtitle: SSD + RAM com desconto
- Bullets: "Instalação grátis"; "Economize já";
- Price: display price (ex: R$ 240, R$ 360, R$ 540)
- CTA: "Ver combos"
- Prompt: "Flat lay photo of SSD + RAM crossing each other, gold COMBO text, clean modern background, 1:1."

6) Card: "Diagnóstico IA"
- Title: Análise IA
- Subtitle: Diagnóstico e recomendações
- Bullets: "Relatório em 10 minutos"; "Recomendações sem complicação";
- Price: R$ 25
- CTA: "Teste agora"
- Prompt: "Abstract brain made of circuit nodes scanning a PC, blue & orange tones, medical/tech style. 1:1" 

7) Card: "Pacotes - Básico"
- Title: Pacote Básico
- Subtitle: Chrome, VLC, WinRAR
- Bullets: "Instalação inclusa"; "Sem custos adicionais";
- Price: free
- CTA: "Gratuito"
- Prompt: "Simple icon set, flat style - Chrome, VLC, WinRAR icons in a neat circle, modern design, 1:1." 

8) Card: "Processo em 4 passos"
- Title: Como Funciona
- Subtitle: Backup → Formatação → Instalação → Entrega
- Bullets: "Rápido"; "Seguro";
- Price: N/A
- CTA: "Saiba como" 
- Prompt: "Minimal infographic: 4 circular icons connected horizontally with titles, consistent colors (blue/green/purple/yellow), flat design, 1080x1080."

9) Card: "Garantia 30 dias"
- Title: Garantia
- Subtitle: 30 dias de suporte
- Bullets: "Suporte técnico"; "Revisão gratuita";
- Price: N/A
- CTA: "Garanta já"
- Prompt: "3D gold badge with '30 dias garantida', professional corporate look, dark gradient background, 1:1."

10) Card: "Home Office"
- Title: Home Office Stable
- Subtitle: Boot, Zoom & Estabilidade
- Bullets: "Configuração otimizada"; "Windows Pro";
- Price: per-package
- CTA: "Agende para o Home Office"
- Prompt: "Photo of a neat home office, worker on video call, Windows desktop, green and blue tones, 1:1." 

11) Card: "Antes e Depois"
- Title: Antes e Depois
- Subtitle: Veja a transformação
- Bullets: "Boot 35s → 15s"; "Mais FPS, melhor produtividade";
- Price: N/A
- CTA: "Veja o portfólio"
- Prompt: "Vertical split with a dusty, old computer vs a shiny new desktop in full color, cinematic lighting, 1:1 square ratio." 

12) Card: "Testemunhos"
- Title: Clientes Satisfeitos
- Subtitle: Feedback real da nossa comunidade
- Bullets: "500+ PCs formatados"; "Atendimento domiciliar";
- Price: N/A
- CTA: "Ler depoimentos"
- Prompt: "Collage of smiling people holding laptops with small quote overlay, warm colors, 1:1."

## Slide Deck (10 slides) – Layout e conteúdo
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

## Prompt para imagens (template para um gerador de imagens – 3 variantes)
Template para usar em Gemini/Lyria/Imagen:
"{style}, high resolution, photo-realistic, brand colors (#3b82f6 blue, #10b981 green, #7c3aed purple). Scene: {scene description}. Include space for logo (top-left), price tag (bottom-left), CTA button (bottom-right). Typography area: sans-serif bold (Poppins/Inter). Ratio: {ratio}. Use soft shadows, shallow DOF and studio lighting."

## Regras de consistência visual
- Cores: azul #3b82f6 (primary), verde #10b981 (cta/positive), roxo #7c3aed (accent), amarelo #FBBF24 (promo badge). Adapte para acessibilidade (contraste mínimo 4.5:1).
- Fontes: Inter / Poppins (Google Fonts).
- Iconografia: line icons para serviços e solid icons para CTAs.
- Imagens: preferir PNG 1080x1080, JPG 1920x1080 (slides). Use 4:5 (1200x1500) para posts verticals e 9:16 para stories.

## Preços e observações comerciais
- Preços mostrados nos cards e slides devem refletir os valores dentro do repositório (`formatacao.html` e `hardware.html`) e `plano_marketing.md`.
- NotebookLM Pro: upgrade recomendado para empresas/organizações que queiram análises e compartilhamento colaborativo em rede. Enterprise usa Vertex AI (custo por model + infra – ver preços Vertex AI se for gerar imagens em grande escala).
- Se ocorrer qualquer conflito (ex: preço desatualizado), priorize o conteúdo mais recente do `formatacao.html` e `hardware.html`.

## Como executar no NotebookLM (passo-a-passo)
1. Abra notebooklm.google.com e faça login com a conta relevante (pessoal/organização).
2. Crie novo notebook: "DeiviTech - Campanha 2025".
3. Em "Adicionar Fontes", carregue: `README.md`, `formatacao.html`, `hardware.html`, `marketing/plano_marketing.md`, `marketing/prompts_nano_banana_pro.txt`.
4. Execute prompt do template (cópia do input acima) usando a caixa de prompt do NotebookLM.
5. Peça ao NotebookLM para gerar os prompts de imagem prontos para usar num gerador integrado (ou exportar para Gemini Image). Se usar Vertex AI para geração, considere custos de computação por imagem (veja tabela de Vertex AI pricing). Se quiser centenas de imagens, faça um upgrade para um plano pago.
6. Revise os prompts e exporte as imagens em lote.
7. Ao terminar, gere slides com o comando "/slides" (ou usar a opção "Gerar apresentação"), e insira as imagens geradas como assets para cada slide.
8. Baixe as imagens e slides e publique nas redes/artigos conforme o calendário (plano_marketing.md).

## Sugestões A/B para campanhas (5 ideias + CTAs)
1. A/B Test: "Formatação 24h" vs "Formatação + SSD 240GB" – CTA "Agende" vs "Veja o combo".
2. A/B Test: Dark gamer (Ghost Spectre) vs Clean corporate (Home Office) – CTA "Saiba mais" vs "Ganhe 10%".
3. A/B Test: Testemunho real com rosto vs Depoimento anônimo – CTA "Ler casos" vs "Solicitar orçamento".
4. A/B Test: Post com preço visível vs Post sem preço (foco problema) – CTA "Orçamento" vs "Fale conosco".
5. A/B Test: Stories vertical 9:16 com antes/depois vs carrossel 1:1 com passo a passo — CTA "Arraste pra cima" (stories) vs "Visite site" (post).

## Checklist antes de gerar imagens (quality gates)
- [ ] Preço corretos e atualizados no HTML
- [ ] Logotipo em PNG com fundo transparente disponível
- [ ] Paleta de cores confirmada
- [ ] Textos do CTA: WhatsApp/Phone/Local
- [ ] Direitos de uso de qualquer imagem externa

---
Solicite geração agora no NotebookLM com o prompt acima, ou peça para eu rodar automático e gerar os 12 prompts finais com variantes prontos para enviar ao gerador de imagens integrado (Gemini Image).