# 📂 Marketing Assets - DeiviTech Formatação
**Atualizado:** 15/02/2026  
**Status:** ✅ Todos arquivos sincronizados com metodologia HTML (taxa conversão 85-90%)

---

## 🎯 Navegação Rápida

### 📖 Documentação Estratégica
- **[ATUALIZACOES-2026-02-15.md](./ATUALIZACOES-2026-02-15.md)** → Resumo executivo de todas mudanças recentes
- **[plano_marketing.md](./plano_marketing.md)** → Plano geral de marketing e campanhas

### 🎨 Prompts de Geração

#### NotebookLM (Google)
- **[notebooklm_cards_slides.md](./notebooklm_cards_slides.md)** → Prompts para 16 cards + 13 slides  
  **Uso:** Copiar "Single Perfect Prompt" e colar no NotebookLM após upload das sources
  
- **[COPY-PASTE-NOTEBOOKLM.txt](./COPY-PASTE-NOTEBOOKLM.txt)** → Prompts limpos prontos para Ctrl+C  
  **Uso:** Acesso rápido sem navegação pelo MD completo

#### Nano Banana Pro / Gemini Image
- **[prompts_nano_banana_pro.txt](./prompts_nano_banana_pro.txt)** → 16 prompts de imagens (atualizado)  
  **Novos:** 8B (Relatório HTML mockup), 8C (Taxa 85-90%), 11B (Indicações), 11C (Timestamp), 14-16 (Exemplos reais)

### 📚 NotebookLM Sources (Fonte de Verdade - 6 arquivos)

Fazer upload de TODOS no NotebookLM antes de gerar cards/slides:

1. **[notebooklm_sources/1_dossie_mestre.md](./notebooklm_sources/1_dossie_mestre.md)** (4.3 KB)  
   Visão geral completa: serviços, proposta valor, metodologia HTML, taxa conversão 85-90%

2. **[notebooklm_sources/2_fabrica_conteudo.md](./notebooklm_sources/2_fabrica_conteudo.md)** (4.0 KB)  
   Roteiros de posts, elementos visuais padrão, timestamp obrigatório

3. **[notebooklm_sources/3_metodologia_tecnica.md](./notebooklm_sources/3_metodologia_tecnica.md)** (3.8 KB)  
   Stack técnica, metodologia HTML personalizada (6 etapas), exemplos reais

4. **[notebooklm_sources/4_tech_stack_architecture.md](./notebooklm_sources/4_tech_stack_architecture.md)** (3.9 KB)  
   Arquitetura de relatórios HTML, OpenClaw Bot status, problemas do site atual

5. **[notebooklm_sources/5_services_deep_dive.md](./notebooklm_sources/5_services_deep_dive.md)** (3.4 KB)  
   Detalhamento de serviços, sistema de indicações, relatórios como produto premium

6. **[notebooklm_sources/6_business_logic_&_sales.md](./notebooklm_sources/6_business_logic_&_sales.md)** (3.9 KB)  
   Funil de conversão com relatório HTML, panfletos na faculdade, estratégias de crescimento

### 🧠 Insights e Metodologia
- **[insights/METODOLOGIA-RELATORIOS-IA.md](./insights/METODOLOGIA-RELATORIOS-IA.md)** → Metodologia HTML completa (diferencial competitivo)
- **[insights/PLANO-CRESCIMENTO-2026.md](./insights/PLANO-CRESCIMENTO-2026.md)** → Plano estratégico anual

### 💬 Assets Prontos para Uso
- **[assets/INSTAGRAM-BIO-POSTS.md](./assets/INSTAGRAM-BIO-POSTS.md)** → Bio + 9 posts Instagram + calendário
- **[assets/GOOGLE-MEU-NEGOCIO.md](./assets/GOOGLE-MEU-NEGOCIO.md)** → Perfil GMB + FAQ + catálogo de serviços
- **[assets/WHATSAPP-BUSINESS-MENSAGENS.md](./assets/WHATSAPP-BUSINESS-MENSAGENS.md)** → 15 respostas rápidas + fluxos de conversa

### 🧪 Templates Automatizados
- **[templates/relatorio-hd.html](./templates/relatorio-hd.html)** → Template HD com gráficos CrystalDiskMark
- **[templates/relatorio-notebook.html](./templates/relatorio-notebook.html)** → Template notebook genérico
- **[templates/_componentes.html](./templates/_componentes.html)** → Blocos reutilizáveis (header, footer, CTA, timestamp)

### 📜 Transcrições e Sessões
- **[../transcricoes/GROK-SESSION-2026-02-15.md](../transcricoes/GROK-SESSION-2026-02-15.md)** → Sessão estratégica completa com Grok (34 KB)

---

## 🎨 Paleta de Cores Oficial (USAR APENAS ESTAS)

```css
/* ✅ Cores Atualizadas (Fev 2026) */
--azul-primary: #3498db;      /* Confiança técnica */
--roxo-accent: #9b59b6;       /* Inovação, premium */
--verde-success: #2ecc71;     /* Ação, conversão */
--verde-hover: #27ae60;       /* Hover CTAs */
--cinza-timestamp: #95a5a6;   /* Timestamp footer */

/* Gradientes Padrão */
--gradient-fundo: linear-gradient(135deg, #3498db, #2ecc71);   /* Fundos sutis */
--gradient-header: linear-gradient(135deg, #9b59b6, #3498db);  /* Headers premium */
```

