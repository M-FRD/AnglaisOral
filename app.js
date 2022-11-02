const codecouleur = document.querySelector('.codecouleur')
let lastscrolltop = 0

// scroll

window.addEventListener('scroll',(e)=>{
    if(window.scrollY > lastscrolltop){
        codecouleur.classList.add('transparent')
    }
    else{
        codecouleur.classList.remove('transparent')
    }
    lastscrolltop = window.scrollY
})