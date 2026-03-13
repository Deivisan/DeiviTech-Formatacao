# 🔧 Metodologia DeiviTech - Otimização Máxima de HDs

## 🎯 Objetivo
Extrair MÁXIMA performance de discos rígidos mecânicos para venda profissional.

---

## 1️⃣ Detecção e Identificação

### Comandos Essenciais:
```bash
# Listar dispositivos de armazenamento
lsblk -o NAME,SIZE,TYPE,MODEL,FSTYPE,LABEL

# Verificar dispositivos USB/SATA
sudo fdisk -l | grep -E "Disk /dev/"

# Identificar modelo e serial
sudo smartctl -i /dev/sdX
```

### Dados a Capturar:
- ✅ Modelo completo (ex: WDC WD5000BPVT-08HXZT3)
- ✅ Número de série
- ✅ Capacidade real
- ✅ Interface (SATA II/III, USB)
- ✅ RPM (5400 ou 7200)

---

## 2️⃣ Análise SMART Completa

### Comando Principal:
```bash
sudo smartctl -a /dev/sdX
```

### Métricas Críticas:
| Atributo | Ideal | Atenção | Crítico |
|----------|-------|---------|---------|
| Health | PASSED | - | FAILED |
| Reallocated Sectors | 0 | 1-10 | >10 |
| Pending Sectors | 0 | 1-5 | >5 |
| Temperature | <40°C | 40-50°C | >50°C |
| Power-On Hours | <10.000h | 10.000-30.000h | >30.000h |
| Start/Stop Count | <10.000 | 10.000-30.000 | >30.000 |
| Spin Retry | 0 | 1-10 | >10 |
| CRC Error | 0 | 1-5 | >5 |

### Atributos SMART Prioritários:
```
1.   Raw_Read_Error_Rate    → Deve ser 0
5.   Reallocated_Sector_Ct  → Deve ser 0 (CRÍTICO)
9.   Power_On_Hours         → Horas de uso
10.  Spin_Retry_Count       → Falhas ao iniciar
12. Power_Cycle_Count       → Ciclos liga/desliga
194. Temperature_Celsius     → Temperatura atual
197. Current_Pending_Sector  → Setores pendentes (CRÍTICO)
198. Offline_Uncorrectable   → Setores irrecuperáveis (CRÍTICO)
199. UDMA_CRC_Error_Count   → Erros de transmissão
```

---

## 3️⃣ Testes de Performance

### 3.1 Velocidade de Leitura (hdparm):
```bash
sudo hdparm -Tt /dev/sdX
```
**Benchmarks esperados:**
| Tipo HD | Leita Cache | Leitura Direta |
|---------|-------------|----------------|
| 5400 RPM | ~18.000 MB/s | 70-90 MB/s |
| 7200 RPM | ~20.000 MB/s | 100-120 MB/s |
| SSD SATA | ~25.000 MB/s | 500+ MB/s |

### 3.2 Teste de Velocidade com dd (Manual):
```bash
# Leitura
sudo dd if=/dev/sdX of=/dev/null bs=1M count=512 status=progress

# Escrita (CUIDADO - apaga dados!)
sudo dd if=/dev/zero of=/dev/sdX1 bs=1M count=512 status=progress conv=fsync
```

### 3.3 Teste de Velocidade com fio (Avançado):
```bash
# Instalação
sudo pacman -S fio

# Teste de leitura
sudo fio --name=readtest --filename=/dev/sdX --readonly --bs=1M --iodepth=1 --runtime=30 --time_based --readonly

# Teste de escrita
sudo fio --name=writetest --filename=/tmp/testfile --bs=1M --iodepth=1 --size=1G --runtime=30 --time_based --direct=1 --fsync=1
```

---

## 4️⃣ Teste de Setores Ruins

### 4.1 Leitura Superficial (Rápido - 5 min):
```bash
sudo badblocks -sv /dev/sdX
```

### 4.2 Leitura/Escrita (Completo - 2-4 horas):
```bash
# CUIDADO! Apaga todos os dados
sudo badblocks -wsv /dev/sdX
```

### 4.3 Teste Não Destrutivo (Smartctl):
```bash
sudo smartctl -t long /dev/sdX
# Aguardar completion (pode levar horas)
sudo smartctl -l selftest /dev/sdX
```

---

## 5️⃣ Formatação Otimizada para Máxima Velocidade

