# Workflow NotebookLM — Gerar Cards e Slides

## Fontes para Upload no NotebookLM

Carregar estes arquivos como fontes:

1. `docs/cenario-hardware-2025.md`
2. `docs/cenario-sistemas-operacionais-2025.md`
3. `marketing/plano_marketing.md`
4. `marketing/ads_campaign_v1.md`
5. `README.md`

## Prompt Principal

```
Você é um assistente de marketing para a DeiviTech, uma empresa de formatação e hardware de Feira de Santana-BA. Com base nas fontes carregadas, gere:

1. **5 Cards para Instagram (1080x1080)**
   - Card 1: "Seu HD serve pra mais do que você imagina" — listar 4 usos surpreendentes
   - Card 2: "Windows 10 morreu. E agora?" — 4 alternativas
   - Card 3: "HD Externo por R$ 100" — combo HD + Case
   - Card 4: "Xbox 360 Desbloqueado sem chip" — método HDD
   - Card 5: "Formatação com IA" — diferencial DeiviTech

2. **Para cada card, forneça:**
   - Headline (máx 8 palavras)
   - Subtítulo (máx 15 palavras)
   - 3-4 bullet points curtos
   - CTA (call to action)
   - Paleta de cores sugerida
   - Prompt de imagem para Nano Banana Pro

3. **3 Slides para apresentação comercial:**
   - Slide 1: Quem é a DeiviTech
   - Slide 2: Nossos diferenciais (IA, testes, expertise)
   - Slide 3: Tabela de preços e combos
```

## Resultado Esperado

NotebookLM vai usar todas as fontes carregadas para gerar conteúdo informado e preciso, com dados reais dos HDs testados e preços atualizados.
