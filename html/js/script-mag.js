const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".openModal");
console.log(buttons);
const closeButton = document.querySelector(".close-button");

    function handleClick(event) {
        modal.style.display = "block"
    };

    buttons.forEach(button => {
        button.addEventListener('click', handleClick)
    });


closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll("#requestForm input");
    inputs.forEach(input => {
        input.classList.remove("error");
    });

    const errorMessage = document.querySelector('.error-message');
    errorMessage.style.display = 'none';

    let hasError = false;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add("error");
            hasError = true;
        }
    });

    if (hasError) {
        errorMessage.style.display = 'block'; 
        return; 
    }

    modal.style.display = "none";

    document.getElementById("requestForm").reset();
});