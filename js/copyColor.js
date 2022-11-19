import {
    input,
    allButtons,
    copyImg,
    copyAlert
} from './app.js';

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