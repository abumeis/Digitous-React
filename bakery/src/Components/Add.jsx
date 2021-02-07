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
           <div className="input-group mb-3">
                    <input onChange={this.updateProductName} type="text" className="form-control" placeholder="Add item" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" onClick={this.add}>Add</button>
        </div>
                <div>
                <input  type="range"  min="1" max="10" value={this.state.price}  onChange={ this.updatePrice}  style={{width:"400px"}}></input>
                <p><span style={{float:"right", fontWeight:"bold", fontSize:"30px"}}>{this.state.price}€</span></p>
                </div>
            </div>
      );
    }
  } 

  export default Add;
  
