const boton = document.querySelector('#boton');
boton.addEventListener('click', ()=>{
    let seg = 11;
    const aa = setInterval(()=>{
        seg --;
        boton.style.backgroundColor = '#08C471';
        boton.textContent = `Espere ${seg} Segundos`;
        if(seg == -1){
            boton.textContent = 'Descargar';
            clearInterval(aa);
        }
    }, 1000)
})