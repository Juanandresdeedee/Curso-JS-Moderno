

const nav = document.querySelector('.navegacion');

// Registrar un evento

nav.addEventListener('click',()=>{
    console.log('este es un click al nav');
    
})


document.addEventListener('DOMContentLoaded',()=>{
console.log('documento listo');

})


nav.addEventListener('mouseenter',()=>{
    console.log('entro en la navegacion');

    nav.style.backgroundColor='transparent';
    
})

nav.addEventListener('mouseout',()=>{
    console.log('salgo en la navegacion');

    nav.style.backgroundColor='red';
    
})


const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown',()=>{

//     console.log('escribiendo...');
    
// })



busqueda.addEventListener('input',(evt)=>{
if (evt.target.value===''){
    console.log('fallo la validacion');
}
   
    
});