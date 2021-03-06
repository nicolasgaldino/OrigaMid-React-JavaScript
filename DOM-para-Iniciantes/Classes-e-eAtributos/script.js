// Classlist
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
const menu = document.querySelector('.menu');
menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');
//-----------------------------------------------------------------------------------------
// Attributes
// Retorna uma array-like com os atributos do elemento
const animais0 = document.querySelector('.animais');
animais0.attributes; // retorna todos os atributos
animais0.attributes[0]; // retorna o primeiro atributo
//-----------------------------------------------------------------------------------------
// Getatribute e setatribute
// Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');
img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
img.hasAttributes(); // true / false se tem algum atributo
// É muito comum métodos de get e set
//-----------------------------------------------------------------------------------------
// Read only vs Writable
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.
const animais1 = document.querySelector('.animais');
animais1.className; // string com o nome das classes
animais1.className = 'azul'; // substitui completamente a string
animais1.className += ' vermelho'; // adiciona vermelho à string
animais1.attributes = 'class="ativo"'; // não funciona, read-only
// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''
//-----------------------------------------------------------------------------------------
// Exercícios

// Adicione a classe ativo a todos os itens do menu
const allMenu = document.querySelectorAll('.menu a');
allMenu.forEach((i) => {
  i.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
allMenu.forEach((i) => {
  i.classList.add('ativo');
});
allMenu[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((i) => {
  console.log(i.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const linkExt = document.querySelector('a[href^="http"]');
linkExt.setAttribute('href', 'Olá Mundo!');