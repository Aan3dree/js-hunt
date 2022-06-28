var assert = require('assert');

var somar = function(num, add){
	return num + add;
}

var subtrair = function(num, sub){
	return num - sub;
}

var multiplicador = function(num, multi){
	return num * multi;
}

var dividir = function(num, divisor){
	return num/divisor;
}


try{
	var num = 10;

	assert.equal(12, somar(num, 2));
	assert.equal(8, subtrair(num, 2));
	assert.equal(20, multiplicador(num, 2));
	assert.equal(5, dividir(num,2));
	console.log('passou');
}
catch (e) {
	console.log(e);
}

	
