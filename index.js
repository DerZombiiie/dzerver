const fs = require("fs");
var   handle = require("./loader.js");
var   config = new new require("./config/app.js")(handle);
var   express = new new require("./express/app.js")(handle);

// reading folder with modules:
const modules = fs.readdirSync("./modules/");

modules.forEach((module) => {
	if( module.endsWith(".dis") ) return
	handle.load(module);
})
handle.config.preinit();  // config things
handle.express.preinit(); // express initialisation

// post registration:
modules.forEach((module) => {
	if( module.endsWith(".dis") ) return
	handle[module].init(handle.giveto(module));
})

handle.express.start();
