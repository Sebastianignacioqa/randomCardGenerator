
window.onload = () => {


let misPalos = ["♦","♥","♠","♣"];
let letras = ["A", "J","Q","K"];
let randomPalo = Math.floor(Math.random() * 4);
let randomNumber = Math.floor(Math.random() * 14);
let randomLetra = Math.floor(Math.random() * 4);

let palo = document.createElement("H2");
palo.innerHTML = misPalos[randomPalo];

let palo2 = document.createElement("H3");
palo2.innerHTML = misPalos[randomPalo]
    


let numero = document.createElement("H1");

if (randomNumber <=10) {
numero.innerHTML = randomNumber;
}
else if (randomNumber>10) {
numero.innerHTML = letras[randomLetra]
}

let carta = document.querySelector(".carta");
    carta.appendChild(palo2);
    carta.appendChild(numero);
    carta.appendChild(palo);
    
if (randomPalo === 0 ) {
    palo.style.color = "red"
    palo2.style.color = "red"
    
}
else if (randomPalo === 1) {
    palo.style.color = "red"
    palo2.style.color = "red"
}

numero.innerHTML


}