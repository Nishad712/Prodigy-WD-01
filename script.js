document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    const navItems = document.querySelectorAll(".nav-item a");
    navItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            item.style.color = "yellow";
        });

        item.addEventListener("mouseout", function() {
            item.style.color = "";
        });
    });
});
