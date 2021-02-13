import React from "react";
import moment from "moment";
import Card from "./Card";

class WeeklyBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
    };
  }

  componentDidMount() {
    const TODAY = moment().format("YYYY-MM-DD");
    const LAST_WEEK = moment().add(-7, "day").format("YYYY-MM-DD");
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=1d921ecda80f1fbd29ea921afc924198`
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

  onClickCardBattle = (num, idMovie) => {
    let film = num + 2;
    this.setState({
      currentBattle: film,
    });
    console.log("idMovie", idMovie);
    let save = localStorage.getItem("favorite");
    let favList = [];
    if (save) {
      console.log("favList1", favList);
      favList = JSON.parse(save);
      favList.push(idMovie);
      favList = Array.from(new Set(favList));
      console.log("push", favList);
      localStorage.setItem("favorite", JSON.stringify(favList));
    } else {
      console.log("favList2", favList);
      favList = [];
      favList.push(idMovie);
      localStorage.setItem("favorite", JSON.stringify(favList));
    }
  };

  render() {
    return (
      <div className="">
        <h1>PopularBattle</h1>
        <div>
          {this.state.movies
            .slice(this.state.currentBattle, this.state.currentBattle + 2)
            .map((movie, index) => {
              return (
                <button
                  onClick={() =>
                    this.onClickCardBattle(this.state.currentBattle, movie.id)
                  }
                >
                  <p key={index}>
                    <Card
                      pic={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      title={movie.title}
                    />
                  </p>
                </button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default WeeklyBattle;
