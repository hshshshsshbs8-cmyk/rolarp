// RoLARP telemetry is intentionally local-only. No browsing history, cookies, tokens, or account credentials are collected.
export const RoLARPMetrics={events:[],record(name,meta={}){this.events.push({name,meta,at:Date.now()});this.events=this.events.slice(-100);}};
