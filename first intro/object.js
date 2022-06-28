let user = {
    name: 'André'
};

// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
user['name'] = 'Luiz';

const prop = 'name';
user['name'] = 'Souza';

//criando uma propriedade
user.lastName = 'de Souza';

// deletando uma propriedade
delete user.name;

//funções de object

const user2 = {
    name: 'André',
    lastName: 'Silva de Souza'
}

// recupera as chaves do objeto
console.log('Propriedades do objeto user2:', Object.keys(user2));

// recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto:', Object.values(user2));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores: ', Object.entries(user2));

// Mergear propriedades de objetos
Object.assign(user2, {fullName: 'André Luiz Silva de Souza'});

console.log('\nAdiciona a propriedade fullName no objeto user2', user2);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user2, {age: 26}));

// Previne todas alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo' ;

console.log('\nVariável newObj após as alterações', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'André'};
Object.seal(person);

person.name = 'André Luiz';
delete person.name;
person.age = 26;

console.log('\nVariável person após alterações:', person);