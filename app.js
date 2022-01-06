const sonidos = document.getElementById('sonidos');
var a = document.getElementById("imagen")


document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 32)  {
        sonidos.innerHTML = '<audio src="sounds/gemido.ogg" autoplay></audio>';
        a.innerHTML = '<img src="img/lobobebe.png" width="250" height="250"></img>';
        
    }
})


document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 81)  { 
            sonidos.innerHTML = '<audio src="sounds/grunido1.ogg" autoplay></audio>';
            a.innerHTML = '<img src="img/loboenojado.png"  width="350" height="350"></img>';
    }
})

document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 87)  {
        sonidos.innerHTML = '<audio src="sounds/grunido2.ogg" autoplay></audio>';
        a.innerHTML = '<img src="img/loboenojado2.png" width="350" height="350"></img>';
        //  
    }
})

document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 69)  {
        sonidos.innerHTML = '<audio src="sounds/grunido3.ogg" autoplay></audio>';
        a.innerHTML = '<img src="img/loboenojado3.png"  width="250" height="250"></img>';
    }
})

document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 65)  {
        sonidos.innerHTML = '<audio src="sounds/ladrido1.ogg" autoplay></audio>';
        a.innerHTML = '<img src="img/loboladrido1.png"  width="250" height="250"></img>';
    }
})

document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 83)  {
        sonidos.innerHTML = '<audio src="sounds/ladrido2.ogg" autoplay></audio>';
        a.innerHTML = '<img src="img/loboladrido2.png"  width="250" height="250"></img>';
    }
})


document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 68)  {
        sonidos.innerHTML = '<audio src="sounds/ladrido3.ogg" autoplay></audio>';
        a.innerHTML = '<img src="img/loboladrido3.png"  width="250" height="250"></img>';
    }
})

document.addEventListener('keydown', function (evento){
    if (evento.keyCode == 77)  {
        sonidos.innerHTML = '<audio src="sounds/muerte.ogg" autoplay></audio>';
        a.innerHTML = '<img src="img/loboladrido1.gif"  width="250" height="250"></img>';
    }
})

