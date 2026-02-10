export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal?: number;
  categoria: 'storage' | 'ram' | 'servico' | 'combo';
  tipo?: 'ssd' | 'hd' | 'ddr3' | 'ddr4' | 'ddr5';
  capacidade?: string;
  compatibilidade?: string[];
  destaque?: boolean;
  badge?: string;
  imagem: string;
  especificacoes?: Record<string, string>;
  garantia?: string;
  estoque: number;
}

export interface Servico {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  duracao: string;
  categoria: 'formatacao' | 'hardware' | 'consultoria' | 'manutencao';
  icon: string;
  benefícios: string[];
  garantia?: string;
}

export interface PlanoB2B {
  id: string;
  nome: string;
  descricao: string;
  precoMensal: number;
  precoAnual: number;
  descontoAnual: number;
  limiteChamados: number;
  tempoResposta: string;
  features: string[];
  exclusivo?: string[];
  popular?: boolean;
}

export interface ItemCarrinho {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  tipo: 'produto' | 'servico';
  imagem?: string;
}

export interface Empresa {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  responsavel: string;
  cargo: string;
  tamanho: 'pequena' | 'media' | 'grande';
  segmento: string;
  quantidadeEquipamentos: number;
}
