// __________________________________________ELIMINA LOS ELEMENTOS DE LA PÁGINA AL PASAR DE UN APARTADO A OTRO
function cleanPage() {
  const appdiv = document.getElementById('app');
  if (appdiv.hasChildNodes()) {
    while (appdiv.childNodes.length >= 1) {
      appdiv.removeChild(appdiv.firstChild);
    }
  }
}
// __________________________________________ELIMINA SÓLO LOS COMICS TRAS FILTRADO, NO ELIMINA EL FILTRO
function cleanPageCom() {
  app.removeChild(loganDiv);
  const comdiv = document.getElementById('comicStyle');
  if (comdiv.hasChildNodes()) {
    while (comdiv.childNodes.length >= 1) {
      comdiv.removeChild(comdiv.firstChild);
    }
  }
}
// __________________________________________CREA LA NAV BAR CADA VEZ QUE SE RECARGA LA PÁGINA
function renderNav() {
  const renderNav =`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" id="btnHome" href="javascript:btnHome()">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <a class="nav-link" id ="btnUniv" href="javascript:btnUniv()">Marvel Universe<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" id ="btnCha" href="javascript:btnCha()">X-Men Characters</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" id="btnCom" href="javascript:btnCom()">X-Men Comics</a>
                    </li>
                </ul>
                <a href="https://developer.marvel.com/"  title="Marvel" target="_blank"><img src="./img/marvel.png" class="marvimg"></a>
                </div>
                </nav>`;
  const container = document.createElement('div');
  container.setAttribute('id', 'renderNav');
  container.innerHTML = renderNav;
  app.appendChild(container);
}
// _________________________________________________________RENDERIZA EL FOOTER
function renderFooter() {
  const foot = `    <footer class="page-footer font-small blue">
    <div class="footer-copyright text-center py-3">Proyecto SPA con Javascript puro. Upgrade Hub Bootcamp.
        <a href="https://gitlab.com/upgrade-hub/fsd-ft-oct-2020/vanilla-js/final_project/-/tree/lgvicente" target="=_blank">Luis García Vicente.</a>  
    </div>
    <div class="footer-copyright text-center py-3">Data provided by Marvel. © 2020 MARVEL
        <a href="https://developer.marvel.com/" title="Marvel" target="_blank"> Visit Marvel.</a>
    </div>
  </footer>`;
  const footDiv = document.createElement('div');
  footDiv.setAttribute('id', 'footId');
  footDiv.innerHTML = foot;
  const n = null;
  app.insertBefore(footDiv, n);
}
// ________________________RENDERIZA LA PÁGINA INICIAL HOME(FALTA AÑADIR FUNCIONALIDAD A LAS IMÁGENES PARA QUE LLEVEN A OTRAS SECCIONES)
function renderHome() {
  renderNav();
  const xprofdiv = document.createElement('div');
  xprofdiv.setAttribute('id', 'xprofdiv');
  const xprofimg = `<div class="card">
    <div class="card-body">
      <h5 class="card-title">"Bienvenidos a otra Api de Marvel,</h5>
      <p class="card-text">Aquí podrá buscar a su<span class="bluel"> mutante favorito</span> o buscar entre la <span class="bluel">colección de comics</span> de X-Men.</p>
      <p class="card-text">Si no le interesa los mutantes, siempre puede usar nuestro <span class="bluel">buscador del Universo Marvel</span>.</p>
      <p class="card-text">Ah, y recuerde que puedo leer su mente. Así que procure pensar bonito."</p>
    </div>
    <img class="card-img-bottom" src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/professor-charles-xavier-x-men-comic-art.jpg" alt="Card image cap">
  </div>`;
  xprofdiv.innerHTML = xprofimg;
  app.appendChild(xprofdiv);
  renderFooter();
}
// _____________________________________________LOOP PARA IR BUSCANDO CADA PERSONAJE A TRAVÉS DE GETCHA()
function renderCha(xmenList) {
  renderNav();
  renderFooter();
  xmenList.forEach((mutant) => {
    const urlCha = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${mutant}&ts=1&apikey=${apikey}&hash=${hash}`;
    getCha(urlCha, 1, renderCha2);
  });
}
// _________________________________________UNA VEZ API CONSUMIDA, CREA LOS DIV CON CADA PERSONAJE
function renderCha2(data) {
  const container = document.createElement('div');
  container.setAttribute('class', 'cardB' );
  const mutantHTML = `   
    <img class="card-img-top" src='${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}' alt='${data.name}'>
    <div class="card-body"><h5 class="card-title">${data.name}</h5></div>`;
  container.innerHTML = mutantHTML;
  const footDiv = document.getElementById('footId');
  app.insertBefore(container, footDiv);
}
// __________________________________CREA LOS FILTROS EN COMICS(FECHA Y TEMA) Y LUEGO MANDA LA URL A GETCOM()
function renderCom() {
  renderNav();
  const container = document.createElement('div');
  container.setAttribute('id', 'filterdiv');
  const filtro = ` <label class ="filtro" ><div><form class="formulario">
                    <input class="form-control mr-sm-2" id="date1" type="date" value="1990-09-01" placeholder="From"/>
                    <input class="form-control mr-sm-2" id="date2" type="date" value="2020-09-01" placeholder="Until" />
                    ${desplegable}</select>
                    <input class="btn btn-success" type="button" id="btnSearchCom" value="Search" onclick="SearchCom()"/></form></div></label>`;
  container.innerHTML = filtro;
  app.appendChild(container);

  const loganDiv = document.createElement('div');
  loganDiv.setAttribute('id', 'loganDiv');
  const loganimg = `<img src='https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/01/logan-xmen-comics-3.jpg'/>`;
  loganDiv.innerHTML = loganimg;
  app.appendChild(loganDiv);

  renderFooter();
}
// ____________________________________RECIBE LA INFO DE GETCOM Y GENERA LOS DIV PARA LOS COMICS BUSCADOS
function renderCom2(data) {
  cleanPage();
  renderNav();

  const container = document.createElement('div');
  container.setAttribute('id', 'filterdiv');
  const filtro = ` <label class ="filtro" ><div><form class="formulario">
              <input class="form-control mr-sm-2" id="date1" type="date" value="1963-09-01" placeholder="From"/>
              <input class="form-control mr-sm-2" id="date2" type="date" value="2020-09-01" placeholder="Until" />
              ${desplegable}</select><input class="btn btn-success" type="button" id="btnSearchCom" value="Search" onclick="SearchCom()"/>
              </form></div></label>`;
  container.innerHTML = filtro;
  app.appendChild(container);
  renderFooter();

  data.forEach((comic) => {
    const container = document.createElement('div');
    container.setAttribute('class', 'cardB' );
    container.setAttribute('id', 'comicStyle');
    const comicHTML = `<img class="card-img-top" src='${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}' alt='$      {comic.name}'><div class="card-body"><h2 class="card-title">${comic.title}</h2>
                        <p>Release date: ${(comic.dates[0].date).substring(0, 10)}</p>
                        <p>Pages: ${comic.pageCount}</p><p>Price: ${comic.prices[0].price} $</p></div>`;
    container.innerHTML = comicHTML;
    app.after(container);
    const footDiv = document.getElementById('footId');
    app.insertBefore(container, footDiv);
  });
}
// ________________________________RENDERIZA LA PÁGINA DE BIENVENIDA DE LA PESTAÑA MARVEL UNIVERSE
function renderUniv() {
  renderNav();
  const container = document.createElement('div');
  container.setAttribute('id', 'univDiv');
  const filtro = ` <form class="formul">
                    <input class="form-control mr-sm-2" id = "marvelInp" type="text" placeholder="Search your Marvel hero"/>
                    <input class="btn btn-outline-success btn-rounded btn-sm my-0" type="button" id="btnSearchMarvel" value="Search" onclick="SearchMarvel()"/></form>`;

  container.innerHTML = filtro;
  app.appendChild(container);

  const marvelDiv = document.createElement('div');
  marvelDiv.setAttribute('id', 'marvelId');
  const marvelImg = `<img src='https://deadline.com/wp-content/uploads/2018/11/b6e87dcbf8f18a8b2aafea32c335e20c.jpg'/>`;
  marvelDiv.innerHTML = marvelImg;
  app.appendChild(marvelDiv);

  renderFooter();
}
// __________________________________UNA VEZ API CONSUMIDA, CREA UN DIV CON UN SÓLO PERSONAJE
function render1Cha(data) {
  renderNav();
  const buscador = document.createElement('div');
  buscador.setAttribute('id', 'univDiv');
  const filtro = ` <form class="formul">
    <input class="form-control mr-sm-2" id = "marvelInp" type="text" placeholder="Search your Marvel hero"/>
    <input class="btn btn-outline-success btn-rounded btn-sm my-0" type="button" id="btnSearchMarvel" value="Search" onclick="SearchMarvel()"/></form>`;
  buscador.innerHTML = filtro;
  app.appendChild(buscador);

  const container = document.createElement('div');
  container.setAttribute('id', 'onechaStyle');
  const mutantHTML = `
                <div class= "chaImg"><img src='${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}' alt='${data.name}'></div>
                <div><h2 class="chaName">${data.name}</h2><p class="pcha">${data.description}</p>
                <p class="pcha">These are some comics where you can find their adventures: </p></div>`;
  container.innerHTML = mutantHTML;
  app.appendChild(container);
}
// _________________________________RENDERIZA LOS COMICS DEL PERSONAJE MARVEL BUSCADO
function renderUniv2(data) {
  renderFooter();
  data.forEach((comic) => {
    const container = document.createElement('div');
    container.setAttribute('id', 'comicStyle');
    container.setAttribute('class', 'cardB' );
    const comicHTML = `<img class="card-img-top" src='${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}' alt='$      {comic.name}'><div class="card-body"><h2 class="card-title">${comic.title}</h2>
        <p>Release date: ${(comic.dates[0].date).substring(0, 10)}</p>
        <p>Pages: ${comic.pageCount}</p><p>Price: ${comic.prices[0].price} $</p></div>`;
    container.innerHTML = comicHTML;
    app.after(container);
    const footDiv = document.getElementById('footId');
    app.insertBefore(container, footDiv);
  });
}


