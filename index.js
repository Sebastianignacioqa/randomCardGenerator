
window.onload = () => {


let misPalos = ["♦","♥","♠","♣"];
let letras = ["A", "J","Q","K"];
let randomPalo = Math.floor(Math.random() * 4);
let randomNumber = Math.floor(Math.random() * 14);
let randomLetra = Math.floor(Math.random() * 4);

let palo = document.createElement("H2");
palo.innerHTML = misPalos[randomPalo];

let palo2 = document.createElement("H3");
palo2.innerHTML = misPalos[randomPalo];
    


let numero = document.createElement("H1");

if (randomNumber <=10) {
numero.innerHTML = randomNumber;
}
else if (randomNumber>10) {
numero.innerHTML = letras[randomLetra];
}

    
if (randomPalo === 0 ) {
    palo.style.color = "red";
    palo2.style.color = "red";
    
}
else if (randomPalo === 1) {
    palo.style.color = "red";
    palo2.style.color = "red";
}

let input1 = document.createElement("INPUT");
input1.placeholder = "Choose width";
let input2 = document.createElement("INPUT");
input2.placeholder = "Choose height";



let boton = document.createElement("BUTTON");
boton.innerHTML = "Click me!";

let carta = document.querySelector(".carta");
    carta.appendChild(palo2);
    carta.appendChild(numero);
    carta.appendChild(palo);
    carta.appendChild(boton);
    carta.appendChild(input1);
    carta.appendChild(input2);



boton.addEventListener("click", ()=> {
    location.reload();

});

input1.addEventListener("onkeypress", ()=> {
    carta.style.width = input2.value;

});


setInterval("location.reload()",10000);

}


