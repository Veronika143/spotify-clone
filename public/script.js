/** Получаем список жанров */
const getGenres = async () => {
        
    try {
        let token = await getToken();

        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data.categories.items;
    }
    catch(error) {
        console.log("Ой, что-то пошло не так. Ошибка: ", error)
    }
}

/** Получаем список рекомендованных плейлистов */
const getPlaylists = async () => {

   try {
        let token = await getToken();
        const limit = 10;

        const result = await fetch(`https://api.spotify.com/v1/browse/featured-playlists?limit=${limit}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        });
        const data = await result.json();
        return data
    }
    catch(error) {
        console.log("Ой, что-то пошло не так. Ошибка: ", error)
    }
}

/** Разбиваем плейлисты по карточкам и выводим на страницу */
const createPlaylists = async () => {
    let data = await getPlaylists();
    let cards = document.querySelector('.playlists');
    console.log(data); 

    for (let i = 0; i < data.playlists.items.length; i++) {
        cards.insertAdjacentHTML('beforeend', `
         <div class="content__card card">
            <img class="card__image" src='${data.playlists.items[i].images[0].url}' id='${data.playlists.items[i].id}'>  
            <div class="card__title">${data.playlists.items[i].name}</div>
            <div class="card__subtitle">${data.playlists.items[i].description}</div>
         </div>`
      )
    }
}

/** Разбиваем жанры по карточкам и выводим на страницу */
const createGenres = async () => {
    let genres = await getGenres();
    let cards = document.querySelector('.genres');
    console.log(genres);

    for (let i = 0; i < genres.length; i++) {
        cards.insertAdjacentHTML('beforeend', `
         <div class="content__card card">
            <img class="card__image" src='${genres[i].icons[0].url}' id='${genres[i].id}'>  
            <div class="card__title">${genres[i].name}</div>
         </div>`
      )
    }
}

/** Выводим на страницу полученные фото и имя пользователя */
const createUser = async () => {
    let user = await getUserInfo();
    console.log(user);

    let userPhoto = document.querySelector('.user-menu__photo');
    let userName = document.querySelector('.user-name');
    userPhoto.src = user.images[0].url;
    userName.textContent = user.display_name;
}

createPlaylists();
createGenres();
createUser();