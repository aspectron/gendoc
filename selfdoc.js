// generate documentation for itself

var gendoc = require('./gendoc.js');

gendoc({ input: [rt.local.scriptPath + '/gendoc[.]js$'],
	output: rt.local.scriptPath,
	htmlOutput: rt.local.scriptPath });