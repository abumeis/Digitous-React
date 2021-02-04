import React from 'react';
import Card from './Card';


class Pay extends React.Component {
    constructor(props){
        super(props);
        this.state={
          total:0,
          totalTva:0,
          totalEcoTax:0,
          totalTTC :0,
          basket:[]
        }
      } 

      
handelSelect=(name, price)=>{
console.log("name", name,"price",price)
const obj  = {
    name: name,
    price: price
  };
  const newBasket = this.state.basket;
  newBasket.push(obj );
  console.log('newBasket', newBasket);
  this.setState({
    basket : newBasket
  });
 
}

render(){
  return(
    <div> 
        <div className="row">    
        <div>{this.props.items.map((article, index) => (
        <Card  key={index} onClick={this.handelSelect} itemName={article.name} price={article.price}></Card>
         ))}</div>
        </div>


        <div className="row">
        <div className="col-12">
          <p>TTC: {this.state.total} €</p>
        </div>
        <div className="col-12">
          <p>TVA: {this.state.totalVat} €</p>
        </div>
        <div className="col-12">
          <p> Eco tax: {this.state.totalEcoTax} €</p>
        </div>
        <div className="col-12">
          <p style={{fontSize: "2em"}}>Total: {this.state.totalAfterTax} €</p>
        </div>
      </div>
    </div>  

    )}
  }

export default Pay





