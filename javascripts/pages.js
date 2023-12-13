document.addEventListener("DOMContentLoaded", function() {
    let decrementButton = document.getElementById("decrement");
    let incrementButton = document.getElementById("increment");
    let countElement = document.getElementById("count");

    decrementButton.addEventListener("click", function() {
        let count = parseInt(countElement.textContent, 10);
        if (count > 1) {
            countElement.textContent = count - 1;
        }
    });

    incrementButton.addEventListener("click", function() {
        let count = parseInt(countElement.textContent, 10);
        countElement.textContent = count + 1;
    });
});