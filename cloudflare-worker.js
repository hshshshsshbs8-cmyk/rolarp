// Optional deployment placeholder for future public, non-authenticated metadata services.
// RoLARP itself does not proxy credentials or Roblox sessions.
export default {async fetch(){return new Response(JSON.stringify({service:'rolarp',status:'ok',localOnly:true}),{headers:{'content-type':'application/json'}});}};
