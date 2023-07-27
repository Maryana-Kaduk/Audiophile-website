const btnLines = document.querySelector('.header__dropdown');
const navElement = document.querySelector('.header__open');
const cart = document.querySelector('.header__basket');
const cartComponent = document.querySelector('.cart');
const button = document.querySelector('.open__order')
const order = document.querySelector('.order')
const orderComponent = document.querySelector('.order__block')

btnLines.addEventListener('click', () => {
    if (navElement.classList == 'header__open active') {
        navElement.classList.remove('active');
    } else {
        navElement.classList.add('active');
    };
});

navElement.addEventListener('click', () => {
    navElement.classList.remove('active');
});

cart.addEventListener('click', () => {
    if (cartComponent.classList == 'cart opened') {
        cartComponent.classList.remove('opened');
    } else {
        cartComponent.classList.add('opened');
    };
});

cartComponent.addEventListener('click', () => {
    cartComponent.classList.remove('opened');
});

button.addEventListener('click', () => {
    order.classList.add('clicked');
});

order.addEventListener('click', () => {
    order.classList.remove('clicked');
});
    

