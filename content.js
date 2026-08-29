(() => {
  const STYLE_ID='rolarp-style';
  const injectStyle=()=>{if(document.getElementById(STYLE_ID))return;const s=document.createElement('style');s.id=STYLE_ID;s.textContent='[data-rolarp-profile="active"] .rolarp-friend-chip{display:inline-block;margin:2px;padding:3px 7px;border-radius:999px;background:#252a38;color:#fff;font-size:11px}';document.documentElement.appendChild(s);};
  const badge=()=>{let el=document.getElementById('rolarp-local-indicator');if(el)return;el=document.createElement('div');el.id='rolarp-local-indicator';el.textContent='RoLARP • LOCAL SIMULATION';Object.assign(el.style,{position:'fixed',right:'12px',bottom:'12px',zIndex:2147483647,padding:'6px 10px',borderRadius:'8px',font:'600 11px system-ui',background:'#171923',color:'#aab4ff',boxShadow:'0 8px 24px #0003'});document.body?.appendChild(el);};
  const refresh=async()=>{const s=await RoLARP.load(); if(!s.enabled){document.getElementById('rolarp-local-indicator')?.remove();return;} injectStyle(); badge(); window.RoLARPProfile?.refresh();};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
  window.addEventListener('rolarp:state',refresh);
})();
