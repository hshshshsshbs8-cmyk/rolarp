(() => {
  const regions=['US East','US West','Europe','Asia Pacific','Brazil','Australia'];
  window.RoLARPServers={regions, filter(list, region){return !region?list:list.filter(x=>x.region===region);}};
})();
