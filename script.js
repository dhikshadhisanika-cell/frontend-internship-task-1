const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let error = document.getElementById("error");
    let success = document.getElementById("success");

    error.innerText = "";
    success.innerText = "";

    if(name === "") {
        error.innerText = "Name is required";
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)) {
        error.innerText = "Enter a valid email";
        return;
    }

    if(message === "") {
        error.innerText = "Message is required";
        return;
    }

    success.innerText = "Form submitted successfully!";
});