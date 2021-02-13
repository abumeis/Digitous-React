import React from "react";
import Card from "./Card";

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d921ecda80f1fbd29ea921afc924198"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({
          movies: response.results,
        });
      });
  }
  render() {
    return (
      <div className="">
        {this.state.movies.map((movie) => {
          return (
            <Card
              pic={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              title={movie.title}
              discription={movie.overview}
              release_date={movie.release_date}
              popularity={movie.popularity}
            />
          );
        })}
      </div>
    );
  }
}

export default Popular;
