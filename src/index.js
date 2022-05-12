//Import Modules
import { pageLoad } from "./page-load";
import { menuLoad } from "./menu-load";
import { contactLoad } from "./contact-load";

pageLoad();

const contentDiv = document.querySelector('#content');
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    pageLoad();
});

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    menuLoad();
});

contactButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    contactLoad();
});



