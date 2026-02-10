import { Produto, Servico, PlanoB2B } from '@/types';

export const produtos: Produto[] = [
  // SSDs
  {
    id: 'ssd-240',
    nome: 'SSD 240GB SATA III',
    descricao: '5x mais rápido que HD tradicional. Boot em segundos, abertura instantânea de programas.',
    preco: 120,
    categoria: 'storage',
    tipo: 'ssd',
    capacidade: '240GB',
    destaque: true,
    badge: 'MAIS VENDIDO',
    imagem: '/images/ssd-240.png',
    especificacoes: {
      'Interface': 'SATA III 6Gb/s',
      'Velocidade Leitura': '550 MB/s',
      'Velocidade Escrita': '500 MB/s',
      'NAND': 'TLC 3D',
      'TBW': '150TB'
    },
    garantia: '2 anos',
    estoque: 50
  },
  {
    id: 'ssd-480',
    nome: 'SSD 480GB SATA III',
    descricao: 'Máxima velocidade com espaço generoso. Ideal para sistema + programas + jogos.',
    preco: 180,
    categoria: 'storage',
    tipo: 'ssd',
    capacidade: '480GB',
    imagem: '/images/ssd-480.png',
    especificacoes: {
      'Interface': 'SATA III 6Gb/s',
      'Velocidade Leitura': '560 MB/s',
      'Velocidade Escrita': '520 MB/s',
      'NAND': 'TLC 3D',
      'TBW': '300TB'
    },
    garantia: '3 anos',
    estoque: 30
  },
  {
    id: 'ssd-1tb',
    nome: 'SSD 1TB SATA III',
    descricao: 'Capacidade total com velocidade SSD. Armazene tudo sem preocupações.',
    preco: 320,
    categoria: 'storage',
    tipo: 'ssd',
    capacidade: '1TB',
    destaque: true,
    badge: 'TOP PERFORMANCE',
    imagem: '/images/ssd-1tb.png',
    especificacoes: {
      'Interface': 'SATA III 6Gb/s',
      'Velocidade Leitura': '560 MB/s',
      'Velocidade Escrita': '520 MB/s',
      'NAND': 'TLC 3D',
      'TBW': '600TB'
    },
    garantia: '3 anos',
    estoque: 20
  },
  // HDs
  {
    id: 'hd-500',
    nome: 'HD 500GB 7200RPM',
    descricao: 'Armazenamento confiável para arquivos e backup. Excelente custo-benefício.',
    preco: 60,
    categoria: 'storage',
    tipo: 'hd',
    capacidade: '500GB',
    imagem: '/images/hd-500.png',
    especificacoes: {
      'Interface': 'SATA III',
      'Rotação': '7200 RPM',
      'Cache': '32MB',
      'Taxa Transferência': '150 MB/s'
    },
    garantia: '1 ano',
    estoque: 25
  },
  {
    id: 'hd-1tb',
    nome: 'HD 1TB 7200RPM',
    descricao: 'Dobro do espaço para seus arquivos. Perfeito como drive secundário.',
    preco: 80,
    categoria: 'storage',
    tipo: 'hd',
    capacidade: '1TB',
    imagem: '/images/hd-1tb.png',
    especificacoes: {
      'Interface': 'SATA III',
      'Rotação': '7200 RPM',
      'Cache': '64MB',
      'Taxa Transferência': '180 MB/s'
    },
    garantia: '1 ano',
    estoque: 20
  },
  // RAMs Desktop
  {
    id: 'ram-ddr3-8gb',
    nome: 'Memória DDR3 8GB 1600MHz',
    descricao: 'Upgrade para PCs mais antigos. Compatível com sistemas 2009-2016.',
    preco: 60,
    categoria: 'ram',
    tipo: 'ddr3',
    capacidade: '8GB',
    compatibilidade: ['Desktop DDR3'],
    imagem: '/images/ram-ddr3.png',
    especificacoes: {
      'Tipo': 'DDR3',
      'Capacidade': '8GB',
      'Frequência': '1600MHz',
      'Latência': 'CL11',
      'Voltagem': '1.5V'
    },
    garantia: '1 ano',
    estoque: 15
  },
  {
    id: 'ram-ddr4-8gb',
    nome: 'Memória DDR4 8GB 3200MHz',
    descricao: 'O padrão atual para PCs modernos. Excelente performance e estabilidade.',
    preco: 90,
    categoria: 'ram',
    tipo: 'ddr4',
    capacidade: '8GB',
    compatibilidade: ['Desktop DDR4'],
    destaque: true,
    badge: 'MAIS POPULAR',
    imagem: '/images/ram-ddr4.png',
    especificacoes: {
      'Tipo': 'DDR4',
      'Capacidade': '8GB',
      'Frequência': '3200MHz',
      'Latência': 'CL16',
      'Voltagem': '1.35V',
      'XMP': 'Suportado'
    },
    garantia: 'Vitalícia',
    estoque: 40
  },
  {
    id: 'ram-ddr4-16gb-kit',
    nome: 'Kit Memória DDR4 16GB (2x8GB) 3200MHz',
    descricao: 'Dual channel para máxima performance. Ideal para multitarefas e gaming.',
    preco: 165,
    categoria: 'ram',
    tipo: 'ddr4',
    capacidade: '16GB',
    compatibilidade: ['Desktop DDR4'],
    destaque: true,
    badge: 'RECOMENDADO',
    imagem: '/images/ram-ddr4-kit.png',
    especificacoes: {
      'Tipo': 'DDR4',
      'Capacidade': '16GB (2x8GB)',
      'Frequência': '3200MHz',
      'Latência': 'CL16',
      'Voltagem': '1.35V',
      'Dual Channel': 'Otimizado'
    },
    garantia: 'Vitalícia',
    estoque: 35
  },
  {
    id: 'ram-ddr5-16gb-kit',
    nome: 'Kit Memória DDR5 16GB (2x8GB) 5600MHz',
    descricao: 'Última geração de memória. Máximo desempenho para PCs de última geração.',
    preco: 250,
    categoria: 'ram',
    tipo: 'ddr5',
    capacidade: '16GB',
    compatibilidade: ['Desktop DDR5 (Intel 12th+/AMD AM5)'],
    badge: 'PREMIUM',
    imagem: '/images/ram-ddr5.png',
    especificacoes: {
      'Tipo': 'DDR5',
      'Capacidade': '16GB (2x8GB)',
      'Frequência': '5600MHz',
      'Latência': 'CL36',
      'Voltagem': '1.25V',
      'On-die ECC': 'Sim'
    },
    garantia: 'Vitalícia',
    estoque: 10
  }
  // COMBOS REMOVIDOS conforme solicitado
];

