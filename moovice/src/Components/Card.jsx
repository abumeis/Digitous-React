import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img className="" src={this.props.pic} alt="" />
        </div>
        <h>{this.props.title}</h>
        <p>{this.props.discription}</p>
        <p>{this.props.release_date}</p>
        <p>{this.props.popularity}</p>
      </div>
    );
  }
}
export default Card;
