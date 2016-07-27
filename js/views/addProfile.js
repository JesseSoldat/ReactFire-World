import React from 'react';
import ReactFireMixin from 'reactfire';


export default React.createClass({
	mixins: [ReactFireMixin],


	componentWillMount() {
  		let uid = this.props.uid;
  	
	  let firebaseRef = firebase.database().ref('users/' + uid + '/profile');

	  this.bindAsArray(firebaseRef, 'users');	
	  				
	},

	addUser(){
		let uid = this.props.uid;
		let fName = document.getElementById('fNameAdd').value;
		let lName = document.getElementById('lNameAdd').value;
		let avatar = document.getElementById('avatarAdd').value;
		console.log(fName);
		console.log(lName);

		this.firebaseRefs['users'].set({
			fName: fName,
			lName: lName,
			uid: uid,
			avatar: avatar,
		});

	},
	render(){
		return(
		<div>
			<h3>Add</h3>
			<form onSubmit={this.addUser}>
				<input id="fNameAdd" placeholder="First Name" required type="text"/>
				<input id="lNameAdd" placeholder="Last Name" required type="text"/>
				<input id="avatarAdd" placeholder="Avatar URL" required type="text"/>
				<button>Add</button>
			</form>
		</div>
		)
	}
});