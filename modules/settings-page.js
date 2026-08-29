(() => {
  window.RoLARPSettings={async get(){return RoLARP.load();},async set(patch){const s=await RoLARP.patch(patch);RoLARP.emit(s);return s;},async reset(){await RoLARP.reset();const s=await RoLARP.load();RoLARP.emit(s);return s;}};
})();
