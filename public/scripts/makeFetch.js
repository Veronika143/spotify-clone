import { getToken } from './getToken.js';

async function makeFetch(URL) {
    try {
        let token = await getToken();
            const result = await fetch(URL, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }
    catch(error) {
        console.log("Ой, что-то пошло не так. Ошибка: ", error)
    }
}

export { makeFetch };