#!/usr/bin/env node

const path = require("path");
const loadConfigFile = require("rollup/dist/loadConfigFile");

(async () => {
    const { options, warnings } = await loadConfigFile(
	path.join(__dirname, "rollup.config.js"),
	{ environment: "INPUT_FILE:myfile" }
    );
    console.log(options[0].input);
})();
