import {
    body,
    navButtons,
    navRgbBtn,
    navHexBtn,
    navHslBtn,
    hamburgerBtn,
    mobileMenu,
    mobRgbBtn,
    mobHexBtn,
    mobHslBtn,
    mainButtons,
    mainRgbBtn,
    mainHexBtn,
    mainHslBtn
} from './app.js';

import {
    rgbBtnAppearance,
    hexBtnAppearance,
    hslBtnAppearance,
} from './mainButtons.js';

import {
    warningMessage,
    formatPickedMessage
} from './alerts.js';

import {
    generateRgbColor,
    generateHexColor,
    generateHslColor
} from './colorGenerators.js';

// Hamburger and Mobile menu functions

function makeHambMobActive() {
    hamburgerBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
}

// Nav menu appearance

mainButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.classList.add('active');
        navButtons.classList.add('fade');
    });
});

// Nav menu

navRgbBtn.addEventListener('click', () => {
    if (mainRgbBtn.style.display !== 'none') {
        warningMessage();
    } else {
        rgbBtnAppearance();
        generateRgbColor();
        formatPickedMessage('RGB');
    }
});

navHexBtn.addEventListener('click', () => {
    if (mainHexBtn.style.display !== 'none') {
        warningMessage();
    } else {
        hexBtnAppearance();
        generateHexColor();
        formatPickedMessage('HEX');
    }
});

navHslBtn.addEventListener('click', () => {
    if (mainHslBtn.style.display !== 'none') {
        warningMessage();
    } else {
        hslBtnAppearance();
        generateHslColor();
        formatPickedMessage('HSL');
    }
});

// Hamburger menu

hamburgerBtn.addEventListener('click', function () {
    body.classList.toggle('overflow-hidden');
    hamburgerBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

mobRgbBtn.addEventListener('click', () => {
    if (mainRgbBtn.style.display !== 'none') {
        warningMessage();
    } else {
        rgbBtnAppearance();
        generateRgbColor();
        formatPickedMessage('RGB');
    }

    makeHambMobActive();
});

mobHexBtn.addEventListener('click', () => {
    if (mainHexBtn.style.display !== 'none') {
        warningMessage();
    } else {
        hexBtnAppearance();
        generateHexColor();
        formatPickedMessage('HEX');
    }

    makeHambMobActive();
});

mobHslBtn.addEventListener('click', () => {
    if (mainHslBtn.style.display !== 'none') {
        warningMessage();
    } else {
        hslBtnAppearance();
        generateHslColor();
        formatPickedMessage('HSL');
    }

    makeHambMobActive();
});