```css
/* ❌ NÃO USAR MAIS (cores antigas depreciadas) */
--old-blue: #3b82f6;
--old-green: #10b981;
--old-purple: #7c3aed;
```

---

## 🚀 Workflows Recomendados

### Workflow 1: Gerar Cards e Slides (NotebookLM)
1. Fazer upload dos **6 sources** + `METODOLOGIA-RELATORIOS-IA.md` + `GROK-SESSION-2026-02-15.md`
2. Abrir `notebooklm_cards_slides.md` ou `COPY-PASTE-NOTEBOOKLM.txt`
3. Copiar "Single Perfect Prompt" completo
4. Colar no NotebookLM e gerar JSON com 16 cards + 13 slides
5. Validar contra checklist pós-geração (ver `ATUALIZACOES-2026-02-15.md`)

### Workflow 2: Gerar Imagens Individuais (Nano Banana Pro)
1. Abrir `prompts_nano_banana_pro.txt`
2. Escolher prompt específico (ex: Prompt 8B para mockup relatório HTML)
3. Copiar prompt completo (incluindo paleta de cores)
4. Gerar imagem em 1080x1080 (square) ou resolução recomendada
5. Validar cores hex e timestamp (se aplicável)

### Workflow 3: Criar Relatório HTML Personalizado
1. Abrir `templates/relatorio-hd.html` ou `templates/relatorio-notebook.html`
2. Copiar template base
3. Substituir placeholders:
   - `[NOME_CLIENTE]` → Nome real
   - `[MARCA_HD]` → Ex: "WD Blue 500GB"
   - `[VELOCIDADE_LEITURA]` → Valor do CrystalDiskMark
   - Timestamp será gerado automaticamente via JavaScript
4. Testar abertura offline no navegador móvel
5. Enviar via WhatsApp como arquivo `.html`

### Workflow 4: Validar Consistência dos Arquivos
1. Executar `validar.sh` (Bash script)
2. Revisar output de erros/warnings
3. Corrigir cores antigas ou timestamps faltando
4. Re-executar até 100% green checkmarks

---

## 📊 Métricas de Qualidade (Validação)

### Checklist Obrigatório (Antes de Publicar Qualquer Asset)
- [ ] **Paleta oficial aplicada** (Azul #3498db, Roxo #9b59b6, Verde #2ecc71)
- [ ] **Sem cores antigas** (buscar #3b82f6, #10b981, #7c3aed → deve retornar 0 matches)
- [ ] **Timestamp presente** em relatórios HTML (formato: "Gerado em DD/MM/YYYY às HH:MM - DeiviTech")
- [ ] **Taxa conversão 85-90%** mencionada onde relevante
- [ ] **Exemplos reais** usados (HD WD-WXU1CA1L1134 e/ou Diagnostico-Mel)
- [ ] **Sistema indicações** documentado (R$ 10 ambos ganham)
- [ ] **Preços validados** contra `formatacao.html`/`hardware.html` (sem contradições)
- [ ] **CTA WhatsApp** com mensagem pré-formatada (número +55 75 99213-4212)

---

## 🔧 Ferramentas e Dependências

### Geração de Conteúdo
- **NotebookLM** (Google) - Cards, slides, infográficos
- **Nano Banana Pro** (Gemini-based) - Geração de imagens
- **Chart.js** (v4.x) - Gráficos benchmark CrystalDiskMark

### Validação e Linting
- **markdownlint-cli** - Validação de arquivos `.md`
- **ShellCheck** - Análise estática de scripts Bash
- **Bash 5.x** - Execução de `validar.sh`

### Fontes Web (Google Fonts)
- **Poppins** (Bold 700/800) - Headlines e títulos
- **Inter** (Regular 400, Medium 500) - Body text
- **JetBrains Mono** (500) - Código e dados técnicos

---

## 📞 Próximas Ações Recomendadas

1. **Gerar Assets Visuais** → Rodar NotebookLM com "Single Perfect Prompt"
2. **Criar Templates HTML** → Automatizar geração de relatórios personalizados
3. **Testar Metodologia** → Enviar relatório via WhatsApp para cliente teste
4. **Ativar Indicações** → Configurar mensagem pós-venda automática
5. **Validar Site** → Corrigir 6 problemas identificados (aguardando permissão)

---

## 🦞 Metadados

**Repositório:** DeiviTech-Formatacao  
**Workspace:** `/home/deivi/Projetos/DeiviTech-Formatacao/marketing/`  
**Última Atualização:** 15/02/2026  
**Agente Responsável:** DevSan AGI (Claude Sonnet 4.5)  
**Sessão de Origem:** Continuação Grok Session 2026-02-15  
**Diferenciais Únicos:** Relatórios HTML personalizados (85-90% conversão), Timestamp obrigatório, Sistema indicações viral

---

**🎯 Este diretório é a fonte única de verdade para todas as IAs trabalhando no projeto DeiviTech.**
