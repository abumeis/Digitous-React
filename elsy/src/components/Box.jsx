import React from "react";

 class Box extends React.Component {

    
    render() {
        const {icon, value ,unit,color,min, max, onChange,moreSteps,lessSteps} = this.props;

        if (icon === "local_drink") {
        return ( 
          <div className="box col-sm-3 col-6">   
              <div className="row">
               <span className="material-icons" style= {{ fontSize : "100px",textAlign : "center", color:color }}>{icon}</span>
               <p style= {{ textAlign : "center"}}> {this.props.funCalculateWater} {value} {unit} </p>
               <p style= {{ textAlign : "center"}}> To drink</p>
              </div>
            </div>
        );
    }else if(icon === "directions_walk"){
        return(
            <div className="box col-sm-3 col-6">   
            <div className="row">
             <span className="material-icons" style= {{ fontSize : "100px",textAlign : "center", color:color }}>{icon}</span>
             <p style= {{ textAlign : "center"}}> {value} {unit} </p>
             <div style= {{ textAlign : "center" }}>
             <button className="btn" style={{color: "green"}} onClick={moreSteps}><span>+</span></button>
            <button className="btn" style={{color: "red"}} onClick={lessSteps}><span>-</span></button>
            </div>
            </div>
          </div>
            
        );

    
    }else{
        return ( 
            <div className="box col-sm-3 col-6">   
                <div className="row">
                 <span className="material-icons" style= {{ fontSize : "100px",textAlign : "center", color:color }}>{icon}</span>
                 <p style= {{ textAlign : "center"}}> {value} {unit} </p>
                 <input type="range" id="volume" min={min} max={max} value={value}  onInput={onChange} ></input>
                  
                </div>
              
              </div>
               );

         }
    }
}
export default Box;