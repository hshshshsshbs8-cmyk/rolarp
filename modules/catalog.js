(() => {
  window.RoLARPCatalog = {
    normalize(item = {}) { return {id:String(item.id || ''), name:item.name || 'Untitled item', price:Number(item.price || 0), thumbnail:item.thumbnail || ''}; },
    addLocal(item) { return RoLARP.load().then(s => { const next={...s,inventory:[...s.inventory.filter(x=>String(x.id)!==String(item.id)),this.normalize(item)]}; return RoLARP.save(next).then(()=>next); }); },
    removeLocal(id) { return RoLARP.load().then(s=>RoLARP.save({...s,inventory:s.inventory.filter(x=>String(x.id)!==String(id)),equipped:s.equipped.filter(x=>String(x)!==String(id))})); }
  };
})();
