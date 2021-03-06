import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';


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
	ProfileComponent,
	AddProfileComponent,
	EditProfileComponent,

} from './views';

export default Backbone.Router.extend({

	routes: {
		'' : 'showLogin',
		'dash' : 'showDash',
		'profile' : 'showProfile',
		'add-profile/:uid': 'showAddProfile',
		'edit-profile/:uid': 'showEditProfile',
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
					
					_this.goto('dash');
					
				} else {
					
				}
		});

		this.render(
			<div>
			<LoginComponent 
				login={() => {
					
			
				}}
				register={() => {
					
			
				}}/>
			</div>);
		
	},

	showDash(){

		this.render(
		<div>
			<NavComponent 
			dash={() => this.goto('dash')}
			profile={() => this.goto('profile')}
			logOut={() => this.goto('')} 


			/>
			<DashComponent />
		</div>)
	},

	showProfile(){
				let _this = this;
				firebase.auth().onAuthStateChanged(function(user){
					
				if(user){
					
					let uid = user.uid
					// console.log(uid);

					_this.render(
						<div>
							<NavComponent 
							dash={() => _this.goto('dash')}
							profile={() => _this.goto('profile')}

							logOut={() => _this.goto('')} 

							/>
							<ProfileComponent 
							
							add={(uid) => _this.goto('add-profile/' +uid)}
							edit={(uid) => _this.goto('edit-profile/' +uid)}

							uid={uid} />
						</div>
						)
			
				} else {
					console.log('no user');
				}
			});	
	
	},

	showAddProfile(uid){
		console.log(uid);

	

		this.render(
			<div>
				<AddProfileComponent
				uid={uid}
				goBack={() => this.goto('profile')}
				/>
			</div>)
	},


	showEditProfile(uid){

		this.render(
			<div>
				<NavComponent 
				dash={() => this.goto('dash')}
				profile={() => this.goto('profile')}
				
				logOut={() => this.goto('')} 

				/>
				<EditProfileComponent 
				uid={uid}
				/>
			</div>
			);
	},

});