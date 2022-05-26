/** Получаем имя и фотографию профиля пользователя */
const getUserInfo = async () => {

    try {
        let token = await getToken();
        const result = await fetch(`https://api.spotify.com/v1/users/26idub89ck17yhltuc8zxrd7b`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json();
    return data;
    }
    catch(error) {
        console.log("Ой, что-то пошло не так. Ошибка: ", error)
    }
};
