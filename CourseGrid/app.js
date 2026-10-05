document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector("#menuBtn");
    const mainNav = document.querySelector("#mainNav");

    // Hide navigation when the page loads on mobile
    if (window.innerWidth <= 600) {
        mainNav.classList.add("hidden");
    }

    // Toggle menu when button is clicked
    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("hidden");

        const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

        menuBtn.setAttribute("aria-expanded", String(!isExpanded));

        menuBtn.textContent = isExpanded ? "Menu" : "Close";
    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            window.innerWidth <= 600 &&
            !mainNav.classList.contains("hidden")
        ) {
            mainNav.classList.add("hidden");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "Menu";
        }
    });

    // Show navigation again when resized to desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 600) {
            mainNav.classList.remove("hidden");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "Menu";
        } else if (mainNav.classList.contains("hidden")) {
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "Menu";
        }
    });

});