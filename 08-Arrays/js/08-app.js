const producto = {
    nombre : "monitor tv",
    precio: 300,
    disponible: true
}

const { nombre } = producto;

console.log(nombre);



const numeros = [10,20,30,40];


const [primero, ...segundo] = numeros;


console.log(segundo);






const carros = [10,20,30,40,50,60,70];


const [uno,dos,...tres] = carros;


console.log(tres);
