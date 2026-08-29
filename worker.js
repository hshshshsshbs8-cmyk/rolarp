self.addEventListener('message',event=>{if(event.data?.type==='ping')event.ports?.[0]?.postMessage({type:'pong',localOnly:true});});
