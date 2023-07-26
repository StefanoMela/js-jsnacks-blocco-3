// # TRACCIA 1

// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

// generare random Numb fra due dati math.floor(math.random() * (max - min)) + min;

// SVOLGIMENTO

// const firstNumber = parseInt(prompt("Dimmi un primo numero"));
// const secondNumber = parseInt(prompt("Dimmi un secondo numero"));

// if (firstNumber < secondNumber) {
    
//     let randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber)) + firstNumber;
//     console.log(randomNumber);
    
// } else {

//     let randomSecond = Math.floor(Math.random() * (firstNumber - secondNumber)) + secondNumber;

//     console.log(randomSecond);
// };

// # TRACCIA 2

// Dare la possibilità di inserire due parole. Verificare che le due parole abbiano la stessa lunghezza. 
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const firstWord = prompt("Dimmi una prima parola");
const secondWord = prompt("Dammene una seconda");

if (firstWord.length == secondWord.length) {

    console.log(firstWord , secondWord);

} else if (firstWord.length > secondWord.length) {

    console.log(firstWord);

} else {
    
    console.log(secondWord);
};


// # TRACCIA 3

// # TRACCIA 4