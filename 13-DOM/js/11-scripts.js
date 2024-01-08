const botonFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');

botonFlotante.addEventListener('click',mostrarOcultarFooter);


function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent='idioma - moneda';

    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent='x-cerrar';
    }
  
 
    console.log(footer.classList);
    
}