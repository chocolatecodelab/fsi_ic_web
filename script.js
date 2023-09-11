const navbarBurger = document.getElementsByClassName('navbar-burger')[0];
const navbarMenu = document.getElementsByClassName('navbar-menu')[0];
const closeMenu = document.getElementsByClassName('close')[0];
console.log(navbarMenu);
navbarBurger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
        navbarMenu.style.display = 'block';
        closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarMenu.style.display = 'none';
    closeMenu.style.display = "none";
    
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 480) {
        navbarBurger.style.display = 'block';
        navbarMenu.style.display = 'none';
    }else {
        navbarBurger.style.display = 'none';
        navbarMenu.style.display = 'block';
    }
});