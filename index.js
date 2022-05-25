const materiasPracticas = [" Matematicas", " Ingles"," Gimnasia", " Informatica"]
const materiasEstudio = [" Lengua", " Biologìa", " Sociales", "Derecho", "Historia" ]
const materias = materiasEstudio.concat(materiasPracticas)
alert("Las materias son :"+materias)
const mensaje = document.getElementById("nodo")


let PedirNotas = Number(prompt("Ingresa la nota de Lengua"))
let PedirNotas2 = Number(prompt("Ingresa la nota de Biologìa"))
let PedirNotas3 = Number(prompt("Ingresa la nota de Sociales"))
let PedirNotas4 = Number(prompt("Ingresa la nota de Derecho"))
let PedirNotas5 = Number(prompt("Ingresa la nota de Historia"))
let PedirNotas6 = Number(prompt("Ingresa la nota de Matematicas"))
let PedirNotas7 = Number(prompt("Ingresa la nota de Ingles"))
let PedirNotas8 = Number(prompt("Ingresa la nota de Gimnasia"))
let PedirNotas9 = Number(prompt("Ingresa la nota de Informatica"))

let Resultado = (PedirNotas+PedirNotas2+PedirNotas3+PedirNotas4+PedirNotas5+PedirNotas6+PedirNotas7+PedirNotas8+PedirNotas9)/9
alert("La nota anual promedio es de " + Resultado)


    if(Resultado>=6){
    mensaje.innerText = "APROBASTE EL AÑO"
    } 
    else if(Resultado<6){
     mensaje.innerText = "DESAPROBASTE EL AÑO"
    }
    while(isNaN(Resultado)){
     PedirNotas = Number(prompt("Ingresa la nota de Lengua"))
     PedirNotas2 = Number(prompt("Ingresa la nota de Biologìa"))
     PedirNotas3 = Number(prompt("Ingresa la nota de Sociales"))
     PedirNotas4 = Number(prompt("Ingresa la nota de Derecho"))
     PedirNotas5 = Number(prompt("Ingresa la nota de Historia"))
     PedirNotas6 = Number(prompt("Ingresa la nota de Matematicas"))
     PedirNotas7 = Number(prompt("Ingresa la nota de Ingles"))
     PedirNotas8 = Number(prompt("Ingresa la nota de Gimnasia"))
     PedirNotas9 = Number(prompt("Ingresa la nota de Informatica"))
     if(Resultado>=6){
        mensaje.innerText = "APROBASTE EL AÑO"
        break
    } 
    else if(Resultado<6){
        mensaje.innerText = "DESAPROBASTE EL AÑO"
        break
    }
}


