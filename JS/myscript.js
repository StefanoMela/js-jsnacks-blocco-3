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

// SVOLGIMENTO

// const firstWord = prompt("Dimmi una prima parola");
// const secondWord = prompt("Dammene una seconda");

// if (firstWord.length == secondWord.length) {

//     console.log(firstWord , secondWord);

// } else if (firstWord.length > secondWord.length) {

//     console.log(firstWord);

// } else {

//     console.log(secondWord);
// };

// # TRACCIA 3

// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// const userArray = [];
// let totalSum = 0;

// while (totalSum < 50) {
    
//     let userNumber = parseInt(prompt("Dammi un numero"));
//     totalSum += userNumber;
//     userArray.push(userNumber);
    
// };
// console.log(userArray);

// # TRACCIA 4

// SVOLGIMENTO

// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
// // Calcola la media dei numeri inseriti.

// const userArray = [];
// let totalSum = 0;

// while (totalSum < 50) {
    
//     let userNumber = parseInt(prompt("Dammi un numero"));
//     totalSum += userNumber;
//     userArray.push(userNumber);
// };

// average = totalSum / userArray.length;

// console.log(userArray);
// console.log(average);

// # TRACCIA 5

// SVOLGIMENTO

// Trovare gli errori nel seguente codice:

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = "";
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//     }
//     console.log(evenNumbers);

// dovrebbe restituire [1,3,5]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = [];

for (let i = 0; i < numbers.length - 1; i++) {

    if (numbers[i] % 2 == 0) {

        evenNumbers.push(i);
    }
};
console.log(evenNumbers);

// dovrebbe restituire [1,3,5]