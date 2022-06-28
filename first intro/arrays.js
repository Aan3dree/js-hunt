const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

const arr3 = Array.of(1, 2, 3);

const pessoas = Array.of('André','Naty','Luna');

const numbersAndStrings = Array.ok(1, 2, 'alow', 'cabeça');

const arrN = Array(3);//vai criar um array com 3 posição vazia

//array.from cria uma nova instancia de array a partir de um parametro array-like ou iterable objetc
const divs = document.querySelectorAll('div');
const arr = Array.from(divs);

//push adiciona um ou mais elementos no final do array e retorna o tamanho do novo array
const frutas = ['melancia','pera'];
frutas.push('banana');
const frutasLenght = frutas.push('abacaxi');


//poop remove o ultimo elemento do array e retorna o removido
const frutin = ['acerola','cereja','calabresa'];
frutin.pop();
const removedItem = frutin.pop();

//unshift adiciona um ou mais elemento no inicio do array e retorna o novo tamanho do array
const frutos = ['coconut','pineaple','mango'];
frutos.unshift('meadow');
const frutosLenght = frutos.unshift('blueberry');

//shift remove do começo e retorna o removido
const nomes = ['souza','luiz','andre'];
nomes.shift();

//concat concatena um ou mais array retornano um novo array
const testew = nomes.concat(frutos);

//slice retorna um novo array fatiando o array de acordo com o inicio e fim
const vamos = [1, 2, 3, 4, 5];
vamos.slice(0 , 2); // retorna [1 e 2] - 0 é onde começa e o indice 2 aonde ele vai parar
vamos.slice(2); //se eu passar so 1 paramatro ele vai pegar a partir da posição e inclui ela
vamos.slice(-1); // retorna 5
vamos.slice(-3); // retorna 3, 4, 5

//splice altera um array adicionando novos elementos enquanto remote elementos antigos
vamos.splice(2); // retorna 3, 4, 5
console.log(vamos); // retorna 1, 2
vamos.splice(0, 0, 'first');//retorna [] não foi removido nada por causa do 
console.log(vamos); // ['first, 1, 2]

//forEach - iteração pra cada item dentro do array
const vetor = [1, 2, 3, 4, 5];
vetor.forEach((value, index) => {
    console.log(`${index}:${value}`);
});

//map - retorna um novo array, de mesmo tamanho, iterando cada item de um array
vetor.map(value => value * 2); // [2, 4, 6, 8, 10]

