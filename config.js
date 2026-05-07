/**
 * DeiviTech - Configuração
 * 
 * Para ativar a IA com NVIDIA, insira sua chave API aqui.
 * Obtenha sua chave em: https://ngc.nvidia.com/
 * 
 * Sem a chave, o site funciona com respostas locais inteligentes.
 */

// Chave da API NVIDIA (NIM - NVIDIA Inference Microservices)
const NVIDIA_API_KEY = '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';

// Configurações do site
const SITE_CONFIG = {
  whatsapp: {
    number: '5575981231019',
    defaultMessage: 'Olá DeiviTech! Vim pelo site.'
  },
  
  serviços: {
    formatacao: { min: 50, desc: 'Formatação completa' },
    otimizacao: { min: 25, desc: 'Otimização de sistema' },
    upgrade: { sob_consulta: true, desc: 'Upgrade SSD/RAM/etc' },
    sistemas: { sob_consulta: true, desc: 'Sistemas personalizados' }
  },
  
  localizacao: {
    cidade: 'Feira de Santana',
    estado: 'BA',
    atendimento: 'Domiciliar e remoto'
  },
  
  horarios: {
    funcionamento: 'Seg - Sex: 8h às 18h',
    resposta_whatsapp: 'Geralmente dentro de algumas horas'
  }
};

// Disponibiliza globalmente
window.SITE_CONFIG = SITE_CONFIG;
window.NVIDIA_API_KEY = NVIDIA_API_KEY;