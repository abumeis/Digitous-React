import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            price: 1
          
        }
    }
      render() {
      return (
        <div>
                <p>Add</p>
                <div className="input-group mb-3">
                    <input onChange={this.props.updateProductName} type="text" className="form-control" placeholder="Enter item" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.addItems}>Add</button>
                </div>
                <input  type="range"  min="1" max="10"  onChange={ this.props.updatePrice} ></input>
                <p>{this.state.price}€</p>
            </div>
      );
    }
  }

  export default Add;
  
