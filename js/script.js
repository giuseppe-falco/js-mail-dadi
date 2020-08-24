// richiesta inserimento mail
var email = prompt("Inserisci la tua mail");
// array database mail
var mailAccepted = ["mail@mail.com", "giuseppe.falco@email.it", "mail@email.it"];


// controllo email nell'array
var login = false;

for (var i = 0; i < mailAccepted.length; i++) {
  if (email === mailAccepted[i]) {
    login = true;
  }
}

// stampa errore 

if (login == true) {
  alert("Accesso confermato");
} else {
  alert("Accesso negato");
}