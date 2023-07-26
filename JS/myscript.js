// console.log("JS OK");

// # TRACCIA 1

// Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

// generare random Numb fra due dati math.floor(math.random() )

// SVOLGIMENTO

const firstNumber = parseInt(prompt("Dimmi un primo numero"));
const secondNumber = parseInt(prompt("Dimmi un secondo numero"));

if (firstNumber < secondNumber) {
    
    let randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber)) + firstNumber;
    console.log(randomNumber);
    
} else {

    let randomSecond = Math.floor(Math.random() * (firstNumber - secondNumber)) + secondNumber;

    console.log(randomSecond);
};


// # TRACCIA 2

// # TRACCIA 3

// # TRACCIA 4