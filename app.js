document
  .getElementById("contact-form")
  .addEventListener("submit", (event)=> {
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    nameInput.classList.remove("invalid-input");
    emailInput.classList.remove("invalid-input");
    messageInput.classList.remove("invalid-input");

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let message = messageInput.value.trim();

    if (name === "") {
      nameError.textContent = "Name is required.";
      nameInput.classList.add("invalid-input");
    }

    if (email === "") {
      emailError.textContent = "Email is required.";
      emailInput.classList.add("invalid-input");
    }

    if (message === "") {
      messageError.textContent = "Message is required.";
      messageInput.classList.add("invalid-input");
    }

    if (name === "" || email === "" || message === "") {
      return;
    }

    document.getElementById("contact-container").innerHTML =
      '<div id="thank-you-message">Thank you!  i will get back to you soon.</div>';
  });
