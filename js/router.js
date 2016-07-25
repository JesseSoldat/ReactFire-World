import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Firbase from 'firebase';



var config = {
    apiKey: "AIzaSyDrBaMFNOe8j8q22qg7uuPECOwqJAr27v8",
    authDomain: "reactfire-709f3.firebaseapp.com",
    databaseURL: "https://reactfire-709f3.firebaseio.com",
    storageBucket: "reactfire-709f3.appspot.com",
  };
  firebase.initializeApp(config);

import {
	LoginComponent,
	NavComponent,
	DashComponent,

} from './views';

export default Backbone.Router.extend({

	routes: {
		'' : 'showLogin',
		'dash' : 'showDash',
	},


	initialize(appElement) {
		this.el = appElement;

	},

	start() {
		Backbone.history.start();
		return this;
	},

	render(component) {
		ReactDOM.render(component, this.el);
	},

	goto(route){
		
		this.navigate(route, {
			trigger: true
		});
	},

	showLogin(){
		let _this = this;

		firebase.auth().onAuthStateChanged(function(user){
				if(user){
					console.log(user);
					_this.goto('dash');
					
				} else {
					console.log('no user');
				}
		});

		this.render(
			<div>
			<LoginComponent 
				login={() => {
					
					// console.log('login');
				}}
				register={() => {
					
					// console.log('reg');
				}}/>
			</div>);
		
	},

	showDash(){
		

		this.render(
		<div>
			<NavComponent logOut={() => this.goto('')} />
			<DashComponent />
		</div>)
	}

});