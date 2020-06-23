//BOTON FLOTANTE
document.addEventListener('DOMContentLoaded', ()=>{
    /*DE ESTA MANERA SELECCIONAS EL BOTON a*/
    const btnFlotante = document.querySelector('.btn-flotante');
    //console.log(btnFlotante);
    btnFlotante.addEventListener('click', (e)=>{
        e.preventDefault();
        const footer = document.querySelector('#footer');
        /*COMPROBAMOS SI CONTIENE LA CLASE ACTIVO DEL BOTON*/
        if(footer.classList.contains('activo')){
            //SI CONTIENE EL FOOTER EJECUTA ESTO
            footer.classList.remove('activo');
            btnFlotante.innerText = 'Idioma y Modena'; 
            btnFlotante.classList.remove('activo');
        }else{
            //SINO LO TIENE ejecuta esto
            footer.classList.add('activo');
            btnFlotante.innerText = 'X Cerrar';
            btnFlotante.classList.add('activo');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {

    /*/** Obtiene el hero con las imagenes 
    const imagenHero = document.querySelector('.hero');

    /** Arreglo de imagenes con fondo 
    const imagenes = ['arriba.jpg','arriba2.jpg','arriba3.jgp'];

    /**Inicializadores 
    let i = 0;
    let tiempo = 0;
    setInterval( () => {
        imagenHero.style.backgroundPositionY =  '-'+tiempo+'px';
        // console.log(tiempo);
        if(tiempo > 40) {
            tiempo = 0;
            imagenHero.style.backgroundImage = "url(../img/"+imagenes[i]+")";
            
            if(i === imagenes.length - 1) {
                i = 0;
             
            } else {
                i += 1;
            }
           // console.log(imagenes[i]);
        } 
        tiempo += 1;
    }, 100); */


    
});
