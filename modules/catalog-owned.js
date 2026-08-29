(() => {
  window.RoLARPOwned = {
    async list() { return (await RoLARP.load()).inventory; },
    async equip(id) { const s=await RoLARP.load(); const equipped=s.equipped.includes(String(id))?s.equipped:s.equipped.concat(String(id)); const next={...s,equipped}; await RoLARP.save(next); RoLARP.emit(next); return next; },
    async unequip(id) { const s=await RoLARP.load(); const next={...s,equipped:s.equipped.filter(x=>x!==String(id))}; await RoLARP.save(next); RoLARP.emit(next); return next; }
  };
})();
