
// const carrito2 = [
//     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
//     { nombre: 'Televisión', precio: 100 },
//     { nombre: 'Tablet', precio: 200 },
//     { nombre: 'Audifonos', precio: 300 },
//     { nombre: 'Teclado', precio: 400 },
//     { nombre: 'Celular', precio: 700 },
// ]


// // let total = 0;

// // carrito2.forEach(p=>total+=p.precio);
// // console.log(`El total del carrito es de ${total}`)
// // console.log(total);


// //con reduce


// let resultado = carrito2.reduce((total,producto)=>total+producto.precio,0)

// console.log(resultado);
// console.log(`el resultado es ${resultado}`);


// let result ;

// result =carrito2.filter(p => p.precio<300);
// console.log(result);

// result=carrito2.filter(p=>p.nombre!=='Teclado')
// console.log(result);


// result=carrito2.filter(p=>p.nombre==='Celular')

// console.log(result);





// const carrito3 = [
//     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
//     { nombre: 'Televisión', precio: 100 },
//     { nombre: 'Tablet', precio: 200 },
//     { nombre: 'Audifonos', precio: 300 },
//     { nombre: 'Teclado', precio: 400 },
//     { nombre: 'Celular', precio: 700 },
// ]



// let resultado2='';


// resultado2=carrito3.forEach((p,i)=>{
//     if(p.nombre==='Celular'){
//         resultado2=carrito3[i]
// console.log(`cuesta ${p.precio}`);

//     }
// });

// console.log(resultado2);


// //con find


// result1=carrito3.find(p=>p.precio===700)

// console.log(result1);





// const carrito4 = [
//     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
//     { nombre: 'Televisión', precio: 100 },
//     { nombre: 'Tablet', precio: 200 },
//     { nombre: 'Audifonos', precio: 300 },
//     { nombre: 'Teclado', precio: 400 },
//     { nombre: 'Celular', precio: 700 },
// ]

// // carrito4.filter(producto=>producto.name==='Teclado');

// // console.log(carrito4.producto);



// let r = '';

// carrito4.forEach((p,i)=>{
//     if(p.nombre==='Tablet'){
//         r=carrito4[i]
//     }
// });
// console.log(r);



const carrito5 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// const siExiste = carrito5.some(p=>p.precio===500);

// console.log(`si existe 

// ${siExiste}`);


// const resultado = carrito5.every(p=>p.precio<500)
// console.log(`Son todos menores a 500?${resultado}`)




const resultado = carrito5.some(p=>p.precio<5000)
console.log(`hay algun valor menor de 500 ? ${resultado}`)
