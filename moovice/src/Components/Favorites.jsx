import React from "react";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favId: localStorage.getItem("favorite") || [],
    };
  }
  render() {
    return (
      <div className="">
        <h1>favorites</h1>
      </div>
    );
  }
}

export default Favorites;
