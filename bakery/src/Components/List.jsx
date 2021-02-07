import React from 'react';


class List extends React.Component {

    render() {
        return (
        <div>
            <h2 style={{textAlign:"center", paddingBottom:"20px"}}>Products list</h2>    
            <ol style={{ listStyle: "none"}}>
              {this.props.items.map((items, index) => {
                return (
              <li className="article-list__item"  key={index}> <span style={{fontFamily:"courgette"}}>{ items.name} </span > <span style={{float:"right", fontWeight:"bold"}}>{items.price}€</span> </li>);
            }) }
        </ol>    
        
        </div>

        );
      }
    }
    
    export default List;

