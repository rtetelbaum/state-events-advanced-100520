import React from "react"
import "./App.css"
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'

class App extends React.Component {

	state = {
		beyArray: []
	}

	componentDidMount() {
		fetch('http://localhost:4000/beys')
			.then(response => response.json())
			.then(data => this.setState({beyArray: data}))
	}

	handleFav = (beyObj) => {
		const foundBeyObj = this.state.beyArray.find(bey => bey.id === beyObj.id)
		if (foundBeyObj.favorite === false) {
			// this.setState(prevState => ({foundBeyObj: {...prevState.foundBeyObj, favorite: true}}))
			alert("Why isn't this working?")
		} else if (foundBeyObj.favorite === true) {
			// set state false
			alert("I got a hot sauce in my bag, swag")
		}
	}

	render() {
		return (
			<div className="container" >
				{this.state.beyArray.length === 0 ? <p>LOADING BEYS...</p> : <BeyContainer handleFav={this.handleFav} beyArray={this.state.beyArray} />}
				{this.state.beyArray.length === 0 ? <p>LOADING FAVS...</p> : <Favorites handleFav={this.handleFav} beyArray={this.state.beyArray} />}
			</div>
		)
	}
}

export default App;
