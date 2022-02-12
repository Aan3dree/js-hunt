var assert = require('assert');

var a, b, temp;
a = 999;
b = 555;

temp = a;
a = b;
b = temp;

// a = 555
// b = 999


try {
	assert.equal(555, a);
	assert.equal(999, b);
	console.log('success!');
} catch(e){
	console.log(e);
}


