(() => {
  window.RoLARPFriends = {
    async activity() { return (await RoLARP.load()).friends || []; },
    async set(list) { const s=await RoLARP.load(); const next={...s,friends:Array.isArray(list)?list:[]}; await RoLARP.save(next); RoLARP.emit(next); return next; }
  };
})();
