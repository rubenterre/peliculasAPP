

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CwqGSl8q.js","_app/immutable/chunks/scheduler.GsqmyvpS.js","_app/immutable/chunks/index.RoeIq8KL.js","_app/immutable/chunks/entry.ggeEmmXR.js"];
export const stylesheets = [];
export const fonts = [];
