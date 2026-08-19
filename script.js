function toggleMenu() {

    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");

}


document.querySelectorAll(".side-menu a").forEach(function(link) {

    link.addEventListener("click", function() {

        const menu = document.getElementById("menu");
        const overlay = document.getElementById("overlay");

        menu.classList.remove("active");
        overlay.classList.remove("active");

    });

});
