import { makeFetch } from "./scripts/makeFetch.js";

const GENRES_URL = `https://api.spotify.com/v1/browse/categories?locale=sv_US`;
const limit = 10;
const PLAYLISTS_URL = `https://api.spotify.com/v1/browse/featured-playlists?limit=${limit}`;
const USER_URL = `https://api.spotify.com/v1/users/26idub89ck17yhltuc8zxrd7b`;

/** Получаем список рекомендованных плейлистов */
/** Разбиваем плейлисты по карточкам и выводим на страницу */
const createPlaylists = async () => {
    
    let data = await makeFetch(PLAYLISTS_URL);
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

/** Получаем список жанров */
/** Разбиваем жанры по карточкам и выводим на страницу */
const createGenres = async () => {
    
    let genres = await makeFetch(GENRES_URL);
    let cards = document.querySelector('.genres');
    console.log(genres.categories.items);

    for (let i = 0; i < genres.categories.items.length; i++) {
        cards.insertAdjacentHTML('beforeend', `
         <div class="content__card card">
            <img class="card__image" src='${genres.categories.items[i].icons[0].url}' id='${genres.categories.items[i].id}'>  
            <div class="card__title">${genres.categories.items[i].name}</div>
         </div>`
      )
    }
}

/** Получаем имя и фотографию профиля пользователя */
/** Выводим на страницу полученные фото и имя пользователя */
const createUser = async () => {
    let user = await makeFetch(USER_URL);
    console.log(user);

    let userPhoto = document.querySelector('.user-menu__photo');
    let userName = document.querySelector('.user-name');
    userPhoto.src = user.images[0].url;
    userName.textContent = user.display_name;
}

createPlaylists();
createGenres();
createUser();
