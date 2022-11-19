import {
    logo,
    defaultLogoColor
} from './app.js';
import {
    getRandomRGBColor
} from './colorGenerators.js';


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