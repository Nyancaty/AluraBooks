const menu = document.querySelector('.cabecalho__menu-hamburguer')
const menuAtivo = document.querySelector('.menu')


menu.addEventListener('click', () => {
    menuAtivo.classList.toggle('active');
    menu.classList.toggle('fundo')
});



const categorias = document.querySelector('.categorias')
const menuAtivo2 = document.querySelector('.menu_1024')
categorias.addEventListener('click', () => {
    menuAtivo2.classList.toggle('active');
});
