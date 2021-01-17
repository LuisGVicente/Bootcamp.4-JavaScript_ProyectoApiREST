<input id = "searchCom" type="text" placeholder="Search by Character or Event"/>
function renderComic(data) {
    // renderNav();
    console.log(data);
    data.forEach(univ => {
        const container = document.createElement('div');
        container.setAttribute('id', 'comicStyle');
        const univHTML = `
                <h2 class="comicTitle">${univ.title}</h2>
                <p>${univ.description}</p>
                <p>Pages: ${univ.pageCount}</p>
                <img class ="comicImg" src='${univ.thumbnail.path}/portrait_incredible.${univ.thumbnail.extension}' alt='${univ.title}'>`;
        container.innerHTML = univHTML;
        app.appendChild(container);
    })
}

// function renderHome(data) {
//     renderNav();
//     const xprofdiv = document.createElement('div');
//     xprofdiv.setAttribute('id','xprofdiv');
//     const xprofimg = `<img src='https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/professor-charles-xavier-x-men-comic-art.jpg'/>`;
//     xprofdiv.innerHTML = xprofimg;
//     app.appendChild(xprofdiv);
//     data.forEach(univ => {
//         const container = document.createElement('div');
//         container.setAttribute('id',`${univ.id}`);
//         const univHTML = `
//                 <h2 class="homeTitle">${univ.name}</h2>
//                 <img class ="homeImg" src='${univ.thumbnail.path}/portrait_incredible.${univ.thumbnail.extension}' alt='${univ.name}'>`;
//         container.innerHTML = univHTML;
//         app.appendChild(container);
//     })
// }  

function renderNav() {
    const renderNav = `
    <nav>
        <ul>
            <li>
                <a id="btnHome" href="javascript:btnHome()">Home</a>
            </li>
            <li>
                <a id ="btnCha" href="javascript:btnCha()">X-Men Characters</a>
            </li>
            <li>
                <a id="btnCom" href="javascript:btnCom()">X-Men Comics</a>
            </li>
            <li>
                <a id ="btnSearchCom" href="javascript:btnSearchCom()">Marvel Universe</a>
            </li>
        </ul>
    </nav>`;
    const container = document.createElement('div');
    container.setAttribute('id', 'renderNav');
    const containerCha = document.createElement('div'); 
    container.setAttribute('id','renderNavCha');
    // const containerComic = document.createElement('div'); 
    // container.setAttribute('id','renderNavComic');
    // const formCha = document.createElement('form');
    // const formComic = document.createElement('form');
    // const inpCha = document.createElement('input');
    // inpCha.setAttribute('id', 'searchCha');
    // inpCha.setAttribute('type', 'text');
    // inpCha.setAttribute('placeholder','Search by Character');
    // const inpComic = document.createElement('input');
    // inpComic.setAttribute('id', 'searchComic');
    // inpComic.setAttribute('type', 'text');
    // inpComic.setAttribute('placeholder','Search by Comic');

    // formCha.appendChild(inpCha);
    // formComic.appendChild(inpComic);
    // containerCha.appendChild(formCha);
    // containerComic.appendChild(formComic);
    // container.appendChild(containerCha);
    // container.appendChild(containerComic);
    container.innerHTML = renderNav;
    app.appendChild(container);
}

const renderHome = data => {
    renderNav();

    data.forEach(comic => {
        const container = document.createElement('div');
        const comicHTML = `
            <div class="homeContainer">
                <h2 class="homeTitle">${comic.name}</h2>
                <p>${comic.description}</p>
                <img src='${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}' alt=${comic.name}
            </div>`;
        container.innerHTML = comicHTML;
        app.appendChild(container);
    })

    
    async function  getHome()  {
        const response = await fetch(urlHome);
            switch (response.status) {
                case 200:
                    const fetchedData = await response.json();
                    console.log(fetchedData.data.results);
                    renderHome(fetchedData.data.results);
                    break
                default:
                    alert('Sentimos comunicarle que ha sufrido un error '+ response.status+'. Compruebe su petición.');
            }
    }











































































































































































































































































































































































































































































































































































































































































































































