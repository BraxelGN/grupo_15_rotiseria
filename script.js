function toggleMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("visible")) {
        mobileMenu.classList.remove("visible");
    } else {
        mobileMenu.classList.add("visible");
    }
}

