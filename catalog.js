(() => {
  window.RoLARPCatalogTools={
    makePreviewCard(item){const card=document.createElement('article');card.className='rolarp-card';card.dataset.assetId=item.id||'';card.innerHTML=`<strong></strong><small></small>`;card.querySelector('strong').textContent=item.name||'Item';card.querySelector('small').textContent=`${Number(item.price||0).toLocaleString()} simulated R$`;return card;},
    async simulatePurchase(item){const s=await RoLARP.load();const price=Math.max(0,Number(item.price||0));if(s.robux<price)return {ok:false,reason:'insufficient simulated balance'};const inventory=[...s.inventory.filter(x=>String(x.id)!==String(item.id)),{id:String(item.id||crypto.randomUUID()),name:item.name||'Item',price}];const next={...s,robux:s.robux-price,inventory};await RoLARP.save(next);RoLARP.emit(next);return {ok:true,state:next};}
  };
})();
