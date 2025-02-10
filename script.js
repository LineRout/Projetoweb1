// Script for form validation

function validateRegisterForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return false;
    }
    return true;
  }
  
  function validateLoginForm() {
    // Add login form validation if needed
    return true;
  }
  