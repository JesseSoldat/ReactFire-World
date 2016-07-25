import React from 'react';
// import ReactFireMixin from 'reactfire'
// import reactMixin from 'react-mixin'

export default React.createClass({
  	// mixins: [ReactFireMixin],

  	componentWillMount(){
  	// 	firebase.auth().onAuthStateChanged(function(user){
			// 	if(user){
			// 		console.log(user);

			// 	} else {
			// 		console.log('no user');
			// 	}
			// });
  	},

	login(e){
		e.preventDefault();
		this.props.login();

		let email = document.querySelector('.logEmail').value;
		let password = document.querySelector('.logPassword').value;

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
			let errorCode = error.code;
			let errorMessage = error.message;

			if(errorCode === 'auth/wrong-password'){
				console.log('Wrong Password');
			} else {
				console.log(errorMessage);
			}
			

			firebase.auth().onAuthStateChanged(function(user){
				if(user){
					console.log(user);
				} else {
					console.log('no user');
				}
			});


		});


	},
	register(e){
		e.preventDefault();
		this.props.register();
		let email = document.querySelector('.regEmail').value;
		let password = document.querySelector('.regPassword').value;
		
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
			let errorCode = error.code;
			let errorMessage = error.message;
			if(errorCode == 'auth/weak-password'){
				console.log('The password is weak');
			} else {
				console.log(errorMessage);
			}
			console.log(errorCode);
		});
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