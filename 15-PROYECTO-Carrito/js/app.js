const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn= document.querySelector ('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


// agregarEventListeners ();
// function agregarEventListeners () {

//     listaCursos.addEventListener('click',agregarCurso);
// }

// function agregarCurso(e){
//     e.preventDefault();
//     if(e.target.classList.contains('agregar-carrito')){
//     const cursoSelecccionado = e.target.parentElement.parentElement;
//     leerDatosCurso(cursoSelecccionado)

//     // console.log('hola este es el curso selec');
//     }
    
// }


// function leerDatosCurso(curso){


//     console.log(curso);


//     const infoCurso = {
//         imagen : curso.querySelector('img').src,
//         titulo: curso.querySelector('h4').textContent,
//         precio:curso.querySelector('.precio span').textContent,
//         id:curso.querySelector('a').getAttribute('data-id'),
//         cantidad: 1


//     }
//     console.log(infoCurso);


    
// }



agregarEventos()

function agregarEventos(){

listaCursos.addEventListener('click',agregarCurso);

carrito.addEventListener('click',eliminarCarrito);

vaciarCarritoBtn.addEventListener('click',()=>{
    console.log('vaciando carrito container');
    articulosCarrito=[];
    limpiarHTML();
    
})

}

function agregarCurso (e){

    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){

     const cursoSelec  = e.target.parentElement.parentElement
     leerDatos(cursoSelec);
     }

// leerDatos(cursoSelec);
// console.log('holis');


}


function eliminarCarrito (e){

    if (e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito=articulosCarrito.filter(curso=>curso.id !==cursoId);

        // console.log(articulosCarrito);
        carritoHTML();
        
        
    }
    
}

function leerDatos (curso){

// console.log(curso);

const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1

    
    
}


const existe = articulosCarrito.some(curso=>curso.id===infoCurso.id);
if(existe){
  const cursos = articulosCarrito.map(curso=>{

    if (curso.id===infoCurso.id){
        curso.cantidad++;
        return curso;
        }else{
            return curso;
    }

});

articulosCarrito=[...cursos];

}else{
articulosCarrito=[...articulosCarrito,infoCurso];
}


console.log(articulosCarrito);

carritoHTML();

}


function carritoHTML (){

    limpiarHTML();

    articulosCarrito.forEach(curso=>{
        // console.log(curso);
        
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>
        <img src="${curso.imagen}" width="100"></td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td> <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
       

        `;

        contenedorCarrito.appendChild(row);
    })

}

function limpiarHTML () {

// contenedorCarrito.innerHTML='';

while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);

}

}