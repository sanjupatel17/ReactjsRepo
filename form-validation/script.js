const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Show Error
function showError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector(".error");

    small.innerText = message;
    small.style.visibility = "visible";

    input.classList.add("error-input");
    input.classList.remove("success-input");
}

// Show Success
function showSuccess(input) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector(".error");

    small.style.visibility = "hidden";

    input.classList.remove("error-input");
    input.classList.add("success-input");
}

// Validate Email Format
function isValidEmail(email) {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regex.test(email);
}

// Validate Password Strength
function isStrongPassword(password) {
    return password.length >= 6;
}

// Required Field Check
function checkRequired(input) {
    if (input.value.trim() === "") {
        showError(input, "This field is required");
        return false;
    } else {
        showSuccess(input);
        return true;
    }
}

// Real-time validation (input event)
nameInput.addEventListener("input", () => {
    checkRequired(nameInput);
});

emailInput.addEventListener("input", () => {
    if (!checkRequired(emailInput)) return;

    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Email is not valid");
    } else {
        showSuccess(emailInput);
    }
});

passwordInput.addEventListener("input", () => {
    if (!checkRequired(passwordInput)) return;

    if (!isStrongPassword(passwordInput.value)) {
        showError(passwordInput, "Password must be at least 6 characters");
    } else {
        showSuccess(passwordInput);
    }
});

// Blur event (when leaving field)
nameInput.addEventListener("blur", () => checkRequired(nameInput));
emailInput.addEventListener("blur", () => checkRequired(emailInput));
passwordInput.addEventListener("blur", () => checkRequired(passwordInput));

// Submit event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isNameValid = checkRequired(nameInput);
    const isEmailValid = checkRequired(emailInput) && isValidEmail(emailInput.value);
    const isPasswordValid = checkRequired(passwordInput) && isStrongPassword(passwordInput.value);

    if (isNameValid && isEmailValid && isPasswordValid) {

        // Save data in LocalStorage
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        localStorage.setItem("userData", JSON.stringify(formData));

        alert("Form submitted successfully!");
        form.reset();
    }
});
