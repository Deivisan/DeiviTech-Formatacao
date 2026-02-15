# Cenário Atual de Hardware — 2025/2026

## Visão Geral do Mercado de Armazenamento

### HDDs (Hard Disk Drives)

Em 2025, os HDDs continuam sendo relevantes apesar da dominância crescente dos SSDs. O mercado de HDDs se dividiu em dois segmentos claros:

1. **Armazenamento de massa** — HDDs de 4TB+ para NAS, servidores, backup e vigilância
2. **Mercado secundário** — HDDs de 500GB-2TB usados/recondicionados, extremamente populares no Brasil para uso acessível

#### Modelos que Trabalhamos

| Modelo | RPM | Interface | Cache | Velocidade Est. | Preço DeiviTech |
|--------|-----|-----------|-------|-----------------|-----------------|
| WD Blue 500GB (WD5000BPVT) | 5400 | SATA II 3Gb/s | 8MB | ~81 MB/s | R$ 50 |
| WD Black 500GB | 7200 | SATA III 6Gb/s | 32MB | ~120 MB/s | R$ 70 |

#### Case USB 3.0

- **Adição do case: sempre +R$ 50**
- Case em alumínio, compatível com SATA 2.5" e 3.5"
- USB 3.0 — velocidade máxima teórica de 5 Gbps
- Transforma qualquer HD interno em HD externo portátil
- Compatível com: PCs, notebooks, Smart TVs, PS3, PS4, Xbox One, DVR de câmeras

### SSDs (Solid State Drives)

Os SSDs dominam o mercado de boot e sistema operacional:

| Modelo | Capacidade | Interface | Leitura | Escrita | Uso Recomendado |
|--------|-----------|-----------|---------|---------|-----------------|
| Kingston A400 | 240GB | SATA III | 500 MB/s | 350 MB/s | Sistema + apps |
| Kingston A400 | 480GB | SATA III | 500 MB/s | 450 MB/s | Tudo |
| NVMe genérico | 256GB | PCIe 3.0 | 2000 MB/s | 1500 MB/s | Ultra rápido |

**Nota**: SSDs são vendidos separadamente na página de Hardware. A página de testes foca em HDs testados com IA.

---

## Usos Detalhados de um HD

### 1. Xbox 360 — Desbloqueio via HDD Exploit

O **HDD Exploit** (também chamado BadAvatarHDD) é um método de desbloqueio do Xbox 360 que:

- **Não precisa de chip** — é puramente via software/firmware no HD
- **Não precisa de solda** — basta conectar o HD com a exploit
- **Funciona em qualquer Xbox 360** — Fat, Slim, Super Slim (E)
- **É reversível** — basta retirar o HD

**Como funciona:**

1. Um HD 2.5" SATA é preparado com uma partição especial contendo o exploit
2. O HD é conectado ao Xbox 360 via adaptador SATA interno
3. Ao iniciar, o exploit é executado automaticamente
4. O console fica totalmente desbloqueado (RGH equivalente)

**Relevância para o mercado brasileiro:**

- Xbox 360 continua muito popular no Brasil (mercado de usados)
- Jogos são caros — o desbloqueio permite acesso a uma biblioteca vasta
- Um WD Blue 500GB por R$ 50 + serviço de preparo = console desbloqueado acessível
- É um serviço que tem altíssima demanda em Feira de Santana e região

### 2. PS3 & PS4 — Expansão de Armazenamento

**PS4:**

- Aceita qualquer HD 2.5" SATA de até 8TB
- O HD interno de fábrica é 500GB — insuficiente para jogos modernos (60-100GB cada)
- Trocar para um HD de 500GB testado = backup do original + mais vida útil
- HD externo via USB funciona perfeitamente para jogos

**PS3:**

- Similar ao PS4, aceita upgrade do HD interno
- Compatível com HD 2.5" SATA
- Mais espaço = mais jogos digitais da PSN Store

### 3. Câmeras de Segurança (DVR/NVR)

**Sistemas DVR (Digital Video Recorder):**

