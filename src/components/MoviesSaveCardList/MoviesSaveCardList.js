import '../MoviesCardList/MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import '../Animation/Animation.css';

function MoviesSaveCardList({ movies, saveMovies, addMovie, deleteMovie, type }) {
  const moviesElements = movies.slice(0, movies.length).map((card) => (
    <MoviesCard
      saveMovies={saveMovies}
      addMovie={addMovie}
      deleteMovie={deleteMovie}
      key={card._id}
      card={card}
      type={type}
    />
  ))

  return (
    <section className="cards">
      <div className='cards__list'>
        {moviesElements}
      </div>
    </section>
  );
}

export default MoviesSaveCardList;