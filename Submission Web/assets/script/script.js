const menuBar = document.querySelector('.btn-menu');
const menuList = document.querySelector('.list-menu');

menuBar.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

menuList.addEventListener('click', () => {
    menuList.classList.toggle('active');
});