/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(source) {
	this.cacheable && this.cacheable();
	try {
	  var value = JSON.parse(source);
	} catch (e) {
	  return source;
	}
	this.value = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t");
};
