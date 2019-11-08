import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
    state = {

    }
    
   
    render () {
        return ( 
            <div>
                <Link to="/beers">
                    <img className="img-home"
                        src='./images/beers.png'
                        alt='beers.png'    
                    />
                    <div className="container">
                        <h2>All Beers</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                </Link>
                <Link to="random-beer">
                    <img className="img-home"
                        src='./images/random-beer.png'
                        alt='random-beer.png'    
                    />
                    <div className="container">
                        <h2>Random Beer</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                </Link>
                <Link to="new-beer">
                    <img className="img-home"
                        src='./images/new-beer.png'
                        alt='new-beer.png'    
                    />
                    <div className="container">
                        <h2>New Beer</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                </Link>
                
            </div>
        )
    }
}

export default Home;
