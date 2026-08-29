(() => {
  window.RoLARPTrade={
    previewOffer(items=[]){return items.map(x=>({...x, simulated:true}));},
    explain(){return 'RoLARP trade views are previews only; no trade request is sent.';}
  };
})();
