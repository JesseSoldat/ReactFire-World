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

} from './views';

export default Backbone.Router.extend({

	routes: {
		'' : 'showLogin',
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

	showLogin(){
	
		this.render(
			<div>
				<LoginComponent 
				login={() => {
					
					// console.log('login');
				}}
				register={() => {
					
					// console.log('reg');
				}}
				/>
			</div>
			);
		
	},

});