import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

	
	render() {
		const favArray = this.props.beyArray.filter(beyObj => beyObj.favorite === true)
		const renderFavArray = favArray.map(beyObj => <BeyCard handleFav={this.props.handleFav} key={beyObj.id} beyObj={beyObj} />)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
				{renderFavArray}
      </div>
    );
  }
}
