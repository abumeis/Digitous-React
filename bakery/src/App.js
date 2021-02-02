import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './Components/Add';
import List from './Components/List';
//import Pay from './Components/Pay';
import Button from './Components/Button';




class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        activeTab: "add",
        items: [],
        productName: '',
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

  // To add the new items to the items array
  addItem = () => {
    const items = {
      name: this.state.productName,
      price: this.state.price
    };
    const newItems = this.state.items;
    newItems.push(items);
    console.log('newItems', newItems);
    this.setState({
      items: newItems
    });
  }

  

//To navigate between add and list and pay
  selectAdd = () => {
    this.setState({
      activeTab: "add"
    });
  }

  selectList = () => {
    this.setState({
      activeTab: "list"
    });
  }

  selectPay = () => {
    this.setState({
      activeTab: "pay"
    });
  }



  render() {
    return (
        <div className="container ">
          <div className="row">
            <div className="col-12">
           <h1 className="p-5 "  style= {{ fontSize : "50px",textAlign : "center" }}>Bakery </h1>
           <Button isSelected={this.state.activeTab === "add" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectAdd}>Add</Button>
           <Button isSelected={this.state.activeTab === "list" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectList}>List</Button>
           <Button isSelected={this.state.activeTab === "pay" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectPay}>Pay</Button>


            {this.state.activeTab === 'add' && 
            <Add
            price
            name={this.state.productName}
            updateProductName={this.updateProductName}
            updatePrice={this.updatePrice}
            addItems={this.addItem } />}  

              {this.state.activeTab === "Add" && <Add></Add>} 
            {this.state.activeTab === 'list' && <List items={this.state.items} />}  





            </div>
          </div>
        </div>
    );
  }
}

export default App;

