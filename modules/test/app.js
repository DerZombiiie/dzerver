module.exports = class {
	constructor( handle ) {
		handle.log("test")
		this.handle = handle
	}

	init() {
		this.handle.log("hi from here as well.")
	}
}
