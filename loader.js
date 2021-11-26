const chalk = require("chalk")

module.exports = new class {
	constructor() {}

	log( message, importance ) {
		if( !message )
			return false

		if( !importance )
			importance = 0

		if( importance <= 10 ) // normal status message
			console.log( "[", this.module, "]", chalk.reset(message) );

		if( 10 < importance && importance <= 50 ) // warning message
			console.log( "[", this.module, "]", chalk.orange( message ) );
		
		if( 50 < importance ) // error message
			console.log( "[", this.module, "]", chalk.red( message ) );

		return true
	}

	metalog( state, message ) {
		console.log( "[", state, "]", message );
	}

	get handle() { // usefull function
		return this;
	}

	load( module ) {
		this.module = module
		this.metalog("loader", `Loading module "${module}"`);
		let mod = require(`./modules/${module}/app.js`)
		this[module] = new mod(this);
		this.metalog("loader", `Done loading module "${module}"`);

		return true;
	}

	giveto(module) {
		this.module = module
		return this
	}
}
