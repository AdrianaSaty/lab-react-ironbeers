import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AllBeers from './components/AllBeers';
import BeersDetails from './components/BeersDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import axios from 'axios';


class App extends Component {
  // state = {
  //   allBeers : []
  // }

  // async componentDidMount() {
  //   let allBeers = await this.getAllBeers();

  //   this.setState({
  //     allBeers: allBeers,
  //   })
  // }


  // getAllBeers = async () => {
  //   const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');

  //   // console.log(response.data)
  //   return response.data;
  // }

  render() {
    // console.log(this.allBeers)
    return (
      <div >
         <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route path="/beers/:_id" component={BeersDetails} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
