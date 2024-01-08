// // const navegacion = document.querySelector('.navegacion');


// // // console.log(navegacion.childNodes);
// // // console.log(navegacion.children);


// // const contenedor = document.querySelector('.contenedor-cards');

// // // console.log(card.children[1].children);
// // // card.children[0].src='img/hacer2.jpg';
// // contenedor.children[2].children[0].src='img/hacer2.jpg';
// // console.log(contenedor.children[2].children[0]);




// // const card2 = document.querySelector('.card:nth-child(4)');

// // console.log(card2);

// // console.log(card2.previousElementSibling.previousElementSibling);



// // const primerEnlace = document.querySelector('a');

// // primerEnlace.remove();

// // console.log(primerEnlace);



// // const segundoEnlace = document.querySelector('.navegacion');

// // segundoEnlace.removeChild(segundoEnlace.children[2]);


// // console.log(segundoEnlace.children);



// const enlace = document.createElement('A');

// enlace.textContent='hola me llamo dee ';
// enlace.href='/nuevo-enlace';
// enlace.target='_blank';

// const navegacion = document.querySelector('.navegacion');



// // navegacion.appendChild(enlace);
// navegacion.insertBefore(enlace,navegacion.children[1]);



// // console.log(navegacion.children); 

// enlace.onclick=miFunction;

// function miFunction(){
//     alert('alkeluya');
// }


// console.log(enlace);



const parrafo1 = document.createElement('P');
parrafo1.textContent='concierto';
parrafo1.classList.add('categoria','concierto');





const parrafo2 = document.createElement('P');
parrafo2.textContent='musica electronica 2021';
parrafo2.classList.add('titulo');

const parrafo3= document.createElement('P');
parrafo3.textContent='$800 por persona';
parrafo3.classList.add('precio');


const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// console.log(info);

const imagen = document.createElement('img');
imagen.src='img/hacer2.jpg';

const card = document.createElement('card');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);


// console.log(card);


const contenedor = document.querySelector('.hacer .contenedor-cards');


contenedor.appendChild(card);

contenedor.insertBefore(card,contenedor.children[0]);

console.log(contenedor);
2