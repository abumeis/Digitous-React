import React from "react";
import './App.css';
import './components/Counter.css'
import Counter from  "./components/Counter";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1 :0,
      count2 :0,
    };
   
  }

//  incrementCount1 = () => {
//    if(this.state.count1 === 100){ 
//    return
//   } else if (this.state.count1=== this.state.count2){
//     this.decrementCount2();
//     this.state.count1 ++;
//    this.setState({count1: this.state.count1 });
//   }else{
//     this.state.count1++;
//     this.setState({count1: this.state.count1})
//   
//   }
//   }
// decrementCount1 = () => {
//   if(this.state.count1 === 0){ 
//return
//  } else {
//    this.state.count1--;
//   this.setState({count1: this.state.count1});
//  }
//}
//incrementCount2 = () => {
//  if(this.state.count2===100){
//  return
//}else{
//  this.state.count2++;
//  this.setState({count2: this.state.count2});
//}
//}
//decrementCount2 = () => {
// if(this.state.count2 === 0){ 
//return
//} else if (this.state.count2=== this.state.count1){
//  this.decrementCount1();
//  this.state.count2 --;
// this.setState({count2: this.state.count2 });
//}else{
//  this.state.count2 --;
//  this.setState({count2: this.state.count2})
//}
//}
incrementCount1 = () => {
  let result = this.state.count1;
  if (result === 100) {
    return;
  } else if (result === this.state.count2) {
    this.incrementCount2();
    result++;
    this.setState({ count1: result });
  } else {
    result++;
    this.setState({ count1: result });
  }
};
decrementCount1 = () => {
  let result = this.state.count1;
  if (result === 0) {
    return;
  } else {
    result--;
    this.setState({ count1: result });
  }
};

incrementCount2 = () => {
  let result = this.state.count2;
  if (result === 100) {
    return;
  } else {
    result++;
    this.setState({ count2: result });
  }
};
decrementCount2 = () => {
  let result = this.state.count2;
  if (result === 0) {
    return;
  } else if (result === this.state.count1) {
    this.decrementCount1();
    result--;
    this.setState({ count2: result });
  } else {
    result--;
    this.setState({ count2: result });
  }
};

  render() {
    return (
      <div>
        <h1 style={{textAlign: "center"}}>Counter!</h1>
        <Counter count1={this.state.count1} addFunction={this.incrementCount1} removeFunction={this.decrementCount1} />
        <Counter count2={this.state.count2} addFunction={this.incrementCount2} removeFunction={this.decrementCount2} />
       
      </div>
    );
  }
}

export default App;



