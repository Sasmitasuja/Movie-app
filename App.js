
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import React from "react";
import { movies } from './MovieData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      countcard:0,
    };
  }

  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].star < 5) {
      movies[movieId].star += 0.5;
      this.setState({ movies });
    }
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].star > 0) {
      movies[movieId].star -= 0.5;
      this.setState({ movies });
    }
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;
    this.setState({ movies });
  };

  handleAddtocart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].isIncart = !movies[movieId].isIncart;
    if(movies[movieId].isIncart ){
      this.state.countcard+=1
    }
    else{

      this.state.countcard-=1
    }
    this.setState({ movies });
  };
  render() {
    return (
      <div>
        <Navbar cardcount={this.state.countcard} />
        <MovieList
          movies={this.state.movies}
          onIncStars={this.handleAddStars}
          onDecStars={this.handleDecStars}
          onClickFav={this.handleToggleFav}
          onClickAddtocart={this.handleAddtocart}
        />
      </div>
    );
  }
}

export default App;
