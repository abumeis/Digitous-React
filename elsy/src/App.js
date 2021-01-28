import React from "react";
import "./App.css";
import "./style/global.css";
import Box from  "./components/Box";
const tempMin=-20;
const tempMax=40;
const heartMin= 80;
const heartMax= 180;
const stepsMin= 0;
const stepsMax= 50000;
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          water:0,
          heart: 180,
          temperature: -10,
          steps: 3000,
        };
      }

      onHeartChange = (value) => {
        this.setState({heart:value.target.value})
        this.calculateWater()

      }
      //onStepsChange = (value) => {
      //  this.setState({steps:value.target.value})
      //  this.calculateWater()
//
      //}  Bonus 1
      incrIncreaseSteps = ()=>{
        this.setState({steps:this.state.steps + 1000})
      }
      
      decreaseSteps=()=>{
        this.setState({steps: this.state.steps - 1000})
      }
      
      onTemperatureChange = (value) => {
        this.setState({temperature:value.target.value})
        this.calculateWater()
      }
    

      
 
      calculateWater = (temperature,heart, steps ) => {
        let eau = 1.50 ;
        console.log("eau debut", eau)
        if (temperature > 20){
          eau += (0.02*(temperature-20))
          console.log("ChecT L'eau", eau)

        }
        if (heart > 120){
          eau += (0.0008*(heart-120))
          console.log("ChecH L'eau", eau)
        }
        if (steps > 10000){
          eau += (0.00002*(steps-10000))
          console.log("ChecS L'eau", eau)

        }
        console.log("FIN L'eau", eau)
        eau=eau * 100 / 100
        return eau.toFixed(2)
      }
           
  /// Bonus : another sulotion by calling the function with Zero parameter and calling the the value of water
  
      /////{this.props.funCalculateWater} 
     // calculateWater = () => {
     //   let eau = 1.5 ;
     //   console.log("eau debut", eau)
     //   if (this.state.temperature > 20){
     //     eau += (0.02*(this.state.temperature-20))
     //     console.log("ChecT L'eau", eau)
//
     //   }
     //   if (this.state.heart > 120){
     //     eau += (0.0008*(this.state.heart-120))
     //     console.log("ChecH L'eau", eau)
//
     //   }
     //   if (this.state.steps > 10000){
     //     eau += (0.00002*(this.state.steps-10000))
     //     console.log("ChecS L'eau", eau)
//
     //   }
     //   console.log("fin L'eau", eau)
     //   eau=eau * 100 / 100
     //   
     //   eau= eau.toFixed(2)
     //   this.setState({water :eau})
     // }
    render() {
        return ( 
          <div className="container-fluid">
              <div className="row">
            {/*Water */}
            <Box icon={"local_drink"} color={"#3A85FF"} 
            funCalculateWater={this.calculateWater(this.state.temperature,this.state.heart,this.state.steps)} unit={"L"}/>
            {/*Steps*/}
            <Box icon={"directions_walk"} color={"black"} min={stepsMin} max={stepsMax} unit={"steps"}
              value={this.state.steps} moreSteps={this.incrIncreaseSteps} lessSteps={this.decreaseSteps}/>
            {/*Heart*/}
            <Box icon={"favorite"} color={"red"} min={heartMin} max={heartMax} unit={"bpm"}
             value={this.state.heart}  onChange={this.onHeartChange}/>
            {/*Temperature*/} 
            <Box icon={"wb_sunny"} color={"yellow"} min={tempMin} max={tempMax} unit={"°C"}
            value={this.state.temperature} onChange={this.onTemperatureChange}/>
          
            </div>
       
            </div>
        );
    }

}
export default App;