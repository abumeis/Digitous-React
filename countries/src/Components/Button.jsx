import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <div>
            <button type="button" className= "form-control btn btn-primary sm "onClick={this.props.onClick}>{this.props.children}</button>
            </div>

            
        );
    }
}


export default Button;