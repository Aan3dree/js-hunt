var assert = require('assert');

var dias = function(meses){
	return meses *30;
}

try {
	assert.equal(dias(3), 90);
	assert.equal(dias(6), 180);
	console.log('passou');
}
 catch(e){
	console.log(e);
 }

