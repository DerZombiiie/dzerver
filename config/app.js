// default config plugin for dzerver
const yaml = require("yaml");
const fs   = require("fs");

module.exports = class {
	constructor( handle ) {
		if( !handle ) 
			throw new Error("no handle specified!");

		this.storage = {};

		// read config.yaml file
		handle.metalog("config", "reading file ./config/config.yaml");
		this.file = fs.readFileSync("./config/config.yaml", "utf8");
	}

	register( module, name, defaultValue, values ) {
		if( typeof(module) == undefined )
			throw new Error("No module specified!");
		if( typeof(name) == undefined )
			throw new Error("No name specified!");
		if( typeof(defaultValue) == undefined )
			throw new Error("No default value specified!");
		if( typeof(values) == undefined )
			throw new Error("No possible values specified!");

		if( !this.storage[module] )
			this.storage[module] == {};

		this.storage[module][name].value = defaultValue;
		this.storage[module][name].defaultValue = defaultValue;
		this.storage[module][name].values = values;

	}

	set( module, name, value ) {
		if( !modules )
			throw new Error("No module specified");
		if( !name )
			throw new Error("No name specified");
		
		let oldvalue = structuredClone(this.storage[module][name].value)
		this.storage[module][name].value = value
		return oldvalue
	}

	get( module, name ) {
		if( !modules )
			throw new Error("No module specified");
		if( !name )
			throw new Error("No name specified");
		
		return this.storage[module][name].value;
	}

	getdefault( module, name ) {
		if( !modules )
			throw new Error("No module specified");
		if( !name )
			throw new Error("No name specified");
		
		return this.storage[module][name].defaultValue;
	}

	getvalues( modules, name ) {
		if( !modules )
			throw new Error("No module specified");
		if( !name )
			throw new Error("No name specified");
		
		return this.storage[module][name].values;
	}

	// pre 2. init round:
}
