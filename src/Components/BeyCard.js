import React from "react";

const BeyCard = (props) => {

	const localClick = () => {
		props.handleFav(props.beyObj)
	}

  return (
    <div className="card">
			<h3>{props.beyObj.name}</h3>
			<img src={props.beyObj.img} alt="Beyonce" onClick={localClick} />
    </div>
  );
};

export default BeyCard;
