import './Main.css';
import { useEffect, useState } from 'react';
import { makeFetch } from '../../getApi'

function Main() {
  
  const GENRES_URL = `https://api.spotify.com/v1/browse/categories?locale=sv_US`;
  const limit = 10;
  
  const [genres, setGenres] = useState([]);

  useEffect(async() => {
    setGenres(await makeFetch(GENRES_URL));
  }, []);

  let genresFlag = false;
    if (Object.keys(genres).length !== 0 && !genres.error) {
        genresFlag = true;
    }

  return (
    <main className="content">
      
      <h2 className="content__section-title">Жанры</h2>
      <div className="content__section-subtitle">Здесь найдется музыка для любого настроения.</div>
      <section className="content__section">
          {genresFlag ? genres.categories.items.map((item) => (
            <div className="content__card" key={item.id}>
              <img className="card__image" src={item.icons[0].url} id={item.id} />  
              <div className="card__title">{item.name}</div>
            </div>
          )) : ''}
      </section>
    </main>
    )
  }
export default Main;