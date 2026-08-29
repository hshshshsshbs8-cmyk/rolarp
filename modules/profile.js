(() => {
  const selectors = ['[data-testid="header-robux"]','.text-robux','.navbar-robux','.profile-name','.profile-header-name'];
  const replace = async () => {
    if (!window.RoLARP) return;
    const s = await RoLARP.load(); if (!s.enabled) return;
    document.querySelectorAll(selectors.join(',')).forEach(el => {
      const old = el.textContent.trim();
      if (/^[\d,]+$/.test(old)) el.textContent = RoLARP.formatRobux(s.robux);
      if (/username|display/i.test(el.className || '')) el.textContent = s.displayName;
    });
    document.documentElement.dataset.rolarpProfile = 'active';
  };
  window.RoLARPProfile = { refresh: replace };
  new MutationObserver(replace).observe(document.documentElement, {subtree:true, childList:true});
  window.addEventListener('rolarp:state', replace);
})();
