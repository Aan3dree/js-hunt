const users = ['André', 'Naty', 'Uélito'];

const gender = {
    MAN: Symbol ('M'),
    WOMAN: Symbol ('W')
}

const persons = [
    {
        name: 'André',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Naty',
        age: 29,
        gender: gender.WOMAN
    },
    {
        name: 'Uélito',
        age: 18,
        gender: gender.MAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Items:', person.leght);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo
const personWithCourse = persons.map(person => {
    person.couse = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course:', personWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += persons.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// juntando operações
const totalEvenAges = persons.filter(person => person.age % 2 === 0)
                                .reduce((age, person) => {
                                    age += person.age;
                                    return age;
                                }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);