import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "header.svelte-1dobbmi{background:var(--color-principal);font-family:var(--fuente-principal);color:white;height:64px;display:flex;place-content:center;flex-wrap:nowrap;align-items:center}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-1dobbmi" data-svelte-h="svelte-l6655v"><nav><img src="logo_tmdb.webp" alt="Logo de TMDB"></nav> </header>`;
});
const css = {
  code: "*{margin:0;padding:0;outline:0;box-sizing:border-box}body{background:white;color:black;-webkit-font-smoothing:antialiased}body,input, button{font-size:16px;font-family:var(--fuente-principal)}button{cursor:pointer}@font-face{font-family:'Source Sans';src:url(/fonts/SourceSans3-VariableFont_wght.ttf)}:root{--color-principal:#032541;--color-secundario:#8FCEA1;--color-terciario:#01B4E5;--fuente-principal:Source Sans}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
