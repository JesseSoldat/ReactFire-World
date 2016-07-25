import React from 'react';

export default React.createClass({
	dash(){
		this.props.dash();
	},
	
	profile(){
		this.props.profile();
	},
	logOut(){
		firebase.auth().signOut();
		this.props.logOut();
	},
	render(){
		return(
			<div>
				<ul>
					<li onClick={this.dash}>Dash</li>
					<li onClick={this.profile}>Profile</li>
					<li onClick={this.logOut}>Log out</li>

				</ul>
			</div>
			);
	}
});