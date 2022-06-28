function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //mais de uma expressão
    return 'Code here';
}

// funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
/*const controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}*/

const handledFnExecution = controlFnExec(fn);

handledFnExecution(true); // executará a função fn
handledFnExecution(); // não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}

this.name = 'Nome do contexto da criação';

const getNameArrowFn = () => this.name;

function getName(){
    return this.name;
}

const user = {
    name: 'Nome do objeto de execução',
    getNameArrowFn,
    getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
