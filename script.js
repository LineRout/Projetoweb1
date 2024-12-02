// Script para validação

function validateRegisterForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Senhas não correspondem!');
      return false;
    }
    return true;
  }
  
  function validateLoginForm() {
    // Adiciona login para validação, se necessário
    return true;
  }
  