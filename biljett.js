document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const firstNameInput = document.querySelector("#fnamn");
    const lastNameInput = document.querySelector("#enamn");
    const emailInput = document.querySelector("#email");

    form.addEventListener("submit", function(event) {
        removeErrorMessages();

        if (!firstNameInput.value) {
            displayErrorMessage(firstNameInput, "Fyll i förnamn");
            event.preventDefault();
        }
        if (!lastNameInput.value) {
            displayErrorMessage(lastNameInput, "Fyll i efternamn");
            event.preventDefault();
        }
        if (!isValidEmail(emailInput.value)) {
            displayErrorMessage(emailInput, "Ogiltig e-postadress");
            event.preventDefault();
        }
    });

    function displayErrorMessage(inputElement, message) {
        const errorMessage = document.createElement("span");
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
        inputElement.insertAdjacentElement("afterend", errorMessage);
    }

    function removeErrorMessages() {
        const errorMessages = document.querySelectorAll("span");
        errorMessages.forEach(errorMessage => errorMessage.remove());
    }

    function isValidEmail(email) {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    }
});