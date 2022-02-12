var assert = require('assert');

var dobro = function(num){
	return num * 2;
}

try{
	assert.equal(10, dobro(5));
	console.log('passou');
} catch(e){
	console.log(e);
}
