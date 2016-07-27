import React from 'react';
import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin'

export default React.createClass({
	mixins: [ReactFireMixin],

  	getInitialState(){
  		let user = this.props.uid;
  	
  		return {
  			users: [],
  			uid: user
  			
  		}
  	},
  	componentWillMount() {
  		let uid = this.state.uid;
  	
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

		 		let fNameElem = document.getElementById('fName');
		  		let lNameElem = document.getElementById('lName');
		  		let avatarElem = document.getElementById('avatar');

		  	
		  		let fName = snapshot.val().fName;
		  		fNameElem.textContent = fName;

		  		let lName = snapshot.val().lName;
		  		lNameElem.textContent = lName;

		  		avatarElem.src = snapshot.val().avatar;

		  		let addProfileBtn = document.getElementById('addProfile');
		  		let editProfileBtn = document.getElementById('editProfile');

		  		editProfileBtn.style.display = 'inline-block';

		  		addProfileBtn.style.display = 'none';

		  		});

	 		} //else
	 	}
	 	getData();
			
	},

	addProfile(){	
		this.props.add(this.state.uid);
	
	},

	editProfile(){
		this.props.edit(this.state.uid);
	},
	

	render(){
		return(
			<div>
				<img id="avatar" src="" />
				<h3 id="fName"></h3>
				<h3 id="lName"></h3>

				<button id="addProfile" onClick={this.addProfile}>Add Profile</button>
				<button id="editProfile" onClick={this.editProfile}>Edit Profile</button>
	
			</div>
			);
	}
});