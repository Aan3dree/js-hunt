/*nao usar variavel antes dela ser definida
variaveis e funções, elevar ao escopo global
hoisting de variavel so eleva a criação e não a atribuição
hoisting de função eleva a função ao topo como todo, até sua assinatura
*/

function fn(){
    console.log(text); //vai retornar undefined

    var text = 'exemplo';

    console.log(text);
}

fn();

//aplicando hoisting
function fn(){
    var text;

    console.log(text);

    text = 'exemplo';

    console.log(text);
}

fn();

//hoisting de função

function fn2(){
    log('hoisting de função');

    function log(value){
        console.log(value);
    }
}
fn2();

