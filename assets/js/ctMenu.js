const ctMenu = document.querySelector('.bx-menu-alt-right');
const menu = document.querySelector('.menu');
const setRate = document.querySelector('#set_rate');
const rateMenu = document.querySelector('.rate');
const closeRate = document.querySelector('.rate .bx-x');
const valueMenu = document.querySelector('#set_value');
const menuSet = document.querySelector('.set');
const closeSet = document.querySelector('.set .bx-x');

ctMenu.onclick = () => {
    menu.classList.toggle('show');
}

setRate.onclick = () => {
    rateMenu.classList.add('show')
    menu.classList.toggle('show');
}

closeRate.onclick = () => {
    rateMenu.classList.remove('show')
}

valueMenu.onclick = () => {
    menuSet.classList.add('show')
    menu.classList.toggle('show');
}

closeSet.onclick = () => {
    menuSet.classList.remove('show')
}