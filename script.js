// Include EmailJS SDK (if not already included in your HTML)
const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get the email input value
    const email = document.getElementById("email").value;

    // EmailJS configuration
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    // Send email using the template ID
    emailjs.send("YOUR_SERVICE_ID", "template_oivaqpp", {
        user_email: email, // This refers to the email entered by the user
    })
    .then((response) => {
        alert("Thank you! Email submitted successfully.");
        console.log("Email sent successfully:", response);
    })
    .catch((error) => {
        alert("Oops! Something went wrong. Please try again.");
        console.error("Error sending email:", error);
    });
});
