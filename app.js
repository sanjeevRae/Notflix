
emailjs.init(""); 


document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var userEmail = document.getElementById('email').value; 

    if (userEmail) {
   
        var templateParams = {
            email: userEmail, 
        };

       
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
