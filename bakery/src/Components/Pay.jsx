import React from 'react';
import Card from './Card';


class Pay extends React.Component {

handelSelect=(name, price)=>{
console.log("name", name,"price",price)
}

render(){
  return(
    <div> 
        <Card onClick={this.handelSelect} ></Card>
    </div>  

    )}
  }

export default Pay

