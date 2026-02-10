import { Produto, Servico, PlanoB2B } from '@/types';

// Serviços atualizados com benefícios de IA
export const servicos: Servico[] = [
  {
    id: 'formatacao-win11-ia',
    nome: 'Formatação Windows 11 + IA',
    descricao: 'Windows 11 Pro com otimizações de IA para máxima performance e privacidade.',
    preco: 80,
    duracao: '2-3 horas',
    categoria: 'formatacao',
    icon: 'Brain',
    beneficios: [
      'Windows 11 Pro ativado',
      'Otimização com scripts de IA',
      'Drivers atualizados',
      'Remoção de telemetria Microsoft',
      '30 dias de garantia'
    ],
    garantia: '30 dias'
  },
  {
    id: 'formatacao-win10-ia',
    nome: 'Formatação Windows 10 + IA',
    descricao: 'Windows 10 Pro otimizado com inteligência artificial para menos uso de recursos.',
    preco: 70,
    duracao: '2-3 horas',
    categoria: 'formatacao',
    icon: 'Zap',
    beneficios: [
      'Windows 10 Pro ativado',
      '60% menos uso de RAM',
      'Boot em 15 segundos',
      'Zero bloatware',
      '30 dias de garantia'
    ],
    garantia: '30 dias'
  },
  {
    id: 'formatacao-linux',
    nome: 'Linux Ubuntu',
    descricao: 'Sistema gratuito, seguro e extremamente rápido. Perfeito para estudos e produtividade.',
    preco: 50,
    duracao: '1-2 horas',
    categoria: 'formatacao',
    icon: 'Terminal',
    beneficios: [
      'Sistema gratuito para sempre',
      'Imune a vírus Windows',
      'Perfeito para programação',
      'Office LibreOffice instalado',
      '30 dias de suporte'
    ],
    garantia: '30 dias'
  },
  {
    id: 'formatacao-linux-mint',
    nome: 'Linux Mint Cinnamon',
    descricao: 'Linux com interface familiar para quem vem do Windows. Leve e bonito.',
    preco: 50,
    duracao: '1-2 horas',
    categoria: 'formatacao',
    icon: 'Monitor',
    beneficios: [
      'Interface similar ao Windows',
      'Extremamente leve',
      'Aplicativos pré-configurados',
      'Suporte a programas Windows',
      '30 dias de suporte'
    ],
    garantia: '30 dias'
  },
  {
    id: 'upgrade-ssd',
    nome: 'Instalação de SSD',
    descricao: 'Instalação profissional de SSD NVMe ou SATA com clone do sistema.',
    preco: 60,
    duracao: '1-2 horas',
    categoria: 'hardware',
    icon: 'HardDrive',
    beneficios: [
      'SSD de sua escolha',
      'Clone do sistema atual',
      'Configuração AHCI/NVMe',
      'Teste de velocidade',
      '6 meses de garantia no SSD'
    ],
    garantia: '30 dias'
  },
  {
    id: 'upgrade-ram',
    nome: 'Upgrade de Memória RAM',
    descricao: 'Análise e instalação de memória RAM compatível com seu sistema.',
    preco: 40,
    duracao: '30-60 min',
    categoria: 'hardware',
    icon: 'Cpu',
    beneficios: [
      'Análise de compatibilidade',
      'Instalação profissional',
      'Teste de estabilidade',
      'Configuração XMP/DOCP',
      '30 dias de garantia'
    ],
    garantia: '30 dias'
  },
  {
    id: 'manutencao-preventiva',
    nome: 'Manutenção Preventiva',
    descricao: 'Limpeza completa, troca de pasta térmica e otimização do sistema.',
    preco: 80,
    duracao: '2-3 horas',
    categoria: 'manutencao',
    icon: 'Wrench',
    beneficios: [
      'Limpeza interna completa',
      'Troca de pasta térmica CPU/GPU',
      'Verificação de temperaturas',
      'Otimização de fans',
      'Relatório de saúde do PC'
    ],
    garantia: '90 dias'
  },
  {
    id: 'remocao-virus',
    nome: 'Remoção de Vírus & Malware',
    descricao: 'Limpeza profunda do sistema com ferramentas especializadas.',
    preco: 100,
    duracao: '3-4 horas',
    categoria: 'manutencao',
    icon: 'Shield',
    beneficios: [
      'Scanner profundo',
      'Remoção de malwares',
      'Restauração de arquivos',
      'Proteção instalada',
      '30 dias de garantia'
    ],
    garantia: '30 dias'
  }
];

