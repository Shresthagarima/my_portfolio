document.addEventListener("DOMContentLoaded", function () {

    // Elements
    const toggleDetailsBtn = document.querySelector("#toggleDetailsBtn");
    const courseDetails = document.querySelector("#courseDetails");

    const searchInput = document.querySelector("#searchInput");
    const searchGrid = document.querySelector("#searchGrid");
    const searchStatus = document.querySelector("#searchStatus");
    const cards = searchGrid.querySelectorAll(".card");

    const nameInput = document.querySelector("#nameInput");
    const charCount = document.querySelector("#charCount");
    const trimCount = document.querySelector("#trimCount");

    // 1. TOGGLE COURSE DETAILS

    toggleDetailsBtn.addEventListener("click", function () {

        courseDetails.classList.toggle("hidden");

        const isHidden = courseDetails.classList.contains("hidden");

        if (isHidden) {
            toggleDetailsBtn.textContent = "Show Details";
            toggleDetailsBtn.setAttribute("aria-expanded", "false");
        } else {
            toggleDetailsBtn.textContent = "Hide Details";
            toggleDetailsBtn.setAttribute("aria-expanded", "true");
        }
    });

    // 2. LIVE SEARCH

    function filterCards() {

        const query = searchInput.value.trim().toLowerCase();

        let visibleCount = 0;

        cards.forEach(function (card) {

            const name = card.dataset.name.toLowerCase();
            const tags = card.dataset.tags.toLowerCase();

            const matches =
                query === "" ||
                name.includes(query) ||
                tags.includes(query);

            if (matches) {
                card.style.display = "block";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (query === "") {
            searchStatus.textContent = "4 results";
        } else {
            searchStatus.textContent =
                visibleCount + " results for " + query;
        }
    }


    // Keydown events
    searchInput.addEventListener("keydown", function (event) {

        // Escape: clear search
        if (event.key === "Escape") {
            searchInput.value = "";
            filterCards();
        }

        // Enter: show Searching message
        if (event.key === "Enter") {
            event.preventDefault();
            searchStatus.textContent = "Searching...";
        }
    });


    // Keyup: live filtering
    searchInput.addEventListener("keyup", function (event) {

        if (
            event.key === "Shift" ||
            event.key === "Control" ||
            event.key === "Alt" ||
            event.key === "Enter" ||
            event.key === "Escape"
        ) {
            return;
        }

        filterCards();
    });

    // 3. CHARACTER COUNTER

    nameInput.addEventListener("input", function () {

        const value = nameInput.value;
        const trimmedValue = value.trim();

        charCount.textContent = value.length;
        trimCount.textContent = trimmedValue.length;

        // If input contains only spaces
        if (value.length > 0 && trimmedValue.length === 0) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "#1a56db";
        }
    });

});