document.addEventListener("DOMContentLoaded", () => {
    // Step 1: Select the form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Step 2: Add event listener for form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission to the server

        // Step 3: Retrieve and trim user inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Step 4: Initialize validation variables
        let isValid = true;
        const messages = [];

        // Step 5: Validate username (minimum 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Step 6: Validate email (must include '@' and '.')
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must include '@' and '.'.");
        }

        // Step 7: Validate password (minimum 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 8: Display feedback
        feedbackDiv.style.display = "block"; // Make feedback visible
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color (green)
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Error messages
            feedbackDiv.style.color = "#dc3545"; // Error color (red)
        }
    });
});
