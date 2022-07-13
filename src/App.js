
import './App.css';
import Movie from './components/Movie';
import movies from './data/movielist';

function App() {

  function displayMovie(movies){
    return (<Movie
        key = {movies.id}
        name = {movies.name}
        image = {movies.image}
        year = {movies.year}
        box_office = {movies.box_office}
    />
    )
  }
  return (
    <div className="App">
      <h1 className='App-header'>Top 10 Highest-Grossing Movies of all Times</h1>
      <div className='movie-list'>
        {movies.map(displayMovie)}
      </div>
          
    </div>
  );
}

export default App;
