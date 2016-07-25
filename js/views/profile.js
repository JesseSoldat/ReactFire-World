import React from 'react';
import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin'

export default React.createClass({
	mixins: [ReactFireMixin],

  	getInitialState(){
  		let user = this.props.uid;
  		console.log(user);
  		return {
  			users: ['Ted'],
  			items: [],
  			uid: user
  			
  		}
  	},
  	componentWillMount() {
  		let uid = this.state.uid;
  	
	  	let firebaseRef = firebase.database().ref('users/' + uid + '/profile');;

	  	this.bindAsArray(firebaseRef, 'items');	
	  				
	},
	
	addProfile(){

	let _this = this;
	
	

	this.firebaseRefs['items'].push({
			text: 'Japan',
			super: 'Man'
		});

	
		
	//TEST
	// console.log(this.state.users);
	// this.setState({users: ['Bill']});
	// setTimeout(function(){
	// console.log(_this.state.users);

	// },1000);
	// this.firebaseRefs['items'].push({
 //  				text: 'Japan'
 //  			});

			// 	firebase.auth().onAuthStateChanged(function(user){

			// 	if(user){
			// 		let email = user.email;
			// 		let uid = user.uid
			// 		console.log(uid);
			// 		console.log(email);
			// 		// let userArray = [email, uid];
			// 		_this.setState({users: [email, uid]});

			// 		// setTimeout(function(){
			// 		console.log(_this.state.users);

			// 		// },1000);

			// 	} else {
			// 		console.log('no user');
			// 	}
			// });	
			//TEST
		},
	render(){
		return(
			<div>
				<h3>Profile</h3>
				<button onClick={this.addProfile}>Add</button>
			</div>
			);
	}
});