const myNumb = 12.4032;

//transformar numero em string
const numberAsString = myNumb.toString();
console.log('numero transformado em string: ', typeof numberAsString);
//retorna numero com numero de casas decimais
const fixedTwoDecimals = myNumb.toFixed(2);
console.log('\nNumero com duas casas decimais: ', fixedTwoDecimals);

// transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

//transformar uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));