const compteurMael = document.querySelector('.MaelC')
const compteurEvan = document.querySelector('.EvanC')
const compteurMax = document.querySelector('.MaxC')
const Mael = document.querySelectorAll('.Mael')
const Evan = document.querySelectorAll('.Evan')
const Max = document.querySelectorAll('.Max')
const codecouleur = document.querySelector('.codecouleur')
let lastscrolltop = 0

function compteur(phrases, comp){
    let compteur = 0
    let texte = ''
    phrases.forEach(phrase => { 
        texte += ' ' + phrase.innerText
    });
    texte = texte.split(' ')
    texte.forEach(mot => {
        if(mot != ""){
            compteur+=1
        }
    });
   comp.innerText = `(${compteur} mots)`
}

compteur(Mael, compteurMael)
compteur(Max, compteurMax)
compteur(Evan, compteurEvan)

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