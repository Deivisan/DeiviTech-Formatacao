# METODOLOGIA TÉCNICA E ANÁLISE
**Fonte para NotebookLM criar autoridade e explicar processos**

## O Processo DeiviTech (Standard Operation Procedure)

### 1. A Triagem (O Diagnóstico)
Antes de formatar, todo PC passa por um check-up de saúde via software (CrystalDiskInfo) para garantir que o HD/SSD está saudável. Não formatamos hardware defeituoso sem avisar.
*   *Marketing:* "Transparência total. Se a peça estiver ruim, você sabe antes de gastar."

### 2. O Backup Blindado
Utilizamos servidores locais para backup temporário dos dados do cliente (Meus Documentos, Desktop, Downloads).
*   *Marketing:* "Seus dados sagrados protegidos enquanto operamos a máquina."

### 3. A Instalação Limpa (Clean Install)
Não fazemos "restauração de fábrica". Apagamos todas as partições e recriamos a tabela de arquivos. Isso elimina vírus persistentes e erros de registro.

### 4. O Pós-Instalação (O "Pulo do Gato")
A maioria para na instalação. Nós continuamos:
*   **Debloating:** Remoção de apps inúteis da Microsoft (Cortana, Xbox Bar, Notícias).
*   **Drivers:** Atualização manual de drivers de vídeo e chipset.
*   **Runtimes:** Instalação de Visual C++, DirectX e NetFramework (essencial para jogos não darem erro de DLL).
*   **Navegadores:** Instalação já com AdBlock (bloqueador de anúncios) configurado.

## Diferenciais Técnicos Explicados

### O que é o Ghost Spectre?
É uma ISO modificada do Windows que remove telemetria (espionagem), Windows Defender (opcional), e serviços de impressão/fax que 99% dos usuários não usam. O resultado é um sistema que processa menos threads em segundo plano, liberando ciclos da CPU para o que importa: o usuário.

### O que é a Análise IA?
É nossa metodologia de cruzar dados de hardware (Geração do Processador + Capacidade da RAM + Tipo de Disco) para oferecer a solução matemática ideal.
*   *Exemplo:* Core i3 2ª Geração + 4GB RAM + HD = **Candidato a Chrome OS ou Linux.**
*   *Exemplo:* Core i5 9ª Geração + 8GB RAM + SSD = **Candidato a Ghost Spectre.**

## A Metodologia HTML Personalizada (Revolucionária)

### Como Funciona (Do Diagnóstico à Venda)
1.  **Diagnóstico Inicial:** Cliente envia fotos/vídeo do PC ou leva presencialmente
2.  **Testes Profissionais:** CrystalDiskMark (velocidade disco), CPU-Z (processador), benchmarks
3.  **Geração HTML (5 minutos):** Sistema automatizado cria arquivo `.html` personalizado:
    *   Nome do cliente no título
    *   Specs do PC dele (não template genérico)
    *   Gráficos dos testes (CrystalDiskMark em barras)
    *   Frames de vídeo dos testes rodando
    *   Timestamp: "Gerado em 15/02/2026 às 18:09 - DeiviTech"
    *   Botão "Comprar agora" com link WhatsApp pré-formatado
4.  **Envio pelo WhatsApp:** Arquivo `.html` enviado como documento (não link)
5.  **Cliente Abre Offline:** Funciona em qualquer navegador móvel (Chrome, Samsung Internet)
6.  **Conversão:** Cliente clica "Comprar agora" → volta pro WhatsApp com mensagem pronta

### Por Que Ninguém Faz Isso?
*   Maioria envia link genérico (Notion, Google Docs) que parece impessoal
*   Relatórios PDF são estáticos, sem interatividade
*   Sites hospedados requerem internet constante
*   **DeiviTech:** Arquivo HTML é "site particular" que cliente guarda pra sempre

### Taxa de Conversão Comprovada
**85-90% dos clientes que veem relatório HTML fecham venda**
*   Muito acima da média de mercado (30-40%)
*   Motivo: Prova visual total, sem como duvidar
*   Cliente pensa: "Esse cara testou tudo, não tem enganação"

### Exemplos de Relatórios em Produção
*   `v2/reports/hd-report-WD-WXU1CA1L1134.html` - Venda de HD com gráficos CrystalDiskMark
*   `Diagnostico-Mel.html` - Notebook com problema de carregador (design profissional, gradientes azul/verde)
