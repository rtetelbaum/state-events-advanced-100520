import { render } from "enzyme";
import React from "react";
import api from './api'
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites";

class App extends React.Component{
  state={
    beyArray: api
  }

  addToFavorites = (beyObjId) => {
    const newBeyArray = [...this.state.beyArray]
    let foundObj = newBeyArray.find(beyEl => beyEl.id === beyObjId)

    foundObj.favorite = true

    this.setState({beyArray: newBeyArray})
    console.log("found Object:", foundObj)
  }

  removeFromFavorites = (beyObjId)=>{
     const newBeyArray = [...this.state.beyArray]
    let foundObj = newBeyArray.find(beyEl => beyEl.id === beyObjId)

    foundObj.favorite = false

    this.setState({beyArray: newBeyArray})
    alert("hot sauce...swag")
  }

  allFavoriteBeys = ()=>{
    return this.state.beyArray.filter(beyEl => beyEl.favorite)
  }

  render(){

    return (
      <div className="container" >
        <BeyContainer beyArray={this.state.beyArray} clickHandler={this.addToFavorites}/>


        <Favorites  clickHandler={this.removeFromFavorites} beyArray={this.allFavoriteBeys()} />
      </div>
    );
  }
};

export default App;
