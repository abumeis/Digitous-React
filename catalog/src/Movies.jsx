import React from 'react'

 class Movies extends React.Component {
    render() {
        return (
          
                <div className="container mt-5" >
                <div className="row" >
                <div className="col" style={{textAlign:"center", width:"300px", heght:"auto" }}>
                <img src={this.props.image}></img>
                </div>
                </div>
                <div class="row  mt-5 ">
                <div class="col-3">
                <h4>Film Id : {this.props.id}</h4>
                </div>
                <div class="col-3">
                <h4>Title : {this.props.title}</h4>
                </div>
                <div class="col-3">
                <h4>Director : {this.props.director}</h4>
                </div>
                <div class="col-3">
                <h4>Stars : {this.props.stars}</h4>
                </div>
                <p style={{textAlign:"center"}}> <strong>Description :</strong> {this.props.description}</p>
            </div>
            </div>
        )
    }
}
export default Movies




