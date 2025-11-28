// Common JavaScript utilities for DeiviTech Formatação

// Header offset adjustment
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelector('nav.fixed, nav.bg-gray-800');
  if(!nav) return;
  
  const setOffset = () => {
    const h = Math.ceil(nav.getBoundingClientRect().height || 0);
    document.documentElement.style.setProperty('--site-nav-height', h + 'px');
    document.body.style.paddingTop = h + 'px';
  };
  setOffset();
  window.addEventListener('resize', setOffset);
  
  // Mobile menu - apenas adiciona toggle, não altera estrutura
  initMobileMenu();
});

// Mobile Menu - Simples toggle
function initMobileMenu() {
  const nav = document.querySelector('nav.fixed, nav.bg-gray-800');
  if (!nav) return;
  
  // Verificar se já existe
  if (document.getElementById('mobileMenuBtn')) return;
  
  const container = nav.querySelector('.container') || nav.querySelector('div');
  if (!container) return;
  
  // Pegar todos os links existentes
  const existingLinks = container.querySelectorAll('a');
  if (existingLinks.length < 2) return;
  
  // Criar botão hamburger (aparece só em mobile via CSS)
  const menuBtn = document.createElement('button');
  menuBtn.id = 'mobileMenuBtn';
  menuBtn.className = 'mobile-menu-btn';
  menuBtn.setAttribute('aria-label', 'Menu');
  menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  
  // Criar wrapper para links com classe específica
  const linksDiv = document.createElement('div');
  linksDiv.id = 'navLinks';
  linksDiv.className = 'nav-links';
  
  // Mover links para o wrapper (não clonar para preservar event listeners)
  existingLinks.forEach(link => {
    linksDiv.appendChild(link);
  });
  
  // Limpar e reconstruir container
  container.innerHTML = '';
  container.className = 'container mx-auto flex items-center justify-between px-4';
  
  // Logo para mobile
  const logo = document.createElement('a');
  logo.href = 'index.html';
  logo.className = 'mobile-logo';
  logo.innerHTML = '<i class="fas fa-microchip mr-2"></i>DeiviTech';
  
  container.appendChild(logo);
  container.appendChild(linksDiv);
  container.appendChild(menuBtn);
  
  // Toggle
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    linksDiv.classList.toggle('active');
    menuBtn.innerHTML = linksDiv.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });
  
  // Fechar ao clicar em link
  linksDiv.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      linksDiv.classList.remove('active');
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
  
  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      linksDiv.classList.remove('active');
      menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Smooth scroll to element
function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Show/hide element with animation
function toggleElement(selector, show = null) {
  const element = document.querySelector(selector);
  if (!element) return;

  const isVisible = element.style.display !== 'none' && element.style.display !== '';
  const shouldShow = show !== null ? show : !isVisible;

  if (shouldShow) {
    element.style.display = 'block';
    element.classList.add('slide-in');
  } else {
    element.classList.add('slide-out');
    setTimeout(() => {
      element.style.display = 'none';
      element.classList.remove('slide-out');
    }, 300);
  }
}

// Form validation utility
function validateForm(formSelector) {
  const form = document.querySelector(formSelector);
  if (!form) return false;

  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });

  return isValid;
}

// Add loading state to button
function setLoadingState(button, loading = true) {
  if (loading) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Carregando...';
  } else {
    button.disabled = false;
    button.innerHTML = button.dataset.originalText || button.innerHTML;
  }
}

// Notification system
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
    type === 'success' ? 'bg-green-500' :
    type === 'error' ? 'bg-red-500' :
    type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
  } text-white max-w-sm`;

  notification.innerHTML = `
    <div class="flex items-center">
      <i class="fas ${
        type === 'success' ? 'fa-check-circle' :
        type === 'error' ? 'fa-exclamation-circle' :
        type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'
      } mr-2"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, duration);
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    debounce,
    throttle,
    scrollToElement,
    toggleElement,
    validateForm,
    setLoadingState,
    showNotification
  };
}