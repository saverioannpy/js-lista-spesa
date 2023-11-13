'use strict';

const elementUl = document.querySelector('ul.shopping-list'); //selezione l'elenco non ordinato;
console.log(elementUl);
let answer = prompt("Vuoi aggiungere qualcosa alla lista della spesa? (si/no)"); //chiedo all'utente se deve inserire qualcosa all'interno della lista della spesa;
console.log(answer);

while( answer === "si"){ //se l'utente risponde di si allora si entra all'interno del nostro ciclo;
    const listElement = prompt("Cosa devi comprare?");//all'utente viene chiesto cosa vuole aggiungere alla propria lista;
    console.log(listElement);
    const li = document.createElement('li'); //creo un elemento li per il mio elenco non ordinato;
    li.append(listElement); // "appendo" al mio elemento li l'input inserito dall'utente;
    elementUl.append(li); // "appendo" all'elenco non ordinato il mio li;
    answer = prompt("Vuoi aggiungere altro alla lista della spesa? (si/no)");//all'utente viene chiesto se deve aggiungere altro;
    console.log(answer);
} //il ciclo si ripeterà fin quando l'utente continuerà a rispondere si;