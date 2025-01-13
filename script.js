document.addEventListener("DOMContentLoaded", () => {
    alert("¡Bienvenido a mi página de jardinería!");

    const toggleInfo = document.getElementById("toggleInfo");
    const extraInfo = document.getElementById("extraInfo");

    toggleInfo.addEventListener("click", () => {
        extraInfo.classList.toggle("hidden");
    });

    const contactForm = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const error = document.getElementById("error");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!emailInput.value || !emailInput.value.includes("@")) {
            error.classList.remove("hidden");
        } else {
            error.classList.add("hidden");
            alert("¡Gracias por contactarnos!");
        }
    });
})