import {
    mainRgbBtn,
    mainHexBtn,
    mainHslBtn,
    hamburgerBtn
} from './app.js';

import {
    generateRgbColor,
    generateHexColor,
    generateHslColor
} from './colorGenerators.js';

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

export {
    rgbBtnAppearance,
    hexBtnAppearance,
    hslBtnAppearance
};