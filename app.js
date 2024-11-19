// Initialize EmailJS with your public key
emailjs.init("C-c_ieBFgoEKweILO"); // Replace with your actual public key

// Handle form submission
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var userEmail = document.getElementById('email').value; // Get the email entered by the user

    if (userEmail) {
        // Define template parameters
        var templateParams = {
            email: userEmail,  // Pass the email entered
        };

        // Send email using EmailJS
        emailjs.send("service_dagkzee", "template_alx52fv", templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response);
                alert('Thank you! We have received your email.');
            })
            .catch(function(error) {
                console.error('Failed to send email:', error);
                alert('There was an error sending the email. Please try again.');
            });
    } else {
        alert('Please enter a valid email address.');
    }
});