- Usam HDs internos (3.5" SATA) para gravar continuamente
- Capacidade de gravação com 500GB:
  - 4 câmeras SD: ~15 dias
  - 2 câmeras HD: ~7 dias
  - 1 câmera Full HD: ~5 dias

**Por que é relevante:**

- Donos de comércios em Feira de Santana precisam de vigilância
- HD de reposição para DVR é muito procurado
- WD Blue é perfeitamente compatível com a maioria dos DVRs
- Preço acessível torna o sistema viável para pequenos negócios

### 4. NAS — Servidor de Arquivos Pessoal

**O que é um NAS:**
Um NAS (Network Attached Storage) é basicamente um mini-servidor que fica na sua rede local:

- Compartilha arquivos entre todos os dispositivos da casa/empresa
- Backup automático de celulares, notebooks e PCs
- Pode funcionar como seu "Google Drive" pessoal e privado
- Softwares gratuitos: OpenMediaVault, TrueNAS, Synology

**Com HDs testados pela DeiviTech:**

- Garantia de que o disco é saudável e confiável
- Relatório técnico incluído — sabe exatamente as horas de uso
- Múltiplos HDs podem ser combinados em RAID

### 5. Empresas — Backup Corporativo

**Para pequenas empresas e MEIs:**

- HD externo é a forma mais simples e barata de backup
- Documentos fiscais, notas, planilhas e dados de clientes
- Dados ficam offline = impossível de ser hackeado remotamente
- Conforme LGPD, dados de clientes devem ser protegidos
- Um HD de R$ 50 + case R$ 50 = R$ 100 por solução de backup completa

### 6. Sistemas Operacionais Portáteis

**Linux To Go / Windows To Go:**

- Instale um sistema operacional completo no HD externo
- Plugue em qualquer PC e inicie o seu ambiente
- Perfeito para:
  - Técnicos que precisam de ferramentas em qualquer lugar
  - Estudantes que usam PCs da escola/biblioteca
  - Profissionais de TI em atendimento domiciliar
  - Ambiente seguro em PCs públicos

---

## Dados Reais do HD WD Blue Testado

**Modelo:** WDC WD5000BPVT-08HXZT3
**Serial:** WD-WXU1CA1L1134
**Fabricante:** Western Digital
**Família:** Scorpio Blue Serial ATA (AF)
**Firmware:** 03.01A03
**Capacidade:** 500,107,862,016 bytes (500 GB)
**Setores:** 512 bytes lógicos, 4096 bytes físicos
**Rotação:** 5400 RPM
**Interface:** SATA 2.6, 3.0 Gb/s

### Resultados dos Testes

| Teste | Resultado | Status |
|-------|-----------|--------|
| SMART Overall | PASSED | ✅ |
| Setores Realocados | 0 | ✅ Perfeito |
| Setores Pendentes | 0 | ✅ Perfeito |
| Horas de Uso | 1.038h (~43 dias) | ✅ Baixíssimo |
| Temperatura | 33°C | ✅ Fria |
| Velocidade Leitura (cached) | 81.72 MB/s | ✅ Excelente |
| Velocidade Buffer | 67.20 MB/s | ✅ Bom |
| Bad Blocks (varredura) | 0 erros | ✅ Perfeito |
| Conexão Detectada | USB (via Case) | ✅ |

**Saúde estimada: 96%**
**Classificação: APROVADO — SAÚDE EXCELENTE**

---

## Metodologia de Testes

### Ferramentas Utilizadas (todas Linux)

1. **smartctl** (smartmontools) — Leitura de dados SMART
2. **hdparm** — Teste de velocidade de leitura
3. **badblocks** — Varredura de superfície não destrutiva
4. **lsblk / fdisk** — Detecção de partições e metadados

### Processo

1. Conectar o disco ao sistema de teste (Arch Linux, kernel 6.18+)
2. Executar `smartctl -a /dev/sdX` → coleta todos os atributos SMART
3. Executar `hdparm -Tt /dev/sdX` → leitura cached + buffered
4. Executar `badblocks -sv /dev/sdX` → varredura de superfície (read-only)
5. IA analisa todos os dados → gera relatório HTML com classificação

### Classificação de Saúde

- **90-100%**: EXCELENTE — Pode ser vendido com confiança total
- **75-89%**: BOM — Funcional, alguns sinais de uso
- **50-74%**: REGULAR — Uso limitado recomendado
- **0-49%**: REPROVADO — Não vendemos
