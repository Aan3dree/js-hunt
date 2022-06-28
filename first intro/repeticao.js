const array = ['one','two','three']

for (let index = 0; index < array.length; index++){
    const element = array[index];
    console.log(`Element #${index}: ${element}`);
}

let arr = [3, 5, 7];
arr.foo = "hellow";

for (let i in arr) {
    console.log(i); // logs '0', '1', '2', 'foo' - index do aray
}
for (let i of arr){
    console.log(i); // log '3', '5', '7' - numero literais
}



var n = 0;
var x = 0;
while (n < 3){
    n++;
    X +n;
}

console.log(x);


let i = 0;
do {
    i += 1;
    console.log(i);
} while(i < 5);

//break
console.log('Exemplo da utilização do break');

var index = 0;

while (true){
    index++;
    if(index > 2){
        break;
    }

    console.log(index);
}

//continue
console.log('\nExemplo da utilização de continue');
const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++){
    const element = array[index];

    if(element % 2 === 0  ){
        continue;
    }
    console.log(element);
}