import React from 'react';

class Button extends React.Component {
    render() {
        return(
            <button type="button" className={this.props.isSelected} onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}


export default Button;