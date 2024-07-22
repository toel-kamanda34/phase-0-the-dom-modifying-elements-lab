// remove the main element with id main
document.querySelector('main#main').remove();

//create a new h1 element
const newHeader = document.createElement('h1');

newHeader.id = 'victory';

newHeader.textContent = "Toel is the champion";

document.body.appendChild(newHeader);