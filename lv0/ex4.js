var assert = require('assert');

var antecessor = function (num){
	return num -1;
}

var sucessor = function (num) {
	return num +1;
}

try {
	assert.equal(sucessor(336), 337);
	assert.equal(antecessor(79),78 );
	console.log('passou');
} catch(e){
	console.log(e);
}
