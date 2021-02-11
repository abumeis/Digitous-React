import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; 
import Weekly from "./Components/Weekly"
import WeeklyBattle from "./Components/WeeklyBattle"
import Popular from "./Components/Popular"
import PopularBattle from "./Components/PopularBattle"
import Favorites from "./Components/Favorites"
//import Card from "./Components/Card"


 class App extends React.Component {

  render() {
  return (
  <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       <Link class="nav-link active"  to="/">Weekly</Link>
       <Link class="nav-link" to="/WeeklyBattle/">WeeklyBattle</Link>
       <Link class="nav-link" to="/Popular/">Popular</Link>
       <Link class="nav-link" to="/PopularBattle/">Popular battle</Link>
       <Link class="nav-link" to="/Favorites/">Favorites</Link>
      </div>
    </div>
  </div>
</nav>
      <Switch>
        <Route path="/WeeklyBattle/">
          <WeeklyBattle />
        </Route>
        <Route path="/Popular/">
          <Popular />
        </Route>
        <Route path="/PopularBattle/">
          <PopularBattle />
        </Route>
        <Route path="/Favorites">
          <Favorites />
        </Route>
        <Route path="/">
          <Weekly />
        </Route>
      </Switch>
    </BrowserRouter>
    );
    }
    }
   
     


export default App;