export const servicos: Servico[] = [
  {
    id: 'formatacao-win10',
    nome: 'Formatação Windows 10',
    descricao: 'Instalação completa do Windows 10 Pro com todos os drivers e programas essenciais. Sistema ativado e otimizado.',
    preco: 50,
    duracao: '2-3 horas',
    categoria: 'formatacao',
    icon: 'Monitor',
    benefícios: [
      'Windows 10 Pro ativado',
      'Drivers atualizados',
      'Programas básicos inclusos',
      'Otimização de performance',
      'Garantia de 30 dias'
    ],
    garantia: '30 dias'
  },
  {
    id: 'formatacao-win11',
    nome: 'Formatação Windows 11',
    descricao: 'Instalação do Windows 11 Pro com interface moderna e máxima segurança. Requer hardware compatível.',
    preco: 80,
    duracao: '2-3 horas',
    categoria: 'formatacao',
    icon: 'Monitor',
    benefícios: [
      'Windows 11 Pro ativado',
      'Interface moderna',
      'Máxima segurança (TPM 2.0)',
      'Suporte até 2031',
      'Integração Microsoft 365'
    ],
    garantia: '30 dias'
  },
  {
    id: 'formatacao-ghost',
    nome: 'Formatação Windows Otimizado',
    descricao: 'Windows super otimizado para máxima performance. Remove telemetria e apps desnecessários. Ideal para PCs antigos e gaming.',
    preco: 100,
    duracao: '2-3 horas',
    categoria: 'formatacao',
    icon: 'Zap',
    benefícios: [
      '70% menos uso de RAM',
      'Boot em 15 segundos',
      'Zero telemetria Microsoft',
      '+15% FPS em jogos',
      'Privacidade máxima'
    ],
    garantia: '30 dias'
  },
  {
    id: 'formatacao-linux',
    nome: 'Formatação Linux Ubuntu',
    descricao: 'Sistema 100% gratuito, seguro e rápido. Perfeito para estudos, programação e ressurreição de PCs antigos.',
    preco: 50,
    duracao: '1-2 horas',
    categoria: 'formatacao',
    icon: 'Terminal',
    benefícios: [
      'Sistema gratuito para sempre',
      'Imune a vírus',
      'Perfeito para programação',
      'Office completo gratuito',
      'Ressuscita PCs antigos'
    ],
    garantia: '30 dias'
  },
  {
    id: 'instalacao-hardware',
    nome: 'Instalação de Hardware',
    descricao: 'Montagem e instalação profissional de componentes. Teste completo de funcionamento.',
    preco: 30,
    duracao: '30-60 min',
    categoria: 'hardware',
    icon: 'Cpu',
    benefícios: [
      'Abertura do gabinete',
      'Instalação profissional',
      'Teste de funcionamento',
      'Limpeza interna',
      'Organização de cabos'
    ],
    garantia: '30 dias'
  },
  {
    id: 'upgrade-completo',
    nome: 'Upgrade Completo + Diagnóstico',
    descricao: 'Avaliação completa do seu PC + instalação de upgrades. Recomendações personalizadas.',
    preco: 55,
    duracao: '1-2 horas',
    categoria: 'hardware',
    icon: 'Settings',
    benefícios: [
      'Diagnóstico completo',
      'Recomendações de upgrade',
      'Instalação inclusa',
      'Otimização de BIOS',
      'Relatório detalhado'
    ],
    garantia: '30 dias'
  },
  {
    id: 'manutencao-preventiva',
    nome: 'Manutenção Preventiva',
    descricao: 'Limpeza completa, troca de pasta térmica e verificação de saúde do sistema.',
    preco: 60,
    duracao: '1-2 horas',
    categoria: 'manutencao',
    icon: 'Wrench',
    benefícios: [
      'Limpeza completa interna',
      'Troca pasta térmica CPU/GPU',
      'Verificação temperaturas',
      'Teste de estabilidade',
      'Relatório de saúde'
    ],
    garantia: '90 dias'
  }
];

