import { makeFetch } from "./makeFetch.js";

const USER_URL = `https://api.spotify.com/v1/users/26idub89ck17yhltuc8zxrd7b`;

/** Выводим на страницу полученные фото и имя пользователя */
const createUser = async () => {
    let user = await makeFetch(USER_URL);
    console.log(user);

    let userPhoto = document.querySelector('.user-menu__photo');
    let userName = document.querySelector('.user-name');
    userPhoto.src = user.images[0].url;
    userName.textContent = user.display_name;
}

createUser();