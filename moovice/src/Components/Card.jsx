import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          image: "/img/filmBg.png" ,
          titre: '',
          annéeDeSortie: "",
          discription: '',
        };
      }


 
    
  render() {
    //const picture = `https://image.tmdb.org/t/p/w300${this.props.poster_path}`;
    //console.log('this.props', this.props);
    return (
      <div>
         
         <img className="" src={this.props.pic} alt="" />
            {this.props.title}
            {this.props.discription}
            {this.props.release_date}
            {this.props.popularity}
        
      </div>
    );
  }
}
export default Card;