export const produtos: Produto[] = [
  // SSDs
  {
    id: 'ssd-nvme-500',
    nome: 'SSD NVMe 500GB',
    descricao: 'Velocidade extrema para seu sistema. Boot em segundos.',
    preco: 200,
    categoria: 'storage',
    tipo: 'ssd',
    capacidade: '500GB',
    destaque: true,
    badge: 'MAIS VENDIDO',
    especificacoes: {
      'Interface': 'NVMe PCIe 3.0',
      'Leitura': '3500 MB/s',
      'Escrita': '3000 MB/s',
      'TBW': '300TB'
    },
    garantia: '3 anos',
    estoque: 15
  },
  {
    id: 'ssd-nvme-1tb',
    nome: 'SSD NVMe 1TB',
    descricao: 'Capacidade e velocidade máxima para exigentes.',
    preco: 350,
    categoria: 'storage',
    tipo: 'ssd',
    capacidade: '1TB',
    badge: 'TOP',
    especificacoes: {
      'Interface': 'NVMe PCIe 3.0',
      'Leitura': '3500 MB/s',
      'Escrita': '3000 MB/s',
      'TBW': '600TB'
    },
    garantia: '3 anos',
    estoque: 10
  },
  {
    id: 'ssd-sata-480',
    nome: 'SSD SATA 480GB',
    descricao: 'Upgrade econômico para PCs mais antigos.',
    preco: 140,
    categoria: 'storage',
    tipo: 'ssd',
    capacidade: '480GB',
    especificacoes: {
      'Interface': 'SATA III 6Gb/s',
      'Leitura': '550 MB/s',
      'Escrita': '500 MB/s'
    },
    garantia: '2 anos',
    estoque: 20
  },
  // RAM
  {
    id: 'ram-ddr4-16gb',
    nome: 'Kit DDR4 16GB (2x8GB)',
    descricao: 'Dual channel para performance máxima.',
    preco: 180,
    categoria: 'ram',
    tipo: 'ddr4',
    capacidade: '16GB',
    destaque: true,
    badge: 'POPULAR',
    especificacoes: {
      'Frequência': '3200MHz',
      'Latência': 'CL16',
      'XMP': 'Suportado'
    },
    garantia: 'Vitalícia',
    estoque: 25
  },
  {
    id: 'ram-ddr4-8gb',
    nome: 'Memória DDR4 8GB',
    descricao: 'Upgrade básico para PCs modernos.',
    preco: 95,
    categoria: 'ram',
    tipo: 'ddr4',
    capacidade: '8GB',
    especificacoes: {
      'Frequência': '3200MHz',
      'Latência': 'CL16'
    },
    garantia: 'Vitalícia',
    estoque: 30
  },
  {
    id: 'ram-ddr5-32gb',
    nome: 'Kit DDR5 32GB (2x16GB)',
    descricao: 'Próxima geração para Intel 12th+ e AMD AM5.',
    preco: 450,
    categoria: 'ram',
    tipo: 'ddr5',
    capacidade: '32GB',
    badge: 'PREMIUM',
    especificacoes: {
      'Frequência': '5600MHz',
      'Latência': 'CL36',
      'XMP 3.0': 'Suportado'
    },
    garantia: 'Vitalícia',
    estoque: 8
  },
  // Legacy
  {
    id: 'ram-ddr3-8gb',
    nome: 'Memória DDR3 8GB',
    descricao: 'Para PCs mais antigos (2009-2016).',
    preco: 60,
    categoria: 'ram',
    tipo: 'ddr3',
    capacidade: '8GB',
    especificacoes: {
      'Frequência': '1600MHz',
      'Voltagem': '1.5V'
    },
    garantia: '1 ano',
    estoque: 10
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
      'Backup automatizado local',
      'Monitoramento de rede',
      'Desconto 10% em peças'
    ]
  },
  {
    id: 'business',
    nome: 'Business',
    descricao: 'Para empresas em crescimento',
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
    descricao: 'Solução completa para grandes empresas',
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
