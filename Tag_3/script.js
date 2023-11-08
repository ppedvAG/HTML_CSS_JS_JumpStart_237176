/*
    Mehrzeiliger Kommentar
*/

// Ich bin einzeilig

console.log("Hallo Welt!");
document.write("Hallo Welt!");

// Addition mit Variablen
var Zahl1 = 5;
var Zahl2 = 10;

var ergebnis = Zahl1 + Zahl2;
document.write("<br>" + ergebnis);

// Funktionen
function Addition(zahl1, zahl2)
{
    return zahl1 + zahl2;
}

// Aufruf der Funktion
var erg = Addition(20, 30);
document.write("<br>" + erg);


// Uebung
// Schreibe mir eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll dann true sein, wenn die Zahl ungerade ist dann false
// Funktion isEven(number) => % (Modulo)
function isEven(number)
{
    if(number % 2 == 0) {
        document.write("Zahl ist gerade!");
        return true;
    }
    else {
        document.write("Zahl ist ungerade!");
        return false;
    }
}

// Das selbe dann noch mal mit ternary Operator (Konditionaloperator)
// Syntax: (Bedingung) ? (codeBlock falls wahr) : (codeBlock falls falsch)
function isEven(number)
{
    return (number % 2 == 0) ? true : false;
}


// For-Schleife (Hotkey STRG + K STRG + C) Unkommentieren (STRG + K STRG + U)
// for(i = 0; i <=10; i++)
// {
//     alert(i);
// }

// While-Schleife
i = 0;

// while(i <= 10)
// {
//     alert(i);
//     i++;
// }

// Do-While
// do {
//     alert(i);
//     i++;
// } while(i <= 10)



// Arrays

var bundesliga = new Array();

bundesliga[1] = 100;
bundesliga[4] = "Dortmund";


// Objekt
function Auto(Marke, Modell)
{
    this.Marke = Marke;
    this.Modell = Modell;
}

// Objekt initialisiert mit Werten
var VW = new Auto("VW", "Golf VII");

// #todo: Das initialisierte Objekt ausgeben:
document.write("Marke: " + VW.Marke);
document.write("Modell: " + VW.Modell);

// if-Abfrage an Objekten
if(VW.Marke) {
    document.write("Die Eigenschaft ist vorhanden");
} else {
    document.write("Die Eigenschaft ist nicht gesetzt");
}
