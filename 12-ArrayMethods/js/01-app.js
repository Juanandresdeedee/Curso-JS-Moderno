// const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// const carrito = [
//     { nombre: 'Monitor 27 Pulgadas', precio: 500 },
//     { nombre: 'Televisión', precio: 100 },
//     { nombre: 'Tablet', precio: 200 },
//     { nombre: 'Audifonos', precio: 300 },
//     { nombre: 'Teclado', precio: 400 },
//     { nombre: 'Celular', precio: 700 },
// ]

// meses.forEach((mes)=>{

// if ('Enero' === mes) {
//     console.log('enero si existe');
    
// }

// })


//array method


// const resultado = meses.includes('Enero');
//     console.log(`${resultado}`);
    


    const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


const existe = carrito.some(a=>{

    return a.nombre==='Celular'


})

console.log(existe);



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


const existeMes = meses.some(mes=> mes==='Enero');

console.log(existeMes);


meses.forEach((mes,i)=>{
console.log(mes);
console.log(i);


})


// buscar un mes en especial 

meses.forEach((mes,i)=>{
    if(mes==='Marzo'){
        console.log(`encontrado en el indice ${i}`);
        
    }
}) 



const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


 const indice=meses2.findIndex( mes => mes==='Febrero');

console.log(indice);



const carrito2 = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    {nombre: 'gasolinesas', precio: 4000}
]


const indice2=carrito2.findIndex((p)=>p.nombre==='Celular');

console.log(`hola es ${indice2}`);
console.log(indice2);

