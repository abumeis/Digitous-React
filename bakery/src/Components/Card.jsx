
import React from 'react';


class Card extends React.Component {
constructor(props){
    super(props);
    this.state={
     image :"/images/item.png"
    }
  }

 //   componentDidMount(){
 //     let productImg = this;
 //     fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}.png`)
 //       .then( function (res) {
 //         return res.blob();
 //       }).then( function (blob) {
 //       let objectURL = URL.createObjectURL(blob);
 //       productImg.setState({image: objectURL});
 //     });
 //   }


   



render(){
  return(
    <div className="col-3">
    <button onClick={(e) =>this.props.onClick (this.props.itemName, this.props.price)}  
     className="btn btn-outline-secondary" type="button"><img src= {this.state.image} alt="" style={{ maxWidth: "200px" }}/></button> 
     <p>Product name: {this.props.itemName}</p>
      <p>Price: {this.props.price} € </p>
  </div>  
    )}

  }
export default Card







