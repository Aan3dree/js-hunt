var assert = require('assert');

var media = function(a, b, c){
	return (a+b+c)/3;
}

try {
	assert.equal(media(7, 7, 7), 7);
	assert.equal(media(7, 6, 8), 7 );
	console.log('passou');
} catch(e){
	console.log(e);
}

