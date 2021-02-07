import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Add from './Components/Add';
import List from './Components/List';
import Pay from './Components/Pay';
import Button from './Components/Button';




class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        activeTab: "add",
        items: [],

      }
  }


  // To add the new items to the list array
  addItem = (productName, price) => {
    console.log("productName",productName, "price" ,price)
    const items = {
      name: productName,
      price: price
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
           <h1 className="m-5 " style={{textAlign: "center" , textShadow:""}}>Bakery </h1>
           <div className="row">
            <div className="col-4">
           <Button isSelected={this.state.activeTab === "add" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectAdd}>Add</Button>
           </div>
           <div className="col-4">
           <Button isSelected={this.state.activeTab === "list" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectList}>List</Button>
           </div>
           <div className="col-4">
           <Button isSelected={this.state.activeTab === "pay" ? "form-control btn btn-primary" : "form-control btn btn-light"} onClick={this.selectPay}>Pay</Button>
           </div>
           </div>

           <div className="row  justify-content-center pt-5">
           {this.state.activeTab === 'add' && <Add addItems={this.addItem }/>} 
           </div>
           <div className="row  justify-content-center pt-5">
            {this.state.activeTab === 'list' && <List items={this.state.items} />}
            </div>
            <div className="row justify-content-center pt-5">    
            {this.state.activeTab === 'pay' && <Pay items={this.state.items}/>}
            </div>
          </div>
    );
  }
}

export default App;

