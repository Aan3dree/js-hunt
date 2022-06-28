const user = {
    name: 'andre',
    lastName: 'souza'
};

function getUserWithFullName(user){
    return{
        ...user, //spread opperator
        fullName: `${user.name} ${user.lastName}` //string literal, tipo concatenação
    }
}

const getUserWithFullName = getUserWithFullName(user);

console.log(getUserWithFullName);


const students = [  
    {
        name: 'Lola',
        grade: 7
    },
    {
        name: 'Derickw',
        grade: 5
    },
    {
        name: 'Deboraw',
        grade: '8'
    },
    {
        name: 'Tyfani',
        grade: 3
    }
];

function getAprovadoStudents(studentsList){
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getAprovadoStudents(students));

console.log('\nLista de alunos:');
console.log(students);