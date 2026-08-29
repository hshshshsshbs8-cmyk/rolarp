(() => {
  window.RoLARPAvatar = {
    async state() { const s=await RoLARP.load(); return {inventory:s.inventory,equipped:s.equipped}; },
    async toggle(id) { const s=await RoLARP.load(); const key=String(id); const equipped=s.equipped.includes(key)?s.equipped.filter(x=>x!==key):s.equipped.concat(key); const next={...s,equipped}; await RoLARP.save(next); RoLARP.emit(next); return next; },
    mountPreview(container) { if (!container) return; container.dataset.rolarpAvatar='local-preview'; }
  };
})();
