/*Chiedere all’utente il cognome inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/


//  creo array

var listaCognomi = ["Bianchi", "Rossi", "Duzioni",

  "Balsano", "Verdi"];

// chiedo cognome all'utente

var cognome = prompt("inserisci il tuo cognome");

// trasformo la prima lettera in maiuscolo

var primaLettera = cognome[0].toUpperCase();

// sostituisco la lettera nel cognome

var nomeS = cognome.substring(1);

var utente= primaLettera + nomeS;

// inserisco cognome utente nell'array

listaCognomi.push(utente);

// stampo lista in ordine alfabetico

console.log(listaCognomi.sort());

// stampo posizione del nuovo utente

console.log(listaCognomi.indexOf(utente) + 1);
