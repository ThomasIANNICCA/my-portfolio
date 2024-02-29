const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener('click', openHandle);

function openHandle(){
    const navbar = document.querySelector('.header_nav');
    const burgerMenuImage = document.querySelector('.burger-menu__img')
    navbar.classList.toggle('open');

    if(navbar.classList.contains('open')) {
        // Si oui, changer la source de l'image en ouvrant le menu burger
        burgerMenuImage.src = "./images/fermer.png";
    } else {
        // Sinon, changer la source de l'image en fermant le menu burger
        burgerMenuImage.src = "./images/menu.png";
    }
}