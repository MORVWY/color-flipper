    // Random colors logic
    import { hexArray } from './hexColors.js';

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

    export { getRandomRGBColor, getRandomHslColor, getRandomHexColor};