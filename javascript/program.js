const menuBar = document.getElementById('links');
let menuOpen = false;
let curentHero = 0
let heroSection = [];

const nextHeroBtn = document.querySelector(".right-btn")
const previosHeroBtn = document.querySelector(".left-btn")
for (let i = 1; i < 4; i++) {
    const hero = document.querySelector('.hero-' + i)
    heroSection.push(hero);
}
console.log(heroSection);

function openCloseMenu() {
    if (menuOpen) {
        menuBar.style.transform = "scaleX(0)";
    } else {
        menuBar.style.transform = "scaleX(1)";
    }
    menuOpen = !menuOpen;
}

function previosHero() {
    curentHero -= 1;
    if (curentHero <= 0) {
        curentHero = 0;
    }
    for (let i = 2; i > curentHero; i--) {
        heroSection[i].style.transform = ` translateX(${100 * (2 - i)}%)`;
        console.log(i);
    }
}

function nextHero() {
    curentHero += 1;
    if (curentHero >= 3) {
        curentHero = 2;
    }
    for (let i = curentHero; i < 3; i++) {
        heroSection[i].style.transform = ` translateX(${-100 * curentHero}%)`;
    }
}