// __________________________________________BUSCA LOS PERSONAJES EN LA API
async function getCha(url, n, render) {
  const response = await fetch(url);
  switch (response.status) {
    case 200:
      const fetchedData = await response.json();
      render(fetchedData.data.results[n]);
      break;
    default:
      alert('Sentimos comunicarle que ha sufrido un error ' + response.status + '. Compruebe su petición.');
  }
}
// ________________________________________BUSCA LOS COMICS BUSCADOS EN LA API
async function getCom(url, render) {
  const response = await fetch(url);
  switch (response.status) {
    case 200:
      const fetchedData = await response.json();
      render(fetchedData.data.results);
      break;
    default:
      alert('Sentimos comunicarle que ha sufrido un error ' + response.status + '. Compruebe su petición.');
  }
}
