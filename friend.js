(() => {
  window.RoLARPFriendTools={
    normalize(friend={}){return {id:String(friend.id||''),name:String(friend.name||'Friend'),status:String(friend.status||'offline')};},
    async add(friend){const s=await RoLARP.load();const item=this.normalize(friend);const friends=[...(s.friends||[]).filter(x=>x.id!==item.id),item];const next={...s,friends};await RoLARP.save(next);RoLARP.emit(next);return next;},
    async remove(id){const s=await RoLARP.load();const next={...s,friends:(s.friends||[]).filter(x=>x.id!==String(id))};await RoLARP.save(next);RoLARP.emit(next);return next;}
  };
})();
