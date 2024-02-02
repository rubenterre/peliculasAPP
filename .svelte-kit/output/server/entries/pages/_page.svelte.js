import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../chunks/ssr.js";
const css$2 = {
  code: ".puntuacion.svelte-18qwalp{display:flex;background:#ffffff;box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);border-radius:8px;padding:10px 0px 10px 10px;margin:10px 0px}.puntuacion__barra.svelte-18qwalp{width:120px}.puntuacion__nombre.svelte-18qwalp{padding-left:11px}progress.svelte-18qwalp{width:100%;height:10px;border:1px solid #ccc;border-radius:5px;overflow:hidden}progress.svelte-18qwalp::-webkit-progress-value{background-color:#4caf50}progress.svelte-18qwalp::-webkit-progress-bar{background-color:#f2f2f2}.progress-text.svelte-18qwalp{font-size:1rem;color:#333}",
  map: null
};
const Puntuacion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { vote_average } = $$props;
  if ($$props.vote_average === void 0 && $$bindings.vote_average && vote_average !== void 0)
    $$bindings.vote_average(vote_average);
  $$result.css.add(css$2);
  return `<div class="puntuacion svelte-18qwalp"><div class="puntuacion__barra svelte-18qwalp"><progress${add_attribute("value", vote_average, 0)} max="10" class="svelte-18qwalp"></progress> <p class="progress-text svelte-18qwalp">${escape(vote_average)}/10</p></div> <div class="puntuacion__nombre svelte-18qwalp" data-svelte-h="svelte-1rp9g89"><p>Puntuación de los usuarios</p></div> </div>`;
});
const css$1 = {
  code: ".card.svelte-1klxru5.svelte-1klxru5{display:flex;padding:12px;background:#ffffff;border:1px solid #e3e3e3;box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);border-radius:10px;width:420px;height:244px;position:relative;transform:scale(1, 1) translateZ(0px);transition-duration:300ms;transition-property:transform, box-shadow;transition-timing-function:ease-out;-webkit-font-smoothing:subpixel-antialiased}.card.svelte-1klxru5.svelte-1klxru5:hover{box-shadow:rgba(0, 0, 0, 0.8) 0px 2px 58px -16px;transform:scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);transition-duration:300ms;transition-property:transform, box-shadow;transition-timing-function:ease-out;border-radius:6px;border:2px solid white}.card__img.svelte-1klxru5 img.svelte-1klxru5{border-radius:8px;width:148px}.card__detalle.svelte-1klxru5.svelte-1klxru5{margin-left:10px}.card__datos.svelte-1klxru5.svelte-1klxru5{height:140px}h4.svelte-1klxru5.svelte-1klxru5{font-family:var(--fuente-principal);font-size:1.2rem;font-weight:500}.card__genero.svelte-1klxru5.svelte-1klxru5{font-family:var(--fuente-principal);font-size:1rem;font-weight:400;word-wrap:break-word}.card__fecha.svelte-1klxru5.svelte-1klxru5{font-family:var(--fuente-principal);font-size:1rem;font-weight:300}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { poster_path } = $$props;
  let { vote_average } = $$props;
  let { release_date } = $$props;
  let { genre_ids } = $$props;
  const genres = [
    { id: 28, name: "Acción" },
    { id: 12, name: "Aventura" },
    { id: 16, name: "Animación" },
    { id: 35, name: "Comedia" },
    { id: 80, name: "Crimen" },
    { id: 99, name: "Documental" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Familia" },
    { id: 14, name: "Fantasía" },
    { id: 36, name: "Historia" },
    { id: 27, name: "Terror" },
    { id: 10402, name: "Música" },
    { id: 9648, name: "Misterio" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Ciencia ficción" },
    { id: 10770, name: "Película de TV" },
    { id: 53, name: "Suspense" },
    { id: 10752, name: "Bélica" },
    { id: 37, name: "Western" }
  ];
  let generos = genre_ids.map((id) => {
    let genre = genres.find((g) => g.id === id);
    return genre ? " " + genre.name : `Género con ID ${id} no encontrado`;
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.poster_path === void 0 && $$bindings.poster_path && poster_path !== void 0)
    $$bindings.poster_path(poster_path);
  if ($$props.vote_average === void 0 && $$bindings.vote_average && vote_average !== void 0)
    $$bindings.vote_average(vote_average);
  if ($$props.release_date === void 0 && $$bindings.release_date && release_date !== void 0)
    $$bindings.release_date(release_date);
  if ($$props.genre_ids === void 0 && $$bindings.genre_ids && genre_ids !== void 0)
    $$bindings.genre_ids(genre_ids);
  $$result.css.add(css$1);
  return `<div class="card svelte-1klxru5"><div class="card__img svelte-1klxru5"><img${add_attribute("src", `https://image.tmdb.org/t/p/w200${poster_path}`, 0)}${add_attribute("alt", title, 0)} class="svelte-1klxru5"></div> <div class="card__detalle svelte-1klxru5"><div class="card__datos svelte-1klxru5"><h4 class="svelte-1klxru5">${escape(title)}</h4> <p class="card__genero svelte-1klxru5">${escape(generos)}</p> <p class="card__fecha svelte-1klxru5">${escape(release_date)}</p></div> ${validate_component(Puntuacion, "Puntuacion").$$render($$result, { vote_average }, {}, {})}</div> </div>`;
});
var define_import_meta_env_default = { BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const css = {
  code: ".cabecera.svelte-x03mz7.svelte-x03mz7{padding:40px 0px}section.svelte-x03mz7.svelte-x03mz7{margin:0px 20px}.buscador.svelte-x03mz7.svelte-x03mz7{display:flex;place-content:center;padding:20px 0px;margin-bottom:40px}.buscador.svelte-x03mz7 input.svelte-x03mz7{background:#ffffff;border:1px solid #e3e3e3;box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);border-radius:8px;padding:15px 10px;width:386px}input.svelte-x03mz7.svelte-x03mz7::placeholder{color:var(--color-principal)}.buscador.svelte-x03mz7 button.svelte-x03mz7{background-image:linear-gradient(90deg, #8fcea1 0%, #01b4e5 100%);border:1px solid #e3e3e3;box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.1);border-radius:8px;padding:15px 10px;color:white;font-family:var(--fuente-principal);font-weight:500;margin-left:15px;width:99px}h1.svelte-x03mz7.svelte-x03mz7{font-family:var(--fuente-principal);font-weight:600;text-align:center;font-size:2rem}h2.svelte-x03mz7.svelte-x03mz7{font-family:var(--fuente-principal);font-weight:400;text-align:center;font-size:1.4rem}.resultados.svelte-x03mz7.svelte-x03mz7{display:flex;flex-wrap:wrap;gap:30px;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const API_KEY = define_import_meta_env_default.VITE_TMDB_API_KEY;
  let searchTerm = "";
  let movies = [];
  if ($$props.API_KEY === void 0 && $$bindings.API_KEY && API_KEY !== void 0)
    $$bindings.API_KEY(API_KEY);
  $$result.css.add(css);
  return `<main><div class="cabecera svelte-x03mz7" data-svelte-h="svelte-1h17snc"><h1 class="svelte-x03mz7">Bienvenidos</h1> <h2 class="svelte-x03mz7">Millones de películas, programas de televisión y personas por descubrir.
      Explora ahora.</h2></div> <section class="svelte-x03mz7"><div class="buscador svelte-x03mz7"><input placeholder="Escribe el nombre de una película" class="svelte-x03mz7"${add_attribute("value", searchTerm, 0)}> <button class="svelte-x03mz7" data-svelte-h="svelte-xn97v9">Buscar</button></div> ${movies.length > 0 ? `<div class="resultados svelte-x03mz7">${each(movies, (movie) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        genre_ids: movie.genre_ids
      },
      {},
      {}
    )}`;
  })}</div>` : `<p data-svelte-h="svelte-h81di5">No hay películas encontradas</p>`}</section> </main>`;
});
export {
  Page as default
};
