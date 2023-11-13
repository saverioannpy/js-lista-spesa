'use strict';

let shoppingList = []; //decido di dichiarare un array dove memorizzare i dati inseriti dall'utente per operazioni future;

const elementUl = document.querySelector('ul.shopping-list'); //selezione l'elenco non ordinato;
console.log(elementUl);

let answer ="si";
let error = 0; //variabile booleana che cambia valore in 1 nel caso in cui l'utente inseriza un input errato; 

do{
    answer = prompt("Vuoi aggiungere qualcosa alla lista della spesa? (si/no)"); //chiedo all'utente se deve inserire qualcosa all'interno della lista della spesa;
    console.log("Input utente: " + answer);
    answer = answer.toLocaleLowerCase(); //per evitare errori di input decido di rendere tutti i miei caratteri minuscoli;
    console.log("Testo convertito: " + answer);
    if(answer === "si"){
        while(answer === "si"){ //se l'utente risponde di si allora si entra all'interno del nostro ciclo;
            const listElement = prompt("Cosa devi comprare?");//all'utente viene chiesto cosa vuole aggiungere alla propria lista;
            console.log(listElement);
            shoppingList.push(listElement); //inserisco l'elemento inserito nel mio array;
            const li = document.createElement('li'); //creo un elemento li per il mio elenco non ordinato;
            li.append(listElement); // "appendo" al mio elemento li l'input inserito dall'utente;
            elementUl.append(li); // "appendo" all'elenco non ordinato il mio li;
            answer = prompt("Vuoi aggiungere altro alla lista della spesa? (si/no)");//chiedo all'utente se deve aggiungere altro;
            console.log(answer); 
            console.log("Testo convertito: " + answer);
            answer = answer.toLocaleLowerCase(); //per evitare errori di input decido di rendere tutti i miei caratteri minuscoli;
            console.log(answer); 
        } //il ciclo si ripeterà fin quando l'utente continuerà a rispondere si;
    }else if(answer === "no"){
        alert("Allora hai il frigorifero già pieno, ottimo!");
        console.log("Non c'è bisogno di fare la spesa! ");
    }else{
        alert("Errore: Risposta non valida");
        console.log("Errore: Risposta non valida");
        error = 1;
    }
}while(error === 1);
console.log("Lista della spesa inserita dall'utente: " + shoppingList + "."); 