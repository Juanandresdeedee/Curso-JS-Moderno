


const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',validarForm)


function validarForm (e){

    e.preventDefault();

    console.log('buscando..preve...');
    console.log(e.target.action);

} 



window.addEventListener('scroll',()=>{
   const premium=document.querySelector('.premium');
   
   const ubicacion=premium.getBoundingClientRect();
   console.log(ubicacion);
if(ubicacion.top<350){
   console.log('ubicacion llegando');
}else{
    console.log('aun no da mas scroll');
    
}



})