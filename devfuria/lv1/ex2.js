var assert = require('assert');

var perDistribuidor = 0.28;
var perImpostos = 0.45;

var custoFinal = function(custoFabrica){
	var final = custoFabrica + (custoFabrica * perDistribuidor) + (custoFabrica * perImpostos)
	return final;
}



try {
	assert.equal(17300, custoFinal(10000));
	console.log('passou');
}
catch (e){
	console.log(e);
}
