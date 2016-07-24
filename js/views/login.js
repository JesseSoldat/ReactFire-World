import React from 'react';

export default React.createClass({
	login(e){
		e.preventDefault();
		this.props.login();
	},
	register(e){
		e.preventDefault();
		this.props.register();
	},
	render(){
		return(
			<div>
				<h3>Login</h3>
				<form>
					<input 
						className="logEmail" 
						type="text" 
						placeholder="Email" 
						required 
					/>
					<input 
						className="logPassword"
						type="text" 
						placeholder="Password" 
						required 
					/>
					<button onClick={(e) => this.login(e)}>
					Login</button>
				</form>

				<br/><br/>

					<h3>Register</h3>
				<form>
					<input 
						className="regEmail"
						type="text" 
						placeholder="Email" 
						required 
					/>
					<input 
						className="regPassword"
						type="text" 
						placeholder="Password" 
						required 
					/>
					<button onClick={(e) => this.register(e)}>Register</button>
				</form>

			</div>
			);
	}
});