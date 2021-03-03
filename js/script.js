/*Chiedere all’utente il cognome inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/


// 1 chiedere cognome

var cognome = prompt("inserisci il tuo cognome");

// 2 inserirlo in un array

  // creo array con cognomi gia inseriti

  var listaCognomi = ["Bianchi", "Rossi", "Duzioni",

    "Balsano", "Verdi"];

  listaCognomi.push(cognome);

// 3 stampa lista ordinata alfabeticamente

console.log(listaCognomi.sort());

// 4 stampa posizione del nuovo cognome nella lista

console.log(listaCognomi.indexOf(cognome) + 1);
