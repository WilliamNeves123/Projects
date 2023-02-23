var agora = new Date()
var D = agora.getDay();
var M = agora.getMonth();
var y = agora.getFullYear();
var hora =  agora.getHours();
var min  =  agora.getMinutes();
var sec  =  agora.getSeconds();


var cor  = document.getElementById('fundo')
paisagem = document.getElementById('imagem')   
    horario.innerHTML = `<p> Hoje é dia ${D}/${M}/${y} , </p> Agora são ${hora}h : ${min}min : ${sec}sec <br> Bom Dia!</p>`
    
    if (hora >= 12 && hora <= 18) {
    horario.innerHTML = `<p> ${hora}h : ${min}min : ${sec}sec <br> Boa Tarde!</p>`
    cor.style.backgroundColor = 'rgba(172, 82, 23, 0.808)'
    paisagem.innerHTML = `<img class="foto" src="https://github.com/Brendon-Araujo/Curso-Js/blob/main/Imagens/sol.jpg?raw=true">`
} else if (hora > 18 && hora <= 23) {
    horario.innerHTML = `<p> Agora são ${hora}h : ${min}min : ${sec}sec <br> Boa Noite!</p>`
    cor.style.backgroundColor = 'rgb(48, 47, 47)'
    paisagem.innerHTML = `<img class="foto" src="https://github.com/Brendon-Araujo/Curso-Js/blob/main/Imagens/noitee.jpg?raw=true">`
} else if (hora == 24 || hora <= 04) {
    horario.innerHTML = `<p> Agora são ${hora}h : ${min}min : ${sec}sec  <br> Boa Madrugada!</p>`
    cor.style.backgroundColor = 'black'
    paisagem.innerHTML = `<img class="foto" src="https://github.com/Brendon-Araujo/Curso-Js/blob/main/Imagens/sonoo.jpg?raw=true">`
} 


function Insta(){

    window.open("https://www.instagram.com/brendonaraujo_/");
}
function Linkedin(){

    window.open("https://www.linkedin.com/in/brendon-ara%C3%BAjo-15502819b/");
}
function GitHub(){
    window.open("https://github.com/Brendon-Araujo");
}