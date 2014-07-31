// JSON.parse with protocol like 'path:', 'file:'

var fs = require('fs')
var path = require('path')
var pattern = {
	all: /^(path|file):/,
	path: /^path:/,
	file: /^file:/
}
var fullpath = function(_path) {
	_path = _path.replace(pattern.all, '')
	if (path.resolve(_path) === _path) {
		return _path
	}
	return path.join(process.cwd(), _path)
}

module.exports = function(jsonString){
	return JSON.parse(jsonString, function(key, value){
		// convert relative path to absolute
		if (pattern.path.test(value)) {
			return fullpath(value)
		}
		// convert filePath to text
		if (pattern.file.test(value)) {
			return fs.readFileSync(fullpath(value), 'utf8')
		}
		return value
	})
}