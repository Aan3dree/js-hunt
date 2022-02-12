var assert = require('assert');

var area = function(base, altura){
	return base * altura;
}

try {
	assert.equal(9, area(3,3));
	console.log('passou');
} catch(e){
	console.log(e);
}
