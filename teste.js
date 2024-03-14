const animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão'];

animaisDoAquario.splice(1, 0, 'sardinha');
console.log(animaisDoAquario);
//Array esperado : ['baleia', 'sardinha','polvo' ,'golfinho', 'tubarão']
//      Index:         0    ,     1     ,   2    ,      3   ,   4   
animaisDoAquario.splice(3, 2, 'atum');
//Array esperado : ['baleia', 'sardinha', 'polvo','atum']

console.log(animaisDoAquario);
