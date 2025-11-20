// Common JavaScript utilities for DeiviTech Formatação

// Header offset adjustment
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelector('.site-nav');
  if(!nav) return; // only adjust pages with a fixed site nav
  const setOffset = () => {
    const h = Math.ceil(nav.getBoundingClientRect().height || 0);
    document.documentElement.style.setProperty('--site-nav-height', h + 'px');
    // also set body padding for immediate effect
    document.body.style.paddingTop = h + 'px';
  };
  setOffset();
  window.addEventListener('resize', setOffset);
});

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