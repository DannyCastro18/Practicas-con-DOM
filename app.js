// crear elemento 
let body = document.querySelector('body');
console.log(body);
body.style.fontFamily = '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

let main = document.createElement('main');
console.log(main);
main.style.backgroundImage = 'url(https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg';
main.style.height = '100vh';

let header = document.createElement ('header');
console.log(header);
header.style.padding = '3rem'

let navbar = document.createElement('navbar');
console.log(navbar);

let ul = document.createElement('ul');
console.log(ul)
ul.style.listStyle ='none';
ul.style.color ='white';
ul.style.gap = '2rem'
ul.style.display = 'flex';
ul.style.float = 'right';
let li = document.createElement('li');
console.log(li)

let a = document.createElement('a');
console.log(a);

let li1 = document.createElement('li');
console.log(li)

let a1 = document.createElement('a');
console.log(a);

let li2 = document.createElement('li');
console.log(li)

let a2 = document.createElement('a');
console.log(a);

let li3 = document.createElement('li');
console.log(li)

let a3 = document.createElement('a');
console.log(a);

let li4 = document.createElement('li');
console.log(li)

let a4 = document.createElement('a');
console.log(a);


let article = document.createElement('article');
console.log(article);
article.style.height = '100%';
article.style.width = '94vh';
article.style.display = 'flex';
article.style.justifyContent = 'center';
article.style.alignItems = 'center';
article.style.margin = 'auto';

let h3 = document.createElement('h3');
console.log(h3);
h3.style.color = 'white';
h3.style.fontStyle = 'italic';
h3.style.fontWeight = '500';
h3.style.fontSize = '3rem';

let titulo = document.createElement('titulo');
console.log(titulo);

const img = document.createElement('img');
img.src = 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg';
img.style.width = '8rem';

header.appendChild(img);

body.insertAdjacentElement('beforeend', main);

main.insertAdjacentElement('beforeend', header);

header.insertAdjacentElement("beforeend", navbar);

navbar.insertAdjacentElement("beforeend", ul);

ul.insertAdjacentElement('beforeend', li);
ul.insertAdjacentElement('beforeend', li1);
ul.insertAdjacentElement('beforeend', li2);
ul.insertAdjacentElement('beforeend', li3);
ul.insertAdjacentElement('beforeend', li4);

li.insertAdjacentElement('beforeend', a);
li1.insertAdjacentElement('beforeend', a1);
li2.insertAdjacentElement('beforeend', a2);
li3.insertAdjacentElement('beforeend', a3);
li4.insertAdjacentElement('beforeend', a4);

main.insertAdjacentElement('beforeend', article);

article.insertAdjacentElement('beforeend', h3);
article.insertAdjacentElement('beforeend', titulo);

let texto = document.createTextNode('Welcome To Our Studio!');
h3.appendChild(texto);

let texto1 = document.createTextNode('IT IS NICE TO MEET YOU');
titulo.appendChild(texto1);

// agregar contenido
a1 = document.createTextNode('SERVICES');
a2 = document.createTextNode('PORTFOLIO');
a3 = document.createTextNode('ABOUT');
a4 = document.createTextNode('TEAM');
a5 = document.createTextNode('CONTACT');

li.appendChild(a1);
li1.appendChild(a2);
li2.appendChild(a3);
li3.appendChild(a4);
li4.appendChild(a5);

// agregar varios estilos
// main.style.cssText = 'background-color: black; color: white;';


// crear la seccion
let presentacion = document.createElement('section');
console.log(presentacion)
body.insertAdjacentElement('beforeend', presentacion);

let footer = document.createElement('footer');
console.log(footer)
body.insertAdjacentElement('beforeend', footer);

// crear elemento img
// const img = document.createElement('img');
// img.src = 'assets/img/navbar-logo.svg';
// img.alt = 'logo';