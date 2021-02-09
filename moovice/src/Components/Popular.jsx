import React from "react";
//import Card from "./Card";




 class Popular extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          movies : [],

        }
    }


  
    componentDidMount() {
      fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d921ecda80f1fbd29ea921afc924198")
        .then((response) => {
          return response.json();})
        .then((response) => {
          console.log(response.results)
          this.setState({
            movies:response.results,

        });

        })
       
    }


   

  render() {
  return (
    <div className="">
        {this.state.movies.map(list => {
            </div>                   
                         
      );
    }
 }


export default  Popular;


