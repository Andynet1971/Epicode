/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

Ci sono 7 Datatypes in JavaScript :
   STRING     : Tipo stringa (Qualsiasi numero, lettera o carattere speciale string)
   NUMBER     : Tipo numerico (Qualsiasi numero, positivo, negativo, decimale...)
   BIGINT     : Tipo numerico (QuaLsiasi numero intero troppo grande per essere contenuto in NUMBER)
   BOOLEAN    : Tipo booleano (Valori possibili: True o False, ossia vero o falso)
   UUNDEFINED : Tipo indefinito (Valore non definito o risultato di operazione che lo rende indefinito)
   NULL       : Valore nullo (La varibile non ha nessun valore, esempio stringa="";)
   Object     : Tipo oggetto(variabile complessa con più valori)
*/

/*
    ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var myName = "Andrea"; // Dichiaro la variabile e contestualmente le assegno il valore



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

somma = 12 + 20; // Creo una variabile che si chiama somma e le attribuisco il valore della somma dei 2 numeri dati

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12; // Creo la variabile x e assegno il valore 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var myName = "Andrea"; // Creo la variabile myName e le assegno il valore "Andrea"
myName = "Guarnieri"; // Assegno alla variabile myName il nuovo valore "Guarnieri"
console.log(myName); //Risultato giusto : il valore di myName cambia da "Andrea" a "Guarnieri"

const myName1 = "Andrea" //Assegno alla costante il valore di "Andrea"
myName1 = "Guarnieri"; //Provo ad assegna alla costante il valore di "Guarnieri" la console mi da errore
console.log(myName); //La console mi da errore perchè non posso assegnare un nuovo valore ad una costante


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12; //Creo la variabile x e contestualmente le assegno il valore 12
x = 4 - x; // Assegno alla variabile il valore di 4 - x(12) cioè -8

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var name1 = "jhon"; // Creo la variabile name1 e le assegno il valore
var name2 = "Jhon"; // Creo la variabile name2 e le assegno il valore
var risultato1 = false; //Creo una variabile booleana per controllare l'uguaglianza tra le 2 stringhe e le assegno il valore false
if (name1 == name2) {risultato1 = true}; //Se la condizione è vera la variabile risultato1 prenderà il valore true altrimenti rimmarrà false
console.log(risultato1); //Controllo il risultato

  /************EXTRA ***************/

var name1 = "jhon"; // Creo la variabile name1 e le assegno il valore
var name2 = "Jhon"; // Creo la variabile name2 e le assegno il valo
var risultato2 = false; //Se la condizione è vera la variabile risultato1 prenderà il valore true altrimenti rimmarrà false

name1 = name1.toLowerCase(); //Trasformo i caratteri della variabile name1 in caratteri minuscoli
console.log (name1); //Controllo il valore di name1
name2 = name2.toLowerCase(); //Trasformo i caratteri della variabile name2 in caratteri minuscoli
console.log (name2); //Controllo il valore di name2
if (name1 == name2) {risultato1 = true}; //Se la condizione è vera la variabile risultato1 prenderà il valore true altrimenti rimmarrà false
console.log(risultato1); //Controllo il risultato



