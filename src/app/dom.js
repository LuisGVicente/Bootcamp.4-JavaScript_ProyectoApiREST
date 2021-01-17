// BOTÓN NAVBAR > HOME
function btnHome() {
  const aHome = document.getElementById('btnHome');
  aHome.addEventListener('click', (e) => {
    cleanPage();
    renderHome();
  });
}
// BOTÓN NAVBAR > X MEN CHARACTERS
function btnCha() {
  const aCha = document.querySelector('#btnCha', '#btnCha2');
  aCha.addEventListener('click', (ev) => {
    cleanPage();
    renderCha(xmenList);
  });
}
// BOTÓN NAVBAR > X MEN COMICS
function btnCom() {
  const aCom = document.getElementById('btnCom');
  aCom.addEventListener('click', (e) => {
    cleanPage();
    renderCom();
  });
}
// BOTÓN PARA BUSCAR POR COMIC Y TRAMA
function SearchCom() {
  const fecha1 = document.getElementById('date1').value;
  const fecha2 = document.getElementById('date2').value;
  const comics = document.getElementById('desp').value;
  const url = `https://gateway.marvel.com:443/v1/public/comics?dateRange=${fecha1}%2C${fecha2}&titleStartsWith=${comics}&limit=20&ts=1&apikey=${apikey}&hash=${hash}`;
  getCom(url, renderCom2);
}
// RENDERIZAR PÁGINA DE MARVEL UNIVERSE
function btnUniv() {
  const aMarvel = document.getElementById('btnUniv');
  aMarvel.addEventListener('click', (e) => {
    cleanPage();
    renderUniv();
  });
}
// BOTÓN PARA BUSCAR PERSONAJES MARVEL Y SUS COMICS
function SearchMarvel() {
  const buscado = document.getElementById('marvelInp').value;
  const urlCha = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${buscado}&ts=1&apikey=${apikey}&hash=${hash}`;
  const urlCom = `https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${buscado}&limit=20&ts=1&apikey=${apikey}&hash=${hash}`;
  getCha(urlCha, 0, render1Cha);
  getCom(urlCom, renderUniv2);
  cleanPage();
}
