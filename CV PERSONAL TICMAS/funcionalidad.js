const button = document.querySelector(".btn")
const items = document.querySelector(".ClaseDatos")
let buttonText = button.innerHTML;

button.onclick = function() {
    items.classList.toggle("hidden");
    if (buttonText === "ver más") {
        buttonText = "ocultar";
    } else {
        buttonText = "ver más";
    }
    button.innerHTML = buttonText;
    
    if (items.style.display === "none") {
        items.style.display = "block";
    } else {
        items.style.display = "none";
    }

};

