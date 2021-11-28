const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbarlogo = document.querySelector('#navbar__logo');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// Show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const profileMenu = document.querySelector('#prof-page');
    const translationMenu = document.querySelector('#trans-page');
    const contactMenu = document.querySelector('#contact-page');

    let scrollPos = window.scrollY

    // add 'highlight' class to my menu items
    if(window.innerWidth > 840 && scrollPos < 600){
        profileMenu.classList.add('highlight');
        translationMenu.classList.remove('highlight');
        return;
    }
    if(window.innerWidth < 840 && scrollPos < 1000){
        profileMenu.classList.add('highlight');
        translationMenu.classList.remove('highlight');
        return;
    }

    else if (window.innerWidth > 840 && scrollPos < 1200){
        translationMenu.classList.add('highlight');
        profileMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth < 840 && scrollPos < 2400){
        translationMenu.classList.add('highlight');
        profileMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    }

    else if (window.innerWidth > 840 && scrollPos < 2000){
        contactMenu.classList.add('highlight');
        translationMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth < 840 && scrollPos < 3000){
        contactMenu.classList.add('highlight');
        translationMenu.classList.remove('highlight');
        return;
    }

    if((elem && window.innerWidth < 600 && scrollPos < 580) || elem){
        elem.classList.remove('highlight');
    }
}
window.addEventListener('click', highlightMenu);
window.addEventListener('scroll', highlightMenu);


// close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 840 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navbarlogo.addEventListener('click', hideMobileMenu);

