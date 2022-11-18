import { hexArray } from './hexColors.js';
import { getRandomRGBColor, getRandomHslColor, getRandomHexColor } from './colorGenerators.js';

window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body'),
        logo = body.querySelector('.top__logo-text a'),
        defaultLogoColor = '#00ADB5',
        navButtons = body.querySelector('.top__nav'),
        navRgbBtn = body.querySelector('.nav-rgb'),
        navHexBtn = body.querySelector('.nav-hex'),
        navHslBtn = body.querySelector('.nav-hsl'),
        hamburgerBtn = body.querySelector('.hamburger'),
        mobileMenu = body.querySelector('.mobile__nav'),
        mobRgbBtn = body.querySelector('.mob-rgb'),
        mobHexBtn = body.querySelector('.mob-hex'),
        mobHslBtn = body.querySelector('.mob-hsl'),
        input = body.querySelector('.content-block__header input'),
        allButtons = body.querySelectorAll('button'),
        mainButtons = body.querySelectorAll('.content-block__buttons button'),
        mainRgbBtn = body.querySelector('.main-rgb'),
        mainHexBtn = body.querySelector('.main-hex'),
        mainHslBtn = body.querySelector('.main-hsl'),
        copyImg = body.querySelector('.content-block img'),
        copyAlert = body.querySelector('.content-block__copy-alert'),
        warningAlert = body.querySelector('.content-block__warning-alert'),
        pickAlert = body.querySelector('.content-block__pick-alert ');

    // // Random color generator FULLY DONE

    function generateRgbColor() {
        const rRgbNumber = getRandomRGBColor();

        input.value = `${rRgbNumber};`;
        input.style.color = rRgbNumber;
        input.style.textShadow = `0px 1px 2px ${rRgbNumber}`;
        body.style.backgroundColor = rRgbNumber;
    }

    function generateHexColor() {
        const randomHex = getRandomHexColor();
        const colorHex = hexArray[randomHex];

        input.value = `${colorHex};`;
        input.style.color = colorHex;
        body.style.backgroundColor = colorHex;
        input.style.textShadow = `0px 1px 2px ${colorHex}`;
    }

    function generateHslColor() {
        const rHsLNumber = getRandomHslColor();

        input.value = `${rHsLNumber};`;
        input.style.color = rHsLNumber;
        body.style.backgroundColor = rHsLNumber;

        input.style.textShadow = `0px 1px 2px ${rHsLNumber}`;
    }

    // Hamburger and Mobile menu functions
    
    function makeHambMobActive() {
        hamburgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    }

    // Alerts FULLY DONE

    function warningMessage() {
        warningAlert.classList.add('warning-alert__block');
        setTimeout(() => warningAlert.classList.remove('warning-alert__block'), 3000);
    }

    function formatPickedMessage(colorFormat) {
        pickAlert.innerText = `You picked ${colorFormat} format`;
        pickAlert.classList.add('pick-alert__block');
        setTimeout(() => pickAlert.classList.remove('pick-alert__block'), 3000);
    }

    // Appearance of buttons

    function rgbBtnAppearance() {
        mainHexBtn.style.display = 'none';
        mainHslBtn.style.display = 'none';
        mainRgbBtn.style.display = 'block';
        mainRgbBtn.innerText = 'Generate';
    }

    function hexBtnAppearance() {
        mainHslBtn.style.display = 'none';
        mainRgbBtn.style.display = 'none';
        mainHexBtn.style.display = 'block';
        mainHexBtn.innerText = 'Generate';
    }

    function hslBtnAppearance() {
        mainHexBtn.style.display = 'none';
        mainRgbBtn.style.display = 'none';
        mainHslBtn.style.display = 'block';
        mainHslBtn.innerText = 'Generate';
    }

    // Logo FULLY DONE

    logo.addEventListener('mouseenter', () => {
        const randomColor = getRandomRGBColor();
        logo.style.color = randomColor;
        logo.style.textShadow = `1px 1px 4px ${randomColor}`;
    });

    logo.addEventListener('mouseleave', () => {
        logo.style.color = defaultLogoColor;
        logo.style.textShadow = `1px 1px 4px ${defaultLogoColor}`;
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

    // Pick color format and hide other buttons

    mainRgbBtn.addEventListener('click', () => {
        generateRgbColor();
        rgbBtnAppearance();
        hamburgerBtn.classList.add('display-block');
    });

    mainHexBtn.addEventListener('click', () => {
        generateHexColor();
        hexBtnAppearance();
        hamburgerBtn.classList.add('display-block');
    });

    mainHslBtn.addEventListener('click', () => {
        generateHslColor();
        hslBtnAppearance();
        hamburgerBtn.classList.add('display-block');
    });

    // Generate buttons

    mainButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.classList.add('active'); // nav menu appears when you go to one of the pages
            navButtons.classList.add('fade');
        });
    });

    // Color copy section

    allButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            copyImg.classList.add('display-iB');
        });
    });

    copyImg.addEventListener('click', () => {
        input.select();
        input.setSelectionRange(0, input.length);
        const inputV = input.value;
        navigator.clipboard.writeText(inputV);
        copyAlert.classList.add('copy-alert__block'); // Copy alert message
        setTimeout(() => copyAlert.classList.remove('copy-alert__block'), 3000);
    });

    copyImg.addEventListener('mouseenter', () => {
        copyImg.setAttribute('src', '/img/copy-imgwhite.png');
    });
    copyImg.addEventListener('mouseleave', () => {
        copyImg.setAttribute('src', '/img/copy-img.png');
    });
});