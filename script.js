
//VARIABLES
let colors = ["rgb(255, 255, 0)","rgb(255, 102, 102)","rgb(153, 0, 204)","rgb(255, 0, 0)","rgb(51, 255, 0)","rgb(51, 0, 204)"]
let square = document.querySelectorAll(".square")
let pickedColor = colors[3]
let valor = document.querySelector("#colorDisplay")
let message = document.querySelector("#message")
let clickedColor
let h1 = document.querySelector("h1")
let numeroRandom
let colorRandom
let botonReset = document.querySelector("#reset")
let btnEasy = document.querySelector("#easyButton")
let btnHard = document.querySelector("#hardButton")
let numberOfSquares = 6
let btnSelected = document.querySelectorAll(".mode")


iniciar()

function iniciar() {
    valor.textContent = pickedColor
    cuadrados()
    dificultad()
    reset()
}

botonReset.addEventListener("click", function () {
    reset()
})
function cuadrados() {
    
}
for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i]
    square[i].addEventListener("click" , function () {
        clickedColor = colors[i]
        
        if(clickedColor !== pickedColor) {
            square[i].style.backgroundColor = "darkgreen"
            message.innerHTML = "Intentalo Nuevamente"
        } else if(clickedColor == pickedColor) {
            message.innerHTML = "Correcto!!!"
            h1.style.backgroundColor = colors[i]
           changeColors(pickedColor)
           botonReset.textContent = "¿Play again?"
        } 
    })
} 

function dificultad() {
    for(let i = 0; i < btnSelected.length; i++) {
        btnSelected[i].addEventListener("click", function () {
            for(let i = 0; i < btnSelected.length; i++) {
                btnSelected[i].classList.remove("selected")
            }
            this.classList.add("selected")
            if(this.textContent === "Easy") {
                numberOfSquares = 3
            } else {
                numberOfSquares = 6
            }
            reset()
        })
    }}

function reset() {
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor()
    changeColors()
    valor.textContent = pickedColor
    h1.style.backgroundColor = "darkgreen"
    botonReset.textContent = "Nuevos colores"
    message.textContent = ""
    for (let i = 0; i < square.length; i++) {
        if(colors[i]) {
            square[i].style.display = "block"
            square[i].style.backgroundColor = colors[i]
        } else {
            square[i].style.display = "none"
        }
}}

function changeColors(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color
        h1.style.backgroundColor = color
    }
}  

function pickColor() {
    numeroRandom = Math.floor(Math.random()*colors.length)
     return colors[numeroRandom]
} 

function generateRandomColors(num) {
    let nuevoArr = []
    for(let i = 0; i < num; i++) {
        nuevoArr.push(randomColor())
    }
    return nuevoArr
}

function randomColor() {
    return (colorRandom = "rgb(" + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")")
    
}