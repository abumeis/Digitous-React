import React from 'react';

class Card extends React.Component {



 
    
  render() {
 
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