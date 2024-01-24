const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const Christmas = "25 Dec 2024";

function countdown() {
    const ChristmasDate = new Date(Christmas);
    const currentDate = new Date();

    const totalSeconds = (ChristmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❅';

    const left = Math.random() * window.innerWidth; // Posizione orizzontale casuale
    const top = Math.random() * -20; // Posizione verticale casuale

    snowflake.style.left = `${left}px`;
    snowflake.style.top = `${top}px`;

    return snowflake;
}

function addSnowflake() {
    const snowflake = createSnowflake();
    snowContainer.appendChild(snowflake);

    // Rimuovi il fiocco di neve dopo che è caduto fuori dallo schermo
    snowflake.addEventListener('animationiteration', () => {
        snowContainer.removeChild(snowflake);
    });
}

// Aggiungi i fiocchi di neve iniziali al contenitore
const snowContainer = document.querySelector('.snow-container');
for (let i = 0; i < 5; i++) {
    const snowflake = createSnowflake();
    snowContainer.appendChild(snowflake);
}

// Aggiungi un nuovo fiocco di neve ogni secondo
setInterval(addSnowflake, 300);

// initial call
countdown();

setInterval(countdown, 1000);
