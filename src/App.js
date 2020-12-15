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

	handleFav = (favedBeyObj) => {
		const newBeyArray = [...this.state.beyArray]
		const foundBeyObj = newBeyArray.find(beyObj => beyObj.id === favedBeyObj.id)
		if (foundBeyObj.favorite === false) {
			foundBeyObj.favorite = true
			this.setState({beyArray: newBeyArray})
		} else if (foundBeyObj.favorite === true) {
			foundBeyObj.favorite = false
			this.setState({beyArray: newBeyArray})
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
