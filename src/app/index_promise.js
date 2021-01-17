// md5
// a60393fc5d02c70e798fbe9ed493d8d2
// public
// e470055eb3b7da450f04cee9f8bf57df
// private
// b3365854f27ee4b0acdd60d439af3bf13dbfa76d

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e470055eb3b7da450f04cee9f8bf57df&hash=a60393fc5d02c70e798fbe9ed493d8d2
const ajax = (request) => {
  return new Promise( (resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(request.method, request.url, true);
    xhr.addEventListener('load', (e) => {
      resolve(e.target);
    });
    xhr.send();
  });
};

const showMarvel = async () => {
  const hash = 'a60393fc5d02c70e798fbe9ed493d8d2';
  const apikey = 'e470055eb3b7da450f04cee9f8bf57df';
  const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`;
  const req = {method: 'GET', url: url};
  const response = await ajax(req);
  switch (response.status) {
    case 200:
      console.log(JSON.parse(response.responseText));
      draw(JSON.parse(response.responseText).data.results);
      break;
    case 400:
      setText('Error de cliente' + response.status);
      break;
    default:
      setText('Error desconocido '+ response.status);
  }
};
// HE PROBADO DOS MANERAS DE METER ELEM HTML:
// 1. CON TEMPLATE STRINGS (DESPUÉS DE ESTOS COMENTARIOS)
// 2. CON MÉTODOS DEL DOM COMO NOS ENSEÑARON EN CLASE
// const draw = data => {
//     data.forEach(comic => {
//         const container = document.createElement('div');
//         const title = document.createElement('h2');
//         const image = document.createElement('img');

//         title.textContent = comic.name;
//         //cómo armar las fotos edteam/ajax y websockets/3.6/min9
//         image.src = `${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`;

//         container.appendChild(title);
//         container.appendChild(image);
//         app.appendChild(container);
//     })
// }

const draw = (data) => {
  data.forEach((comic) => {
    const container = document.createElement('div');
    const comicHTML = `
            <div>
                <h2>${comic.name}</h2>
                <img src='${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}' alt=${comic.name}
            </div>`;
    container.innerHTML = comicHTML;
    app.appendChild(container);
  });
};


btn.addEventListener('click', (e) => {
  showMarvel();
});

