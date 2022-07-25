'use strict'

let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.back-drop');
let buttons = document.querySelectorAll('.plan button');
let noButton = document.querySelector('.modal__actions button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let homeImage = document.querySelector('.main-header__brand');
let closeModal = ()=>{
    if(modal)
        modal.classList.remove('open');
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    homeImage.classList.remove('close');
};

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        if(modal)
            modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

if(noButton)
    noButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);
toggleButton.addEventListener('click', ()=>{
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    homeImage.classList.add('close');
});

