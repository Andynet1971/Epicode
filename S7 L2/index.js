const mostra = document.getElementById("mostra");
const contenuto = mostra.innerText;
const salva = document.getElementsByClassName("btn")[0];
const rimuovi = document.getElementsByClassName("btn")[1];
const inputField = document.getElementById("campoInput");
console.log(contenuto, salva, rimuovi, inputField);

document.addEventListener("DOMContentLoaded", avviaContatore, function () {
  let nomeSalvato = localStorage.getItem("nome");
  if (nomeSalvato) {
    inputField.value = nomeSalvato;
    mostra.innerText = nomeSalvato;
  }
});

const salvaNome = function () {
  const nome = inputField.value;
  mostra.innerText = inputField.value;
  inputField.value = "";
  if (nome) {
    localStorage.setItem("nome", nome);
    alert("Nome salvato correttamente!");
  } else {
    alert("Inserisci un nome valido!");
  }
};

function rimuoviNome() {
  localStorage.removeItem("nome");
  inputField.value = ""; // Svuota il campo di input
  mostra.innerText = "";
  alert("Nome rimosso correttamente!");
}

function avviaContatore() {
  // Controlla se c'è un valore salvato in sessionStorage
  let valore = sessionStorage.getItem("contatore");
  if (valore) {
    contatore = parseInt(valore); // Converte il valore da stringa a numero
  } else {
    contatore = 0; // Imposta il contatore a zero se non c'è nessun valore salvato
  }

  // Aggiorna il contatore ogni secondo
  setInterval(function () {
    contatore++;
    sessionStorage.setItem("contatore", contatore);
    document.getElementById("contatore").textContent =
      "Tempo trascorso: " + contatore + " secondi";
  }, 1000);
}
