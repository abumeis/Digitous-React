import React from "react";
import moment from "moment";
import Card from "./Card";

class Weekly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    let TODAY = moment().format("YYYY-MM-DD");
    let LAST_WEEK = moment().add(-7, "days").format("YYYY-MM-DD");
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

export default Weekly;
