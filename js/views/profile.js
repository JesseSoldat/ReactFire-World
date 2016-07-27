import React from 'react';
import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin'

export default React.createClass({
	mixins: [ReactFireMixin],

  	getInitialState(){
  		let user = this.props.uid;
  		console.log(user);
  		return {
  			users: [],
  			uid: user
  			
  		}
  	},
  	componentWillMount() {
  		let uid = this.state.uid;
  	
	  	let firebaseRef = firebase.database().ref('users/' + uid + '/profile');

	  	this.bindAsArray(firebaseRef, 'users');	

	  	firebaseRef.on('value', function(snapshot){
	  		let fNameElem = document.getElementById('fName');
	  		let lNameElem = document.getElementById('lName');
	  	
	  		let fName = snapshot.val().fName;
	  		fNameElem.textContent = fName;

	  		let lName = snapshot.val().lName;
	  		lNameElem.textContent = lName;
	  	})
	  				
	},

	addProfile(){	
		this.props.add(this.state.uid);
	
	},

	render(){
		return(
			<div>
				<h3>Profile</h3>
				<h3 id="fName"></h3>
				<h3 id="lName"></h3>

				<button id="addProfile" onClick={this.addProfile}>Add</button>
			</div>
			);
	}
});