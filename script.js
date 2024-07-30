
  function validateForm() {
    let isValid = true;
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (firstName.value.trim() === "") {
        isValid = false;
        firstName.classList.add('is-invalid');
    } else {
        firstName.classList.remove('is-invalid');
    }

    if (lastName.value.trim() === "") {
        isValid = false;
        lastName.classList.add('is-invalid');
    } else {
        lastName.classList.remove('is-invalid');
    }

    if (email.value.trim() === "" || !email.value.includes('@') || !email.value.includes('.')) {
        isValid = false;
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.trim() === "") {
        isValid = false;
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('signupForm').reset();
    }
}