### 5.1 Limpar Assinaturas Anteriores:
```bash
sudo wipefs -a /dev/sdX
```

### 5.2 Criar Tabela de Partição GPT:
```bash
sudo parted /dev/sdX --script mklabel gpt
```

### 5.3 Criar Partição Otimizada:
```bash
# Alinhamento automático (1MB = 2048 setores de 512 bytes)
sudo parted /dev/sdX --script mkpart primary ntfs 1MiB 100%
```

### 5.4 Formatar em NTFS com Otimizações:
```bash
# Cluster de 4096 bytes (otimizado para HD mecânico)
# Quick Format (dados já testados)
sudo mkfs.ntfs -f -c 4096 -L "DeiviTech-HD" /dev/sdX1

# Opções:
# -f    = Quick format (mais rápido)
# -c    = Cluster size em bytes
# -L    = Label do volume
# -Q    = Quick format (sem zeros)
```

### Parâmetros de Cluster Size:
| Uso | Cluster |justified |
|-----|---------|----------|
| Backup (arquivos grandes) | 64KB | Menos fragmentação |
| Uso geral | 4KB | Padrão ideal |
| Muitos arquivos pequenos | 4KB | Melhor gestão |

---

## 6️⃣ Protocolo de Teste Completo

### Sequência Recomendada:

```
1. DETECTAR
   └─ lsblk, sudo fdisk -l

2. IDENTIFICAR
   └─ smartctl -i /dev/sdX (modelo, serial, capacidade)

3. ANALISAR SMART
   └─ smartctl -a /dev/sdX (saúde completa)

4. TESTAR VELOCIDADE
   └─ hdparm -Tt /dev/sdX (leitura)
   └─ dd (escrita - se desejado)

5. VERIFICAR SETORES
   └─ badblocks -sv /dev/sdX (leitura)

6. FORMATAR
   └─ wipefs → parted → mkfs.ntfs

7. GERAR RELATÓRIO
   └─ Criar HTML com todos os dados
```

---

## 7️⃣ Critérios de Aprovação para Venda

### ✅ APROVADO (Vender)
- SMART Health: PASSED
- Reallocated Sectors: 0
- Pending Sectors: 0
- Temperature: <40°C
- Erros de Leitura: 0
- Velocidade: Dentro do esperado para o modelo
- Setores Ruins: 0

### ⚠️ ATENÇÃO (Negociar Preço)
- SMART Health: PASSED
- Reallocated Sectors: 1-5
- Pending Sectors: 1-3
- Temperature: 40-45°C
- Velocidade: Abaixo do esperado (-10%)

### ❌ REPROVADO (Não Vender)
- SMART Health: FAILED
- Reallocated Sectors: >10
- Pending Sectors: >5
- Temperature: >50°C
- Erros CRC: >0
- Setores Ruins: >0

---

## 8️⃣ Relatório para Cliente

### Dados Obrigatórios no Relatório:
- Modelo completo do HD
- Número de série
- Capacidade (original e utilizável)
- Status SMART geral
- Horas de uso estimadas
- Resultados de velocidade
- Status de setores ruins
- Temperatura operacional
- Sistema de arquivos atual

### Recomendação de Uso:
- Backup pessoal
- Armazenamento de mídia
- Disco externo
- NÃO indicado para: SO, Gaming, Apps pesados

---

## 9️⃣ Configurações de Performance do Sistema (Opcional)

### Para melhorar performance do HD no Linux:
```bash
# Agendador de I/O (elevator)
echo "noop" | sudo tee /sys/block/sdX/queue/scheduler
# ou "deadline" para mais performance

# Tamanho de read-ahead
sudo blockdev --setra 4096 /dev/sdX

# Desabilitar journaling (NTFS já tem)
# Para ext4:
# tune2fs -O ^has_journal /dev/sdX
```

---

## 📋 Checklist Pré-Venda

- [ ] HD identificado corretamente
- [ ] SMART verificado (PASSED)
- [ ] Teste de velocidade executado
- [ ] Setores ruins verificados
- [ ] HD formatado em NTFS
- [ ] Label definido
- [ ] Relatório HTML gerado
- [ ] Fotos do HD tiradas
- [ ] WhatsApp do cliente confirmado
- [ ] Forma de entrega combinada
- [ ] Garantia explicada

---

**🦞 Powered by DevSan AGI • DeiviTech Formatação**