export const planosB2B: PlanoB2B[] = [
  {
    id: 'startup',
    nome: 'Startup',
    descricao: 'Ideal para pequenas empresas e escritórios',
    precoMensal: 299,
    precoAnual: 2990,
    descontoAnual: 17,
    limiteChamados: 5,
    tempoResposta: '24 horas',
    features: [
      '5 chamados técnicos/mês',
      'Suporte remoto ilimitado',
      'Manutenção preventiva trimestral',
      'Backup automatizado',
      'Monitoramento de rede',
      'Desconto 10% em peças'
    ]
  },
  {
    id: 'business',
    nome: 'Business',
    descricao: 'Para empresas em crescimento com demandas maiores',
    precoMensal: 599,
    precoAnual: 5990,
    descontoAnual: 17,
    limiteChamados: 12,
    tempoResposta: '8 horas',
    features: [
      '12 chamados técnicos/mês',
      'Suporte remoto prioritário',
      'Manutenção preventiva mensal',
      'Backup automatizado + nuvem',
      'Monitoramento 24/7',
      'Consultoria trimestral',
      'Desconto 15% em peças'
    ],
    exclusivo: [
      'Gestão de ativos de TI',
      'Relatórios mensais de performance'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    nome: 'Enterprise',
    descricao: 'Solução completa para empresas de médio e grande porte',
    precoMensal: 1299,
    precoAnual: 12990,
    descontoAnual: 17,
    limiteChamados: 999,
    tempoResposta: '4 horas',
    features: [
      'Chamados ilimitados',
      'Suporte 24/7 com SLA',
      'Manutenção preventiva semanal',
      'Backup enterprise + DR',
      'Monitoramento proativo',
      'Consultoria mensal',
      'Desconto 20% em peças',
      'Técnico dedicado'
    ],
    exclusivo: [
      'Infraestrutura cloud híbrida',
      'Segurança avançada (EDR)',
      'Gestão completa de TI',
      'Relatórios executivos'
    ]
  }
];
