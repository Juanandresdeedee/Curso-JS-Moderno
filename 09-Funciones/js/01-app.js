let total = 0;


function agregarCarrito (precio){

return total += precio;

}


function calcularImpuesto ( total){

    return total * 1.25;

}

total=agregarCarrito (400)
total=agregarCarrito (6000)
total=agregarCarrito (500)
total=agregarCarrito (5500)
total=agregarCarrito (2100)
total=agregarCarrito (100)


console.log(total);

const totalConTax=calcularImpuesto( total);

console.log(totalConTax);

console.log(`el total a pagar es de ${total} y con tax es ${totalConTax}`);







iniciarApp();


function iniciarApp (){

    console.log('iniciando app....');
    
    segundaFuncion()

}


function segundaFuncion (){

    console.log('desde la segunda funcion');

    usuarioAutenticado ('lolas')
    
}

function usuarioAutenticado (usuario){

    console.log('autenticado usuario... espere ');

console.log(`${usuario} esta autenticado`);

    
}



const reproductor = {

    reproducir : function(){
        console.log(`reproduciendo el video`);
         
    }
}


reproductor.reproducir()






const reproductorTv = {

    reproducirImagen : function (serial){

          console.log(`reproduciendo la imagen madre con el serial ${serial}`);
          
    },

    pausandoImagen : function(){

        console.log(`pausando image`);
        
    }
}

reproductorTv.reproducirImagen('245567u28')
reproductorTv.pausandoImagen()




// const subir = function(){

//     console.log('aprendiendo up');
    
// }

// subir()


const subir2 = () =>'aprendiendo up top';
    


console.log(subir2());






const carrito = [
    {nombre : 'tesla', precio : 300},
    {nombre : 'apple', precio : 900},
    {nombre : 'sony', precio : 200},
    {nombre : 'amazon', precio : 500},
    {nombre : 'spotify', precio : 4400},

]
  

// const nuevoArreglo = carrito.map(p => `marca ${p.nombre} precio $ ${p.precio}`) 
    


// console.log(nuevoArreglo);



// carrito.forEach(p => `marca ${p.nombre} precio $ ${p.precio}`) 
    


console.log(carrito[0]);



const reproductor01= {

cancion : '',


set añadirCancion (cancion) {
    this.cancion=cancion;
    console.log(`añadiendo nueva vacion ${cancion}`)
},

get obtenerCancion (){
    console.log(`obteniendo ${this.cancion}`);
    
}



}

reproductor01.añadirCancion='lady lee lee';
reproductor01.obtenerCancion;
