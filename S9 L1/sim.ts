interface Smartphone {
  ricarica(ammontare: number): number;
  chiamata(minuti: number): number;
  chiama404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

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

  ricarica(ammontare: number): number {
    this.credito += ammontare;
    console.log(`Ricaricati ${ammontare}€. Credito attuale: ${this.credito}€`);
    return this.credito;
  }

  chiamata(minuti: number): number {
    const costoPerMinuto = 0.2; // Costo per minuto di una chiamata
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

  chiama404(): number {
    console.log(`Credito attuale: ${this.credito}€`);
    return this.credito;
  }

  getNumeroChiamate(): number {
    console.log(`Numero di chiamate effettuate: ${this.numeroChiamate}`);
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
    console.log("Numero di chiamate azzerato.");
  }
}

// Esempio di utilizzo
const user = new User("Mario", "Rossi");
user.ricarica(10);
user.chiamata(30); // Questa chiamata dovrebbe fallire per credito insufficiente
user.chiamata(20); // Questa chiamata dovrebbe essere effettuata con successo
user.chiama404();
user.getNumeroChiamate();
user.azzeraChiamate();
user.getNumeroChiamate();
