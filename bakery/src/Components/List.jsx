import React from 'react';


class List extends React.Component {

    render() {
        return (
        <div>
             <p>List</p>    
            <ul>
              {this.props.items.map((items) => {
                return (
              <li></li>
            );
          })}
        </ul>     
        </div>

        );
      }
    }
    
    export default List;