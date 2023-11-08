let cookieCount = 0;
let autoClickers = 0;
let autoClickerCost = 10;

const cookie = document.getElementById("cookie");
const cookieCountDisplay = document.getElementById("cookie-count");
const clickButton = document.getElementById("click-button");
const autoClickerButton = document.getElementById("auto-clicker-button");
const autoClickerCountDisplay = document.getElementById("auto-clicker-count");

cookie.addEventListener("click", () => {
    cookieCount++;
    updateCookieCount();
});

clickButton.addEventListener("click", () => {
    cookieCount++;
    updateCookieCount();
});

autoClickerButton.addEventListener("click", () => {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        autoClickers++;
        autoClickerCost = Math.ceil(autoClickerCost * 1.2);
        updateCookieCount();
        updateAutoClickers();
    }
});

setInterval(() => {
    cookieCount += autoClickers;
    updateCookieCount();
}, 1000);

function updateCookieCount() {
    cookieCountDisplay.innerText = `${cookieCount} Cookies`;
}

function updateAutoClickers() {
    autoClickerCountDisplay.innerText = `Auto Clickers: ${autoClickers}`;
    autoClickerButton.innerText = `Buy Auto Clicker (${autoClickerCost} Cookies)`;
}

updateCookieCount();
updateAutoClickers();
