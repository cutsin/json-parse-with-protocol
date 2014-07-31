# JSON.parse with protocol


## Installation

	npm install json-parse-with-protocol

## Usage

	var jsonpp = require('json-parse-with-protocol')
	
	var jsonString = JSON.stringify({
		foo: 'bar',
		path: 'path:./your-path',
		file: 'file:/your-file'
	})

	console.log( jsonpp(jsonString) )
	// -> { foo: bar, path: "/full path/your-path", file: <..file buffer..> }

