/** Выводим на страницу полученные фото и имя пользователя */
const createUser = async () => {
    let user = await getUserInfo();
    console.log(user);

    let userPhoto = document.querySelector('.user-menu__photo');
    let userName = document.querySelector('.user-name');
    userPhoto.src = user.images[0].url;
    userName.textContent = user.display_name;
}

createUser();