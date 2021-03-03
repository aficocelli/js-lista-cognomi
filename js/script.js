/*Chiedere all’utente il cognome inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/


//  creo array

var listaCognomi = ["Bianchi", "Rossi", "Duzioni",

  "Balsano", "Verdi"];

var cognome = prompt("inserisci il tuo cognome");


var primaLettera = cognome[0].toUpperCase();

var nomeS = cognome.substring(1);

var utente= primaLettera + nomeS;

listaCognomi.push(utente);


console.log(listaCognomi.sort());



console.log(listaCognomi.indexOf(utente) + 1);
