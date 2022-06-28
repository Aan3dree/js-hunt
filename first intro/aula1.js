//tipagem fraca
var numero = 3;
var nome = 'andre';
console.log(numero + nome);

//tipagem dinamica
var minhaVariavel = 30; //int
minhaVariavel ='String';//string
console.log(minhaVariavel);

//funções de primeira classe e ordem maior
function getName(){
    return 'André Luiz';
}

function logFn(fn){
    console.log(fn());
}

logFnResult(getName);

// closure: capacidade da função lembrar do ambiente q foi criada
function init(){
    const exemplo = 'Esse verde';

    return function(){
        console.log('1 - 0 valor da variavel é: ${exemplo}.');

        return function(){
            console.log('2 - 0 valor da variável é:  ${exemplo}');

            return function(){
                console.log('3 - 0 valor da variavel é: ${exemplo}');
            }
        }
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();
initFn3();