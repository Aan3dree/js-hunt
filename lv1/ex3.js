var assert = require('assert');

// juros = C * i * n

// var capital = 16000;
// var txEmprestimo = .04;
// var periodos = 4;

var juros_simples = function(capital, txEmprestimo, periodos){
	var juros = capital*txEmprestimo*periodos;
	return juros;
}

try {
	assert.equal(2560, juros_simples(16000, 0.04, 4));
	console.log('passou');
}
catch (e) {
	console.log(e);
}
