import React, { Component } from 'react';
import config from '../config'

const firebase = require('firebase');

const API_KEY = '22f7728f'
 

export class AddMovie extends Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	movie: {},
	    	error: '',
	    	formStatus: ''
	    }
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleChange = this.handleChange.bind(this);
  	}

	handleChange(e) {
		e.preventDefault();
		const {name, value} = e.target;
		let error = this.state.error;

		this.setState({ error, [name]: value })
	}
	handleSubmit(e){
	  	e.preventDefault(); //dont cause page to refresh on submit
	  	let movieID = e.target.elements.movieID.value
		const moviesRef = firebase.database().ref('movies');

	  	fetch('https://www.omdbapi.com/?i='+ movieID + '&apikey=' + API_KEY)
	  	.then(res => res.json())
		.then((data) => {
			this.setState({ 
				movie: data
			});
		  	moviesRef.child(movieID).set(this.state.movie);
		})
		.catch(console.log);
		let formStatus = "Your movie was added :)";

		moviesRef.child(movieID).once("value", snapshot => {
			if(snapshot.exists()){
				formStatus = "Movie already added!";
			}
		});

	  	this.setState({
	  		movie: '',
	  		movieID: '',
	  		error: '',
	  		formStatus: formStatus
	  	});

	}
	render() {
		const { formStatus} = this.state;
		return (
			<div>
				<div className="container">
		    		<section className='add-item'>
					    <h2>Add a New Movie here:</h2>
						<form onSubmit={this.handleSubmit}>
							<textarea type='text' cols="100" rows="3" name="movieID" placeholder="Enter IMDb ID"  />
							{ formStatus.length > 0 && 
		    					<p> {formStatus} </p> }
							<button>Submit</button>
						</form>
					</section>
				</div>
			</div>
		);
	}
}
export default AddMovie;