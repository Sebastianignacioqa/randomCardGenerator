
window.onload = () => {


let misPalos = ["♦","♥","♠","♣"]
let randomPalo = Math.floor(Math.random() * 4);
let randomNumber = Math.floor(Math.random() * 12);
let palo = document.createElement("H2");

palo.innerHTML = misPalos[randomPalo];
    


let numero = document.createElement("H1");
numero.innerHTML = randomNumber;

let carta = document.querySelector(".carta");
    carta.appendChild(numero);
    carta.appendChild(palo);


    


numero.innerHTML








}