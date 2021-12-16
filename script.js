const div$$ = document.querySelector(".container");

const getAmiibos = async () => {
  const amiibosApi = await fetch("https://amiiboapi.com/api/amiibo/");
  const amiibosRes = await amiibosApi.json();
  const amiibos = amiibosRes.amiibo;

  const mappedAmiibos = amiibos.map((amiibo) => ({
    serie: amiibo.amiiboSeries,
    game: amiibo.gameSeries,
    character: amiibo.character,
    image: amiibo.image,
    type: amiibo.type,
    release: amiibo.release.eu,
  }));

  paintAmiibos(mappedAmiibos);
};

const paintAmiibos = (mappedArray) => {
  const amiibosHTML = mappedArray.map(
    (amiibo) => `
    <div class="element">
    <h2>${amiibo.character}</h2>
    <img src="${amiibo.image}" alt="${amiibo.character}"/>
    <h3>Videogame: ${amiibo.game}</h3>
    <p>Serie: ${amiibo.serie}</p>
    <p>Type: ${amiibo.type}</p>
    <p>Release date: ${amiibo.release}</p>
    </div>
    `
  ).join("");

  div$$.innerHTML = amiibosHTML;
};

getAmiibos();
