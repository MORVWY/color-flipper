    import {
        hexArray
    } from './hexColors.js';

    import {
        body,
        input
    } from './app.js';

    // Random colors logic

    function getRandomRGBColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const randomColorElement = `rgb(${r}, ${g}, ${b})`;

        return randomColorElement;
    }

    function getRandomHslColor() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 101);
        const l = Math.floor(Math.random() * 101);

        const randomColorHslElement = `hsl(${h}, ${s}%, ${l}%)`;

        return randomColorHslElement;
    }

    function getRandomHexColor() {
        return Math.floor(Math.random() * hexArray.length);
    }

    // Random color generator

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

    export {
        getRandomRGBColor,
        getRandomHslColor,
        getRandomHexColor,
        generateRgbColor,
        generateHexColor,
        generateHslColor
    };