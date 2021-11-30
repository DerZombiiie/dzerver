// express module
const express = require("express");

module.exports = class {
	constructor( handle ) {
		this.handle = handle;
		this.handle.express = this;

		this.handle.config.register("express", "enable",	true,		[true, false]);
		this.handle.config.register("express", "port",		8080,		false);
		this.handle.config.register("express", "listen",	"0.0.0.0",	false);
	}

	preinit() {
		this.enabled	= this.handle.config.get("express", "enable");
		this.port		= this.handle.config.get("express", "port");
		this.listen		= this.handle.config.get("express", "listen");

		this.handle.metalog("express", "initializing express object");
		this.express = express();
	}

	start() {
		if( this.enabled ) {
			this.handle.metalog("express", `Starting express on ${this.listen}, with port ${this.port}.`)
			this.express.listen(this.port, this.listen)
		}
	}

	use(path, callback) {
		if( !path )
			throw new Error("No path specified!");
		if( !callback )
			throw new Error("no callback specified!");

		return this.express.use(path, callback);
	}

	get(path, callback) {
		if( !path )
			throw new Error("No path specified!");
		if( !callback )
			throw new Error("no callback specified!");

		return this.express.get(path, callback);
	}

	post(path, callback) {
		if( !path )
			throw new Error("No path specified!");
		if( !callback )
			throw new Error("no callback specified!");

		return this.express.post(path, callback);
	}

	all(path, callback) {
		if( !path )
			throw new Error("No path specified!");
		if( !callback )
			throw new Error("no callback specified!");

		return this.express.all(path, callback);
	}
}
