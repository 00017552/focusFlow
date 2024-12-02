// This file contains the JavaScript code for form validation.
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault()
    const messageError = document.getElementById("messageError");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let isValid = true;
    nameError.innerHTML=""
    emailError.innerHTML=""
    messageError.innerHTML=""
    if (!name) {
        isValid = false;
        nameError.innerHTML += "<p>Name is required.</p>";
    } else if (name.length < 3) {
        isValid = false;
        nameError.innerHTML += "<p>Name must be at least 3 characters long.</p>";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        isValid = false;
        emailError.innerHTML += "<p>Email is required.</p>";
    } else if (!emailPattern.test(email)) {
        isValid = false;
        emailError.innerHTML += "<p>Enter a valid email address.</p>";
    }

    if (!message) {
        isValid = false;
        messageError.innerHTML += "<p>Message cannot be empty.</p>";
    }
    if (!isValid) {
        event.preventDefault();
    }
    else{
        alert(`${name}, your message has submitted successfully!`)
        event.target.reset();
    }
});
