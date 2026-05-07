let resultado = document.getElementById("resultado")

let botones = document.getElementsByName("button")
for (const key in botones) {
    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pintar)
        console.log(boton)
}

function pintar(e){
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}