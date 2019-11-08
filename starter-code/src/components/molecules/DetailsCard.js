import React, { Component } from "react";

class DetailsCard extends Component {
 

  render() {
    return(
      <div className="d-flex" key={this.props.idx}>
      <img
        className="img-icon d-inline"
        src={this.props.image}
        alt="beers.png"
      />
      <div className="pt-5">
        <div>{this.props.name}</div>
        <div>{this.props.tagline}</div>
        <div>{this.props.contributed}</div>
        <div>First Brewed: {this.props.first_brewed}</div>
        <div>Attenuation Level: {this.props.attenuation_level}</div>
        <br></br>
        <div>{this.props.description}</div>

      </div>
    </div>

    ) 
  }
}

export default DetailsCard;
