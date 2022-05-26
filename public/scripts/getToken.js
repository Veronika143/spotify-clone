const clientId = 'c1291a365bd9460eafd12b2756755664';
const clientSecret = 'b11d6722dc2342c8928fdd9c932e3cb2';

/** Создание токена */
const getToken = async () => {

        try {
            const result = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded', 
                    'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
                },
                body: 'grant_type=client_credentials'
            });

            const data = await result.json();
            return data.access_token;
        }
        catch(error) {
            console.log("Ой, что-то пошло не так. Ошибка: ", error)
        }
    }