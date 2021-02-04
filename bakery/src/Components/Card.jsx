
import React from 'react';


class Card extends React.Component {
constructor(props){
    super(props);
    this.state={
     image :"/images/item.png"
    }
  }
 
   //componentDidMount(){
   //  fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}`)
   //    .then((res)=>res.())
   //    .then(()=>{
   //      this.setState({
   //        //image:json.image
   //      })
   //    })
  // const objectURL = URL.createObjectURL(object)
  // response.blob().then(function(myBlob) {
  //  // do something with myBlob
  //});
   //}


render(){
  return(
    <div className="col-12">
    <button onClick={(e) =>this.props.onClick (this.props.itemName, this.props.price)}
     className="btn btn-outline-secondary" type="button"><img src= {this.state.image} alt="" style={{ maxWidth: "200px" }}/></button> 
      <h5>Product name: {this.props.itemName}</h5>
      <h5>Price: {this.props.price} € </h5>
      
  </div>  
    )}

  }
export default Card





