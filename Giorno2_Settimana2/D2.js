/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num1 = 62;
var num2 = 34;
var num_maggiore;
if (num1 > num2) {num_maggiore = num1;}
else {num_maggiore = num2;}
console.log(num_maggiore);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num = 6;
if (num != 5) {console.log("Not Equal");}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var num = 25;
var modulo = "Non divisibile per 5";
if (num % 5 == 0) {modulo = "Divisibile per 5"}
console.log(modulo);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var num1 = 7;
var num2 = 16;
if (num1 == 8 || num2 == 8 || num1 + num2 == 8 || num1-num2 == 8 || num2-num1 == 8)
     {console.log("Condizione verificata")}
else {console.log("Condizione non verificata")}  


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


var totalShoppingCart = 55;
if   (totalShoppingCart <= 50) {totalShoppingCart = totalShoppingCart + 10, console.log(totalShoppingCart, "Spedizione a pagamento");}
else {console.log(totalShoppingCart, "Spedizione gratuita");}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 55;
totalShoppingCart = totalShoppingCart * 0.8;
if (totalShoppingCart <= 50) {totalShoppingCart = totalShoppingCart + 10, console.log(totalShoppingCart, "Spedizione a pagamento");}
else {console.log(totalShoppingCart, "Spedizione gratuita");}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var a = 5;
var b = 8;
var c = 11;
var z;
if (b < a) {z= b; b = a; a = z;};
if (c < a && c < b) {z = c; c = b; b = a; a = z;}
if (c < b) {z = b; b = c; c = z;}
console.log (a,b,c)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 12;
if (typeof  x === Number) {console.log(x, " X è un numero")}
else {console.log(x, "X  non è un numero")}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */


var y =7;
if   (y % 2 == 0) {console.log(y, " è un numero pari")}
else {console.log(y, " è un numero dispari")}

/*
 ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

  let val =11;
  if (val < 10 && val >= 5) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.city = "Toronto"
console.log(me.city);



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


delete me.lastName;
console.log(me.lasName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var vettore = [];
for (let i = 1; i <= 10; i++) {vettore[i-1] = i};
console.log(vettore)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

vettore[9] = 100;
console.log(vettore);