let targetColor = "red";
let attempts = 0;

function checkColor(color) {
    attempts++;
    if (color === targetColor) {
        document.getElementById("message").textContent = `Richtig! Du hast ${attempts} Versuche gebraucht.`;
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Falsch! Versuche es erneut.";
        document.getElementById("message").style.color = "red";
    }
}

// Zufällige Auswahl der Ziel-Farbe
const colors = ["red", "blue", "green"];
targetColor = colors[Math.floor(Math.random() * colors.length)];
