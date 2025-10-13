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