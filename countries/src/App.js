import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "./Components/Button";
import Card from "./Components/Card";




class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name : "",
      capital: "",
      flag : "",
      population: "",
      region: "",
      }
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        name: json[0].name,
        capital: json[0].capital,
        flag: json[0].flag,
        population: json[0].population,
        region: json[0].region,
      })
    });
  }
  getCountry (country ) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      this.setState({
        name: json[0].name,
        capital: json[0].capital,
        flag: json[0].flag,
        population: json[0].population,
        region: json[0].region,
      })
    });
  }
 

  render() {
    return (
      <div className="container"> 
      <h1 style={{ textAlign: "center", paddingTop:"36px" }}>Country selector</h1>
      <div className="row mt-5 justify-content-center">
          <Button onClick={(e) => this.getCountry("france")}>France</Button>
            <Button onClick={(e) => this.getCountry("brazil")}>Brazil</Button>
            <Button onClick={(e) => this.getCountry("croatia")}>Croatia</Button>
            </div>
            <div className="row mt-3 justify-content-center">
            <Card name={this.state.name} capital= {this.state.capital} flag={this.state.flag}
             population={this.state.population} region= {this.state.region}></Card>
    
        </div>
        </div>

         
       
    );
  }
}

export default App;

