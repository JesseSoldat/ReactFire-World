import React from 'react';

export default React.createClass({
	render(){
		return(
			<div>
				<h3>Login</h3>
				<form>
					<input type="text" placeholder="Email" required />
					<input type="text" placeholder="Email" required />
					<button>Login</button>
				</form>
				<br/><br/>
					<h3>Register</h3>
					<form>
					<input type="text" placeholder="Email" required />
					<input type="text" placeholder="Email" required />
					<button>Register</button>
				</form>

			</div>
			);
	}
});