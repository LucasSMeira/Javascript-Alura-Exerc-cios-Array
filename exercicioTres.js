const meuArray = [];
meuArray.push(5);
meuArray.push(9);
meuArray.push(3);

console.log(meuArray);

let indexZero = meuArray[0];
const numNovo = indexZero * indexZero;

meuArray.splice(0,1,numNovo);
console.log(meuArray);


