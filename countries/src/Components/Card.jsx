
import React from "react";
class Card extends React.Component {
  render() {
      return (
          <div>
              <div >
                  <img src={this.props.flag} style={{ maxWidth: "200px" }} alt=""/>
                  <div className="card-body text-dark text-left">
                  <strong>Country: {this.props.name}</strong>
                      <p>Capital: {this.props.capital}</p>
                      <p>Region: {this.props.region}</p>
                      <p>Population: {this.props.population}</p>
                  </div>
              </div>
          </div>
      )
  }
}

export default Card;
