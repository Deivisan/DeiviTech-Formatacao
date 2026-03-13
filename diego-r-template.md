# 📋 Template para Cliente Diego R.

## Mensagem WhatsApp/Telegram

```
🔧 *DeiviTech Formatação*

Olá Diego! 👋

Tenho HDs testados e garantidos disponíveis:

📦 *WD Blue 500GB*
• Saúde SMART: 100%
• Teste de velocidade: ~79 MB/s
• Setores ruins: 0
• Format
• Valor:ado em NTFS R$ 50,00

💡 *O que inclui:*
✅ Teste completo SMART
✅ Teste de velocidade real  
✅ Verificação de setores
✅ Formatação NTFS
✅ Relatório técnico
✅ 30 dias de garantia

Quer que eu faça um teste ao vivo no HD? Assim você vê toda a processo!

Qualquer dúvida, me manda aqui! 🙌

🔧 DeiviTech - Testes Profissionais
📱 (75) 98123-1019
```

---

## 📞 Ligação (se precisar)

```
"E aí Diego, tudo bem? 

É o Deivi, da DeiviTech. 

Tenho os HDs aqui do lado, testados e formatados. 

Se você quiser, posso fazer o teste AO VIVO pelo WhatsApp agora, 
assim você vê a saúde do HD, a velocidade... tudo certinho.

O valor é R$ 50 cada, ou R$ 80 se quiser os dois. 

O que você acha?"
```

---

## 🎬 Para Gravação de Vídeo

### Roteiro Sugerido:

1. **Abertura** (5s)
   - "E aí pessoal, tudo bem? Bora testar esse HD!"

2. **Conexão** (10s)
   - Conectar o HD
   - Mostrar no terminal: `lsblk`

3. **Identificação** (15s)
   - `sudo smartctl -i /dev/sdb`
   - Mostrar modelo, serial, capacidade

4. **Teste SMART** (20s)
   - `sudo smartctl -a /dev/sdb`
   - Explicar os números importantes
   - Mostrar "PASSED"

5. **Velocidade** (15s)
   - `sudo hdparm -Tt /dev/sdb`
   - Explicar os resultados

6. **Resultado** (10s)
   - "HD 100% saudável,zero setores ruins, performance boa!"

7. **Fechamento** (5s)
   - "Interessado? Manda mensagem no WhatsApp!"

---

## 📁 Arquivos Preparados

| Arquivo | Descrição |
|---------|-----------|
| `scripts/realtime-test.sh` | Script de teste em tempo real |
| `scripts/generate-product-page.sh` | Gerador de página de produto |
| `methodology/hd-optimization.md` | Metodologia completa |
| `deivitech-hd-shop/` | Site React (em desenvolvimento) |

---

## 🚀 Próximos Passos

1. Conectar o HD do Diego R.
2. Executar: `./scripts/realtime-test.sh "Diego R." 50`
3. Mostrar testes na tela
4. Gerar página com: `./scripts/generate-product-page.sh "WD-WXF1C2279984" "WD Blue 500GB" "500" "50" "2896" "30" "100" "79"`
5. Enviar link para o cliente

---

**🦞 Powered by DevSan AGI**
