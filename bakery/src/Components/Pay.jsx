import React from 'react';
import Card from './Card';


class Pay extends React.Component {
    constructor(props){
        super(props);
        this.state={
          total:0,
          totalTva:0,
          totalEcoTax:0,
          totalTTC :0,
          basket:[]
        }
      } 

handelSelect=(name, price)=>{
console.log("name", name,"price",price)
}

render(){
  return(
    <div> 
        <p >Total={this.state.total} €</p>       
        {this.props.items.map(article => (
                    <Card onClick={this.handelSelect} itemName={article.name} price={article.price}
                    />
                ))}

    </div>  

    )}
  }

export default Pay

//Dans `Pay.jsx` (qui reçoit la props `items` contenant le state `items` de `App.js`) : 
//
//- Créez le state avec les clés suivantes :
//    - `basket` : array vide
//    - `total`, `totalTVA`, `totalEcoTax` et `totalTTC` : valeur par défaut `0`
//- Créer la méthode `handleSelect` qui reçoit les paramètres `name` et `price` et qui fait un console.log des paramètres
//- Dans le `render`, créer une `div` avec un `p` qui affiche la state `total`
//- Charger les `Card` dynamiquement à partir de la props `items` (c’est un array, alors vous pouvez utiliser `map`)
//- Passez les props `itemName`, `price` avec leurs valeurs et `onClick` avec la méthode `handleSelect` dans le composant `Card`

