//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: "${textSize}"`);

//retorna um array quebrando a string por um delimitador
const splitedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splitedText);

//busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text','txxT');
console.log('\nSubstituição de valor:', replacedText);

//retorna a 'fatia' de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nUltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a ultima', allWithoutLastChar);

const seccondToEnd = 'Texto'.slice(1);
console.log('Valor da string da segunda letra até a ultima: ', seccondToEnd);

//retorna N caracteres a partir de uma posição
const twoCharBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas letras primeiras são:',twoCharBeforeFirstPos);
