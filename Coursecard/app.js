document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".card");
    const totalClicks = document.querySelector("#totalClicks");
    let total = 0;

    cards.forEach(function (card) {

        let count = 0;

        const button = card.querySelector(".countBtn");

        button.addEventListener("click", function () {
            count++;
            total++;

            button.textContent = "Clicked " + count;
            totalClicks.textContent = "Total: " + total;

            if (count % 2 === 0) {
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "blue";
            }
        });

        card.addEventListener("mouseenter", function () {
            console.log(card.dataset.course);
        });

        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                button.click();
            }
        });

    });

});