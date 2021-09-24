import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './HomePage';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/beers" component={Beers}/>
        {/* <Route exact path="/random-beer" component={RandomBeer}/> */}
        {/* <Route exact path="/new-beer" component={NewBeer}/> */}
      </Switch>
    </>
  );
}

export default App;
