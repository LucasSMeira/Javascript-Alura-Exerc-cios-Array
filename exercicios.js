const array = [ , , , , , , ];
array.splice(1,1,77);
// Expected output: Array [Empty,77,Empty,Empty,Empty,Empty,Empty]
console.log(array);

array.splice(3,1,5);
array.splice(7,1,13);
console.log(array);
console.log(array.length);



