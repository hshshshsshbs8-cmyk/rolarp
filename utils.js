(() => {
  const KEY = 'rolarpState';
  const defaults = {
    enabled: true,
    robux: 999999,
    username: 'RoLARP_User',
    displayName: 'RoLARP',
    followers: 12345,
    premium: true,
    verified: true,
    inventory: [],
    equipped: [],
    theme: 'midnight'
  };
  window.RoLARP = window.RoLARP || {};
  RoLARP.defaults = structuredClone(defaults);
  RoLARP.load = async () => ({...defaults, ...(await chrome.storage.local.get(KEY))[KEY]});
  RoLARP.save = async state => chrome.storage.local.set({[KEY]: state});
  RoLARP.patch = async patch => { const state = await RoLARP.load(); const next = {...state, ...patch}; await RoLARP.save(next); return next; };
  RoLARP.reset = () => RoLARP.save(structuredClone(defaults));
  RoLARP.formatRobux = n => Number(n || 0).toLocaleString('en-US');
  RoLARP.emit = detail => window.dispatchEvent(new CustomEvent('rolarp:state', {detail}));
})();
