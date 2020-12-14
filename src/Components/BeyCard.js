import React from "react";

const BeyCard = (props) => {

  //thunk 
  function localClickHandler(props){
    props.clickHandler(props.beyObj)
  }
  return (
    <div className="card">
     <h1>{props.beyObj.name}</h1>
     <img alt="beyonce" src={props.beyObj.img} onClick={localClickHandler}/>
    </div>
  );
};

export default BeyCard;
