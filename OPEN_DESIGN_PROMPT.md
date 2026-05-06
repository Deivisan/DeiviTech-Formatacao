# Prompt para Open Design

Você vai recriar totalmente o MVP do site DeiviTech como artefato novo em HTML/CSS/JS. O Open Design deve produzir um único site estático completo, sem usar os HTML existentes do repositório.

## Contexto do projeto
- O designer não terá acesso aos HTML atuais do projeto; trate como criação de artefato novo.
- O site deve ser estático, leve, rápido e pronto para uso direto como HTML.
- Marca: DeiviTech, atendimento domiciliar em Feira de Santana, BA.
- Contato principal por WhatsApp: +55 75 98123-1019.
- Oferta: formatação inteligente de PCs, upgrades de hardware, otimização de sistemas operacionais, diagnóstico técnico, assistência para gamers e pequenas empresas.
- Valores: expertise técnica, performance real, entrega rápida e confiança local.
- Use o skill `web-prototype` ou `saas-landing` do Open Design, com direção visual `Tech Utility` / `Modern Minimal`.

## Objetivo
Crie um MVP estático e moderno, orientado a conversão por WhatsApp, com autoridade técnica e experiência clara. Deve ser um site único, fluido e focado em lead generation.

## Requisitos principais
1. Artefato final em HTML estático com CSS e JS.
2. Homepage única, responsiva, com navegação por âncoras.
3. Hero forte, orientado a resultado, por exemplo:
   - “PC lento não é normal.”
   - “Ganhe performance real com a DeiviTech.”
4. CTA principal para WhatsApp e CTA secundário para Assistente IA / Diagnóstico.
5. Seções obrigatórias:
   - hero
   - serviços oferecidos
   - diferencial DeiviTech
   - como funciona em 3 passos
   - vantagens técnicas e provas de confiança
   - empresas / formatação em massa / automação corporativa
   - módulo de IA / assistente de chat
   - FAQ curto e direto
   - contato e agendamento
6. Não entregue o site como e-commerce. Não transformar em catálogo de preços, carrinho ou loja.
7. Inclua widget de chat IA no cliente, consumindo um endpoint NVIDIA com Llama 3.1b.
8. A chave NVIDIA será inserida no código pelo usuário; forneça `config.js` ou equivalente com `NVIDIA_API_KEY = 'COLOQUE_SUA_CHAVE_AQUI'`.
9. Use HTML semântico e CSS moderno, mantendo o código enxuto e leve.
10. Evite complexidade desnecessária; otimize para um MVP claro e eficaz.

## Design e tom
- Paleta escura com ciano, púrpura e verde como destaques.
- Visual técnico, futurista e profissional.
- Tipografia limpa, legível e com hierarquia forte.
- Use gradientes suaves, cards, seções espaçadas e contrastes precisos.
- Linguagem técnica, direta e orientada a resultado.
- Evite exageros de marketing. Valorize competência, clareza e confiança.

## Módulo de IA
- Inclua um bloco ou cartão “Assistente DeiviTech” / “Chat de Diagnóstico”.
- A IA deve sugerir diagnóstico, otimização e próximos passos.
- Implemente como widget JS cliente que consome endpoint de inferência NVIDIA.
- Permita configuração via `NVIDIA_API_KEY` em `config.js` ou arquivo similar.
- Exiba disclaimer claro: a IA oferece sugestões; o atendimento final é humano.
- O código do chat deve ser cliente-only, com uma fetch stub para endpoint externo.

## O que deve existir no site
- Hero com headline, suporte rápido e CTA WhatsApp.
- Serviços: formatação inteligente, upgrade SSD/RAM, otimização de sistemas, diagnóstico por IA, atendimento domiciliar e corporativo.
- Diferenciais: 30 dias de garantia, 10+ anos de experiência, atendimento em Feira de Santana, entrega rápida, expertise técnica.
- Processo em 3 passos: diagnóstico, solução e entrega.
- Seção corporativa: formatação em massa, padronização de laboratórios, atualização de PCs empresariais, automação e escala.
- Seção de IA: assistente de chat, análise inteligente e recomendações.
- FAQ curto sobre formatação, hardware, sistemas e agendamento.
- Contato: WhatsApp, localização e horário de atendimento.
- Botão flutuante de WhatsApp e navegação sticky.

## Output esperado
- Artefato final em `index.html` (ou equivalente) com CSS e JS necessários.
- Estrutura clara em arquivos HTML/CSS/JS.
- Site focalizado em conversão de leads.
- Instruções diretas de onde definir `NVIDIA_API_KEY`.

## Observações
- O site será servido como HTML estático.
- Não mencione GitHub Pages ou limitações de deploy.
- Otimize para criar o MVP mais eficaz possível com o mínimo de complexidade.
- Use o Open Design web workflow: `web-prototype` / `saas-landing` skill + `Tech Utility` / `Modern Minimal` visual direction.

