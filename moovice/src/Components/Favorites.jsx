import React from "react";
import Card from "./Card";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };
  }

  getStorage = () => {
    return JSON.parse(localStorage.getItem("favorite") || []);
  };

  getMovie = (id) => {
    fetch(
      `http://api.themoviedb.org/3/movie/${id}?api_key=1d921ecda80f1fbd29ea921afc924198`
    )
      .then((response) => response.json())
      .then((response) => {
        const FavMovies = this.state.movies;
        FavMovies.push(response);
        this.setState({
          movies: FavMovies,
        });
      });
  };

  componentDidMount() {
    this.state.favIDs.map((movies) => {
      return this.getMovie(movies);
    });
  }

  render() {
    console.log(this.state.favIDs);
    return (
      <div>
        <p>Favorites</p>
        {this.state.favIDs.length === 0 && <p>your fav list is empty </p>}
        {this.state.movies.map((movie) => {
          return (
            <Card
              pic={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.title}
              release_date={movie.release_date}
            />
          );
        })}
      </div>
    );
  }
}
export default Favorites;
