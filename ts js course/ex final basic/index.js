function app(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    var pessoas = [];
    var nome = form.querySelector('.nome');
    var sobrenome = form.querySelector('.sobrenome');
    var peso = form.querySelector('.peso');
    var altura = form.querySelector('.altura');

    form.addEventListener('submit', function (e){

        e.preventDefault();
        console.log(nome.value, sobrenome.value, peso.value, altura.value);
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        pessoas.push(pessoa);
        console.log(pessoas);
        var p = document.createElement("p");
        resultado.append(p, `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.altura} ${pessoa.peso}`);
    });
}
app();