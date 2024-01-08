


// for( let i=0; i<=20; i++ ){

//    if(i%2===0 ){
//     console.log(`el numero ${i} es par`);
//    }else{
//     console.log(`el numero ${i} es impar`);
//    }
   
// }





// const carrito = [
//     {nombre : 'tesla', precio : 300},
//     {nombre : 'apple', precio : 900},
//     {nombre : 'sony', precio : 200},
//     {nombre : 'amazon', precio : 500},
//     {nombre : 'spotify', precio : 4400},

// ]
// console.log(carrito.length);


// for (let i = 0; i<carrito.length; i++){
//     console.log(carrito[i].nombre);
// }



// for ( let i = 0 ; i<=10 ; i++){
//     if (i===5){
//         console.log('este es el 5');
        
//     }
//     console.log(`numero ${i}`);
    
// }

 

// for ( let i = 0 ; i<=10 ; i++){
//     if (i===5){
//         console.log('V');
//         continue;
//         break;
//     }
//     console.log(`numero ${i}`);
    
// }



// const carrito = [
//     {nombre : 'tesla', precio : 300},
//     {nombre : 'apple', precio : 900},
//     {nombre : 'sony', precio : 200 ,descuento:true},
//     {nombre : 'amazon', precio : 500},
//     {nombre : 'spotify', precio : 4400},

// ]

// for ( let i = 0; i<carrito.length;i++){
//     if(carrito[i].descuento){
//         console.log(`el art ${carrito[i].nombre} tiene descuento`);
//         continue;
//     }
//     console.log(carrito[i].nombre);
    
    
// }
    


// const marcas = ['apple','spotify', 'google', 'amazon','ai']


// marcas.forEach((marca,index)=> console.log(`${marca} : ${index}`))




// const carrito = [
//     {nombre : 'tesla', precio : 300},
//     {nombre : 'apple', precio : 900},
//     {nombre : 'sony', precio : 200 ,descuento:true},
//     {nombre : 'amazon', precio : 500},
//     {nombre : 'spotify', precio : 4400},

// ]


// const a = carrito.forEach((p,i)=>{
   
//     // console.log(`${i+1} ${p.nombre} $ ${p.precio} ${p.descuento} `);
// })

// console.log(a);


// const b = carrito.map((p,i)=>{
   
//     console.log(`${i+1} ${p.nombre} $ ${p.precio} ${p.descuento} `);
// })

// console.log(b);




const marcas = [
    {name:'jabon', precio: 400},
    {name:'shampoo', precio:400},
    {name:'detergente', precio:500},
    {name:'liquido', precio:500}

    ]


for (let producto of marcas) {

    console.log(producto.precio);
    
}