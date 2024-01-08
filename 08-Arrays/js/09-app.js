const carrito =  [
{nombre: "tv",precio:300},
{nombre: "apple",precio:300},
{nombre: "audios",precio:300},
{nombre: "golf",precio:300},
{nombre: "bola",precio:300},

]

// for (let i = 0; i < carrito.length; i++){
//     console.log(` nombre :${carrito[i].nombre}-precio  $${carrito[i].precio}`);
    
    
// }



carrito.forEach(function (p) {
    console.log(`nombre : ${p.nombre} precio$ : ${p.precio}`); 
})