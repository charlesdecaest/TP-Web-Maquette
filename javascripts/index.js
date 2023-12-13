document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    console.log(hamburgerMenu); // Doit afficher l'élément du menu hamburger

    hamburgerMenu.addEventListener('click', function() {
        console.log('Menu hamburger clicked'); // Doit s'afficher lorsque vous cliquez sur le menu hamburger
        this.classList.toggle('open');
    });

    var dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    console.log(dropdownLinks); // Doit afficher la liste des liens du menu déroulant

    dropdownLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Dropdown link clicked'); // Doit s'afficher lorsque vous cliquez sur un lien du menu déroulant
            hamburgerMenu.classList.remove('open');
        });
    });
});