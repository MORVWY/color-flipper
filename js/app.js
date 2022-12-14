// DOM element selection

export const body = document.querySelector('body'),
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