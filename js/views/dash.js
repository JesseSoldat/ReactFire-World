import React from 'react';


export default React.createClass({

	componentWillMount: function() {
	  this.firebaseRef = firebase.database().ref("items");
	  
	},

	render(){
		return(
			<div>
				<h3>Dashboard</h3>
			</div>
			);
	}
});