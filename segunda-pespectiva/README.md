# DeiviTech SaaS - Versão 2.0

Nova versão do DeiviTech construída com **Next.js 16**, oferecendo experiências separadas para clientes B2C (pessoa física) e B2B (empresas).

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização utilitária
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📁 Estrutura

```
app/
├── b2c/              # Loja para clientes pessoa física
│   ├── page.tsx      # Página principal B2C
│   ├── produtos/     # Redirect para main
│   └── servicos/     # Redirect para main
├── b2b/              # Área empresarial
│   ├── page.tsx      # Página principal B2B
│   ├── planos/       # Redirect para main
│   └── produtos/     # Redirect para main
├── layout.tsx        # Layout raiz
├── page.tsx          # Página de seleção B2C/B2B
└── globals.css       # Estilos globais
```

## 🛒 Fluxo de Compra

1. Usuário navega entre produtos/serviços
2. Adiciona itens ao carrinho (persistência no localStorage)
3. Ao finalizar, é redirecionado para o WhatsApp
4. Você recebe o pedido completo formatado

## 🚀 Deploy GitHub Pages

```bash
cd segunda-pespectiva
bun install
bun run build
```

O build gera a pasta `dist/` pronta para deploy estático.

## 💡 Funcionalidades

### B2C (Clientes)
- Tabs: Peças, Serviços, Combos
- Carrinho com persistência
- Produtos com badges e destaques
- Design moderno com glassmorphism

### B2B (Empresas)
- Planos corporativos (Startup, Business, Enterprise)
- Formulário de orçamento personalizado
- SLA garantido
- Descontos em quantidade

### Carrinho Inteligente
- localStorage para persistência
- Atualização de quantidades
- Cálculo automático
- Mensagem WhatsApp pré-formatada

## 📞 Contato

WhatsApp: (75) 98123-1019
