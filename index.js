const fs = require("fs");
var   handle = require("./loader.js");
var   config = new require("./config/app.js");//(handle);

// reading folder with modules:
const modules = fs.readdirSync("./modules/");
modules.forEach((module) => {
	handle.load(module);
})

// post registration:
modules.forEach((module) => {
	handle[module].init(handle.giveto(module));
})

