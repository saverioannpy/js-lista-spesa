'use strict';

let answer = prompt("Vuoi aggiungere qualcosa alla lista della spesa? (si/no)");
console.log(answer);

while( answer === "si"){
    const listElement = prompt("Cosa devi comprare?");
    console.log(listElement);
    answer = prompt("Vuoi aggiungere qualcosa alla lista della spesa? (si/no)");
    console.log(answer);
}