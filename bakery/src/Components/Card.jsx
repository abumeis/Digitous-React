
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
   //    .then((res)=>res.json())
   //    .then((json)=>{
   //      this.setState({
   //        //image:json.image
   //      })
   //    })
   //}


render(){
  return(
    <div className="col-6 col-md-3">
  
    
    <button onClick={(e) =>this.props.onClick (this.props.itemName, this.props.price)}
     className="btn btn-outline-secondary" type="button"><img src= {this.state.image} alt=""/></button> 
  </div>  
    )}
  }
export default Card

