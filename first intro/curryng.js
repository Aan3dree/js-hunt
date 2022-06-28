//transformar uma função com n parametros em apenas 1 q recebe 1 parametro
function soma(a,b){
    return a + b;
}
//primeiro parametro repetido
soma(2, 3);
soma(2, 2);
soma(2, 4);
soma(2, 5);


// aplicando curryng

function soma(a){
    return function(b){
        return a + b;
    }
}
const soma2 = soma(2);
console.log(soma(3));
console.log(soma(2));
console.log(soma(4));
console.log(soma(5));