import {
    warningAlert,
    pickAlert
} from './app.js';

// Alerts

function warningMessage() {
    warningAlert.classList.add('warning-alert__block');
    setTimeout(() => warningAlert.classList.remove('warning-alert__block'), 3000);
}

function formatPickedMessage(colorFormat) {
    pickAlert.innerText = `You picked ${colorFormat} format`;
    pickAlert.classList.add('pick-alert__block');
    setTimeout(() => pickAlert.classList.remove('pick-alert__block'), 3000);
}

export {
    warningMessage,
    formatPickedMessage
};