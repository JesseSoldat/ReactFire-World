import React from 'react';
import ReactFireMixin from 'reactfire';


export default React.createClass({
	mixins: [ReactFireMixin],

	getInitialState(){
  		
  	
  		return {
  			users: [],
  		
  			
  		}
  	},


	componentWillMount() {
  		let uid = this.props.uid;
  		console.log(uid);
  	
	  	let firebaseRef = firebase.database().ref('users/' + uid + '/profile');

	  	this.bindAsArray(firebaseRef, 'users');	


	  	let _this = this;

	 	function getData(){
	 		console.log(_this.state.users.length);

	 		if (_this.state.users.length <= 0) {

	 			setTimeout(function(){
	 				getData();
	 			},300);

	 		} else {
	 			
		 		firebaseRef.on('value', function(snapshot){

		 		let fNameElem = document.getElementById('fNameEdit');
		  		let lNameElem = document.getElementById('lNameEdit');
		  		let avatarElem = document.getElementById('avatarEdit');

		  	
		  		let fName = snapshot.val().fName;
		  		fNameElem.value = fName;

		  		let lName = snapshot.val().lName;
		  		lNameElem.value = lName;

		  		avatarElem.value = snapshot.val().avatar;


		  		});

	 		} //else
	 	}
	 	getData();

	},


	edit(){

	},
	render(){
		return(
			<div>
				<input id="fNameEdit" type="text" placeholder="First Name" required/>
				<input id="lNameEdit" type="text" placeholder="Last Name" required/>
				<input id="avatarEdit" type="text" placeholder="Avatar URL" required/>
				<button onClick={this.edit}>Edit</button>
			</div>
			);
	}
});