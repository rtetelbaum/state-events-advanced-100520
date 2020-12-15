import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

	
	render() {
		const renderBeyArray = this.props.beyArray.map(beyObj => <BeyCard handleFav={this.props.handleFav} key={beyObj.id} beyObj={beyObj} />)
    return (
      <div className="index">
        <h1>Index</h1>
				{renderBeyArray}
      </div>
    );
  }
}

export default BeyContainer;
