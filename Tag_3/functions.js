// Funktionen

function ausgabe() {
    console.log("Das ist eine Funktion");
}

// Aufruf der Funktion
ausgabe();

// Berechnung in einer Funktion
var zahl1 = 10;
var zahl2 = 20;

function Addition(zahl1, zahl2) {
    return zahl1 + zahl2;
}

var Ergebnis_Addition = Addition(zahl1, zahl2);
document.write(Ergebnis_Addition);

document.write("<br><br>");
// Kontrollstrukturen
// if-Abfrage
// Können beliebig verschachtelt werden
// Der Blockinhalt wird nur ausgeführt, falls die Bedingung wahr ist
let numberOne = 40;
let numberTwo = 30;

if(numberOne < numberTwo)
{
    console.log(numberOne + " ist kleiner als " + numberTwo);
}
// else if muss immer nach if folgen!!!
else if (numberOne > numberTwo)
{
    console.log(numberOne + " ist größer als " + numberTwo);
}
// else wird ausgeführt falls das if oder else if falsch war
else {
    console.log(numberOne + " ist gleich groß wie " + numberTwo);
}

// Vergleichs-Operatoren in JS

// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich
// == selber Wert
// != ungleicher Wert
// === selber Wert und selber Typ
// !== ungleicher Wert oder Typ

var a = 5;

// Wenn "a" den selben Wert hat wie 5, dann soll "True" an der Console ausgegeben werden
// ansonsten kommt "False"
(a == 5) ? console.log("True") : console.log("False");

/*
let alt = "5";
let neu = 5;
let erg = alt * neu;
document.write(erg);*/

// Switch-Anweisung
var fahrzeug = "Boot";

switch(fahrzeug) {
    case "Flugzeug":
        console.log("Flieg!");
        break;
    case "Boot":
        console.log("Schwimm!");
        break;
    case "Auto":
        console.log("Fahr!");
        break;
    default:
        console.log("Geh zu Fuß!");
        // break;
}

// Lösung zur Übungsaufgabe mit Switch-Case
let numberEins = 1;

switch (numberEins) {
    case 1:
        document.write("Zahl ist 1");
        break;
    case 10:
        document.write("Zahl ist 10");
        break;
    case 40:
        document.write("Zahl ist 40");
        break;
    default:
        document.write("Zahl hat einen unerwarteten Wert");
        // Beim default benötigen wir kein break; da danach nicht mehr kommt
}

document.write("<br><br>");
// Schleifen
// for-Schleife
for(var i = 0; i <= 10; i++) {
    document.write("Zahl: " + i + "<br>");
}

document.write("<br><br>");

// While-Schleife
let zaehler = 0;
while(zaehler <= 10)
{
    document.write("Zaehler: " + zaehler + "<br>");
    zaehler++;
}

document.write("<br><br>");

// Do-While
let tuEtwas = 0;
do {
    document.write("tuEtwas Zahl: " + tuEtwas + "<br>");
    tuEtwas++;
} while (tuEtwas < 10);

// Array erstellen

// Möglichkeit 1
var bundesliga = new Array() // Leeres Array
bundesliga[1] = 100;
bundesliga[4] = "Dortmund";

// Möglichkeit 2
var zweiteBundesliga = new Array(4) // Array mit 4 Elementen
zweiteBundesliga[0] = "Mainz";
zweiteBundesliga[1] = "Dortmund";
zweiteBundesliga[2] = "Nürnberg";
zweiteBundesliga[3] = "Bayern";

// Möglichkeit 3
var dritteBundesliga = ["Dortmund", "Bremen", "Bayern", "Stuttgart"];

// Objekte
// Das ist der Konstruktor des Objektes
function Auto(parameterMarke, parameterModell) {
    this.Marke = parameterMarke;
    this.Modell = parameterModell;
    // "BMW"
    // "M4"
}

// Jetzt initialisieren wir das Objekt mit Werten
// 1. Parameter = Marke; 2. Parameter = Modell
var VW = new Auto("VW", "VII");
var BMW = new Auto("BMW", "M4");

// #todo: Das Objekt ausgeben
// Objekt ausgeben
document.write("Marke: " + BMW.Marke);
document.write("Modell: " + BMW.Modell);

document.write("<br><br>");

// if-Abfrage an Objekten
if(VW.Marke) {
    document.write("Die Eigenschaft ist vorhanden");
} else {
    document.write("Die Eigenschaft ist nicht gesetzt");
}

// Math.random() => Zufallszahlen

// Date-Objekte
var Datum = new Date();
document.write(Datum);
