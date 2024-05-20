// Implemento quì i metodi
interface Smartphone {
  ricarica(ammontare: number): number;
  chiamata(minuti: number): number;
  chiama404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

// Definisco la classe
class User implements Smartphone {
  nome: string;
  cognome: string;
  private credito: number;
  private numeroChiamate: number;

  constructor(nome: string, cognome: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.credito = 0;
    this.numeroChiamate = 0;
  }

  // Creo il metodo ricarica che mi aumenta il credito e mi restituisce il credito totale
  ricarica(ammontare: number): number {
    this.credito += ammontare;
    console.log(
      `Sono tati ricaricati: ${ammontare}€.   Il tuo credito attuale è: ${this.credito}€`
    );
    return this.credito;
  }

  // Creo il metodo chiamata che calcola il costo della chiamata in base ai minuti della chiamata e mi restituisce il credito dopo la chiamata
  // All'interno ho inserito un controllo condizionale che mi manda in console un messaggio di "Credito insufficiente" in caso il la chiamata
  // mandasse in negativo il credito
  chiamata(minuti: number): number {
    const costoPerMinuto = 0.2; // Costo al minuto per chiamata
    const costoChiamata = minuti * costoPerMinuto;

    if (this.credito >= costoChiamata) {
      this.credito -= costoChiamata;
      this.numeroChiamate++;
      console.log(
        `Chiamata di ${minuti} minuti effettuata. Costo: ${costoChiamata}€. Credito rimanente: ${this.credito}€`
      );
    } else {
      console.log("Credito insufficiente per effettuare la chiamata.");
    }
    return this.credito;
  }

  // Creo il metodo per controllare il credito residuo, mi restituisce l'ammontare del credito
  chiama404(): number {
    console.log(`Credito attuale: ${this.credito}€`);
    return this.credito;
  }

  // Creo il metodo per controllare il numero di chiamate effettuate, mi restituisce il numero di chiamate
  getNumeroChiamate(): number {
    console.log(`Numero di chiamate effettuate: ${this.numeroChiamate}`);
    return this.numeroChiamate;
  }

  // Creo il metodo per azzerare il numero di chiamate effettuate, non mi restituisce nulla
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log("Numero di chiamate azzerato.");
  }
}

// Prova del codice

// Creo un nuovo utente usando
const user = new User("Mario", "Rossi");

user.ricarica(5); // Ricarico 5€
user.chiamata(60); // Provo a fare una chiamate di 60 minuti e mi restituisce errore per credito insufficiente
user.chiamata(2); // Chiamata andata a buon fine
user.chiama404(); // Controllo credito
user.getNumeroChiamate(); // Numero chiamate effettuate
user.azzeraChiamate(); // Azzero le chiamate
user.chiamata(2);
user.chiamata(2);
