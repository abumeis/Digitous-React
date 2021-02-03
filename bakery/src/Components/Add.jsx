import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            productName: '',
            price: 1
          
        }
    }


    updateProductName  = (event) => {
        this.setState({
            productName: event.target.value
        })
        console.log(this.state.productName)
    }
    
    updatePrice = (event) => {
        this.setState({
            price: event.target.value
        })
        console.log(this.state.price)
    
    }
    add = ()=>{
        this.props.addItems(this.state.productName,this.state.price)
    }
    
      render() {
      return (
        <div>
                <p>Add</p>
                <div className="input-group mb-3">
                    <input onChange={this.updateProductName} type="text" className="form-control" placeholder="Enter item" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" onClick={this.add}>Add</button>
                </div>
                <input  type="range"  min="1" max="10" value={this.state.price}  onChange={ this.updatePrice} ></input>
                <p>{this.state.price}€</p>
            </div>
      );
    }
  } 

  export default Add;
  
