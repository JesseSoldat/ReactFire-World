import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';

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
				<LoginComponent />
			</div>
			);
		
	},

});