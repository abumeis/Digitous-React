import React from "react";

 class Counter extends React.Component {

    
    render() {
        const {count1, count2 ,addFunction ,removeFunction} = this.props;
        return (
            <div className="container "style={{textAlign: "center"}}>
                 <h2>{count1}</h2>
                 <h2>{count2}</h2>
            <button className="btn" style={{color: "green"}} onClick={addFunction}><span>+</span></button>
            <button className="btn" style={{color: "red"}} onClick={removeFunction}><span>-</span></button>

            </div>
        );
     }
}

export default Counter;



