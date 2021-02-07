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
    price: price,
  };
  const newBasket = this.state.basket;
  newBasket.push(obj );
  //console.log('newBasket', newBasket);
  this.setState({
    basket : newBasket
  });
  this.total()
}

// to calculate the total of our basket including taxation
total=()=>{
let total=0
let totalEcoTax=0
let totalTva=0

let basket=this.state.basket
console.log ("basket", basket)
for(let i=0;i <basket.length;i++){
      total+=parseInt(basket[i].price) ;
      totalEcoTax+=basket[i].price*0.03;
console.log("basket i price =" ,basket[i].price,"basket i =",basket[i],"message total",total)
}
totalTva = total*0.2 
let totalTTC = total + totalTva + totalEcoTax ;
this.setState({
  total:total,
  totalTTC :totalTTC.toFixed(2),
  totalEcoTax:totalEcoTax.toFixed(2),
  totalTva :totalTva.toFixed(2)
   
})
  console.log("total" ,total, "totalTva" ,totalTva ,"totalEcoTax",totalEcoTax)
}


clear=()=>{
  const total=0
  const totalEcoTax=0
  const totalTva=0
  const totalTTC =0
  const basket=this.state.basket
  
  for(let i=0 ;i<basket.length;i++){
    basket[i].price=0
  }
  this.setState({
    total,
    totalEcoTax,
    totalTva,
    totalTTC, 
  
  })
}










render(){
  return(
    <div className="col-12"> 
    <div id="total" className="row"> 
    <div className="col-3"> 
          <p>TVA: {this.state.totalTva} €</p>
    </div>
    <div className="col-3"> 
          <p> ECO TAX: {this.state.totalEcoTax} €</p>
    </div>
    <div className="col-3"> 
          <p>TTC: {this.state.totalTTC} €</p>
          </div>
          <div className="col-3"> 
          <p style={{fontSize: "bold"}}>TOTAL: {this.state.totalTTC} €</p>
          </div>
    </div>  
     <div className="row pt-5"> 
        {this.props.items.map((article, index) => (
        <Card  key={index} onClick={this.handelSelect} itemName={article.name} price={article.price}></Card>
         ))}
      </div>  
      <button onClick={this.clear} className="btn btn-primary" type="button">clear</button>
    
    </div>  

    )}
  }

export default Pay


