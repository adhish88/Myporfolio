document.getElementById('form').addEventListener('submit', function(event) {
    var name = document.querySelector('.contact__inputs input[type="text"]').value.trim();
    var email = document.querySelector('.contact__inputs input[type="email"]').value.trim();
    var message = document.querySelector('.contact__inputs textarea').value.trim();
    var errorElement = document.querySelector('.error');
    var isValid = true;

    
    errorElement.innerHTML = '';

    // Validate name
    if (name === '') {
        errorElement.innerHTML += 'Please fill out this field<br>';
        isValid = false;
    }

    // Validate email
    if (email === '') {
        errorElement.innerHTML += 'Please fill out this field<br>';
        isValid = false;
    } 

    // Validate message
    if (message === '') {
        errorElement.innerHTML += 'Please fill out this field<br>';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); 
    }
});

function isValidEmail(email) {
    
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}