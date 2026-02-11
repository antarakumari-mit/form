document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

   
    document.querySelectorAll('.error').forEach(el => el.innerText = "");

    let isValid = true;

    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (username === "") {
        document.getElementById('userError').innerText = "Username is required";
        isValid = false;
    }

    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = "Invalid Email format (e.g., abc@xyz.com)";
        isValid = false;
    }

   
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = "Must be exactly 10 numeric digits";
        isValid = false;
    }


    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&@$#])[A-Za-z\d&@$#]{7,}$/;
    if (!passRegex.test(pass)) {
        document.getElementById('passError').innerText = "Min 7 chars, 1 Uppercase, 1 Digit, 1 Special (&,$#@)";
        isValid = false;
    }

    if (pass !== confirmPass || confirmPass === "") {
        document.getElementById('confirmError').innerText = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }
});