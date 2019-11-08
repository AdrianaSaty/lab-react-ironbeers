import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import AllBeers from './components/pages/AllBeers';
import BeersDetails from './components/pages/BeersDetails';
import RandomBeer from './components/pages/RandomBeer';
import NewBeer from './components/pages/NewBeer';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
 

  render() {
    return (
      <div >
         <BrowserRouter>
          <Link to="/">
            <img 
                src='./images/home.png'
                alt='home.png'    
              />
          </Link>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={AllBeers} />
          <Route path="/beers/:id" render={(props) => <BeersDetails {...props} /> } />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
