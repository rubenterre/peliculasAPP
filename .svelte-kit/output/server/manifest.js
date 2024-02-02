export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/SourceSans3-VariableFont_wght.ttf","logo_tmdb.webp"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.nq2kZiUq.js","app":"_app/immutable/entry/app.8AYAJY9g.js","imports":["_app/immutable/entry/start.nq2kZiUq.js","_app/immutable/chunks/entry.ggeEmmXR.js","_app/immutable/chunks/scheduler.GsqmyvpS.js","_app/immutable/entry/app.8AYAJY9g.js","_app/immutable/chunks/scheduler.GsqmyvpS.js","_app/immutable/chunks/index.RoeIq8KL.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
