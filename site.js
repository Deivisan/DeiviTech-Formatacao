/**
 * DeiviTech - Site JavaScript
 * Técnico & Analista de Sistemas
 */

// ============================================
// Inicialização
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initCounters();
  initFAQ();
  initScrollSpy();
  initFooter();
});

// ============================================
// Animações de Reveal ao Scroll
// ============================================
function initAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  reveals.forEach(el => observer.observe(el));
}

// ============================================
// Contadores Animados
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = target + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ============================================
// FAQ Accordion
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question?.addEventListener('click', () => {
      // Fecha outros
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
      
      // Toggle atual
      item.classList.toggle('active');
    });
  });
}

// ============================================
// Scroll Spy para Nav
// ============================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// ============================================
// Footer Dinâmico
// ============================================
function initFooter() {
  // Ano atual
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  
  // Timestamp
  const timestampEl = document.getElementById('timestamp');
  if (timestampEl) {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    timestampEl.textContent = `${pad(now.getDate())}/${pad(now.getMonth()+1)}/${now.getFullYear()} às ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }
}

// ============================================
// Chat IA - Assistente DeiviTech
// ============================================
class DeiviTechAI {
  constructor() {
    this.chatWindow = document.getElementById('chatWindow');
    this.chatInput = document.getElementById('chatInput');
    this.chatSubmit = document.getElementById('chatSubmit');
    
    if (this.chatWindow) {
      this.init();
    }
  }
  
  init() {
    this.chatSubmit?.addEventListener('click', () => this.sendMessage());
    this.chatInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
  }
  
  addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `message ${type}`;
    msg.textContent = text;
    this.chatWindow.appendChild(msg);
    this.chatWindow.scrollTop = this.chatWindow.scrollHeight;
  }
  
  async sendMessage() {
    const text = this.chatInput.value.trim();
    if (!text) return;
    
    this.addMessage(text, 'user');
    this.chatInput.value = '';
    
    // Loading
    this.addMessage('Pensando... 🤔', 'assistant');
    
    // Resposta da IA
    try {
      const response = await this.getAIResponse(text);
      const lastMsg = this.chatWindow.querySelector('.message.assistant:last-child');
      if (lastMsg) {
        lastMsg.textContent = response;
      }
    } catch (error) {
      const lastMsg = this.chatWindow.querySelector('.message.assistant:last-child');
      if (lastMsg) {
        lastMsg.textContent = 'Desculpe, tive um problema. Tente novamente ou mande uma mensagem direta no WhatsApp.';
      }
    }
  }
  
  async getAIResponse(input) {
    // Tenta usar API NVIDIA se configurada
    if (window.NVIDIA_API_KEY && !window.NVIDIA_API_KEY.includes('sua-chave')) {
      try {
        return await this.callNVIDIA(input);
      } catch (e) {
        console.log('NVIDIA API error, falling back to local:', e);
      }
    }
    
    // Fallback: respostas locais inteligentes
    return this.getLocalResponse(input);
  }
  
  async callNVIDIA(prompt) {
    const response = await fetch('https://api.nvidia.com/v1/llm/llama-3.1b/infer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${window.NVIDIA_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.1b',
        prompt: `Você é o DeiviTech, assistente de tecnologia. Responda em português de forma direta e útil.\n\nUsuário: ${prompt}\n\nDeiviTech:`,
        max_tokens: 300,
        temperature: 0.7
      })
    });
    
    if (!response.ok) throw new Error('API Error');
    const data = await response.json();
    return data.text || data.result || 'Resposta recebida.';
  }
  
  getLocalResponse(input) {
    const lower = input.toLowerCase();
    
    // Detecta intenção
    if (lower.includes('lent') || lower.includes('devagar') || lower.includes('lento')) {
      return 'Lentidão no PC geralmente é causada por: HD cheio, poucos GB livres, vírus, muitos programas na inicialização, pouca RAM ou memória virtual mal configurada. Posso fazer uma formatação limpa ou otimização completa. Quer que eu te ajude?';
    }
    
    if (lower.includes('tela azul') || lower.includes('bsod') || lower.includes('erro')) {
      return 'Tela azul pode ser problema de hardware (memória RAM, HD) ou drivers desatualizados/corrompidos. Posso rodar diagnósticos para identificar a causa exata. Me mande mais detalhes do erro.';
    }
    
    if (lower.includes('não liga') || lower.includes('desliga') || lower.includes('deslig')) {
      return 'PC que não liga ou desliga sozinho pode ter problema na fonte, placa-mãe, superaquecimento ou RAM mal encaixada. Vou precisar ver o equipamento para fazer diagnóstico preciso.';
    }
    
    if (lower.includes('vírus') || lower.includes('malware') || lower.includes('travando') || lower.includes('trav') || lower.includes('malware')) {
      return 'Vírus e malwares causam lentidão e travamentos. Posso fazer uma limpeza profunda com ferramentas profissionais e formatar se necessário. Seus dados ficam protegidos com backup primeiro.';
    }
    
    if (lower.includes('upgrade') || lower.includes('sdd') || lower.includes('ram') || lower.includes('memória') || lower.includes('memoria') || lower.includes('placa')) {
      return 'Upgrade é a melhor forma de dar vida nova ao PC! Posso instalar SSD NVMe para boot em segundos, expandir RAM para multitarefa, ou colocar placa de vídeo melhor. Me diz seu orçamento e uso atual.';
    }
    
    if (lower.includes('formata') || lower.includes('windows') || lower.includes('reinst')) {
      return 'Formatação limpa resolve maioria dos problemas de lentidão e travamento. Faço com backup dos seus dados primeiro, instalação completa do Windows e todos os drivers. Geralmente leva 2-3 horas.';
    }
    
    if (lower.includes('preço') || lower.includes('quanto') || lower.includes('custo') || lower.includes('valor')) {
      return 'Meus serviços começam em R$ 25 (otimização) e R$ 50 (formatação). Upgrade de hardware é por peça + mão de obra. Quer um orçamento específico? Me descreva o problema.';
    }
    
    if (lower.includes('whatsapp') || lower.includes('contato') || lower.includes('falar') || lower.includes('agendar')) {
      return 'Pode me chamar no WhatsApp! (75) 98123-1019. É mais rápido para agendar e tirar dúvidas. Geralmente respondo em minutos durante o horário comercial.';
    }
    
    if (lower.includes('notebook') || lower.includes('laptop')) {
      return 'Trabalho com notebooks também! Faço limpeza interna, troca de pasta térmica, upgrade de SSD/RAM, formatação e resolução de problemas específicos de notebooks.';
    }
    
    if (lower.includes('celular') || lower.includes('smartphone') || lower.includes('android') || lower.includes('iphone')) {
      return 'Celulares também! Faço manutenção básica (tela, bateria, conector), otimização Android e até apps personalizados. Quer saber mais?';
    }
    
    // Resposta genérica
    return 'Entendi sua dúvida! Para te ajudar melhor, me conta: qual é o modelo do seu PC ou notebook? E há quanto tempo está com esse problema? Assim posso dar uma orientação mais precisa.';
  }
}

// Inicializa chat se existir
if (document.getElementById('chatWindow')) {
  new DeiviTechAI();
}

// ============================================
// Utilitários
// ============================================

// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Log para debug
console.log('DeiviTech - Site carregado com sucesso!');