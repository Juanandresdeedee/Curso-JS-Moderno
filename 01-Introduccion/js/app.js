


const aprender =  (tec) =>`quiero aprender ${tec}`;
    

console.log(aprender ('java'));






const car = [
    {nombre : 'tv', price: 9},
    {nombre : 'ld', price: 23},
    {nombre : 'cad', price: 8},
    {nombre : 'top', price: 98},

];

const n = car.map(p => `${p.nombre}`);

console.log(n);