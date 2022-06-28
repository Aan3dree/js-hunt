var nameVar = 'André';
let nameLet = 'André';
const nameConst = 'André';

// var não entende escopo de bloco
var text = 'exemplo';

(() => {
    console.log(`Valor dentro da função "${text}"`); // vai da indefinido

    if(true){
        text = 'exemplo';//vai subir a atribuição por var so entender escopo global ou de função
        console.log(`Valor dentro do if "${text}"`);
    }

    console.log(`Valor após o if "${text}"`);
})();

//let respeita escopo de bloco
(() => {
    let test = 'valor função';
    console.log(`valor dentro da função:"${test}"`);//so vai existir aqui

    if(true){
        let test = 'valor if';
        console.log(`valor dentro do if: "${test}"`);//não entende escopo de bloco
    }

    console.log(`valor depois do if: "${test}"`);//e existir aqui
}
)();

//const não permite alterar o tipo
name = 'André';

const user = {
    name: 'André'
};

//mas se for um objeto pode alterar
user.name = "outro nome";

//não da pra fazer o objeto "apontar" pra outro lugar
user = {
    name: 'André'
};

const pessoas = ['joao', 'jon', 'jeni'];

//pode adicionar novos itens
pessoas.push('andré');
//pode remover tb
pessoas.shift();
//pode alterar diretamente
pessoas[1] = 'souza';

console.log(pessoas);