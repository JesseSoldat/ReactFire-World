import React from 'react';

export default React.createClass({

	logOut(){
		firebase.auth().signOut();
		this.props.logOut();
	},
	render(){
		return(
			<div>
				<ul>
					<li>Dash</li>
					<li onClick={this.logOut}>Log out</li>
				</ul>
			</div>
			);
	}
});