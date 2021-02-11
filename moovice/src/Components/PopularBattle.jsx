import React from "react";
import Card from "./Card";

class PopularBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
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

  onClickCardBattle = (id) => {
    let film = id + 2;
    this.setState({
      currentBattle: film,
    });
  };

  render() {
    if (this.state.movies.length === this.state.currentBattle)
      return <p>Vous avez parcouru tous les films</p>;
    return (
      <div className="">
        <h1>PopularBattle</h1>
        <div>
          {this.state.movies
            .slice(this.state.currentBattle, this.state.currentBattle + 2)
            .map((movie) => {
              return (
                <button
                  onClick={() =>
                    this.onClickCardBattle(this.state.currentBattle)
                  }
                >
                  <Card
                    pic={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    title={movie.title}
                  />
                </button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default PopularBattle;
