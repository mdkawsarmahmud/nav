const loginBtn = document.getElementById('loginBtn');
const loginFormContainer = document.getElementById('loginFormContainer');
const registerFormContainer = document.getElementById('registerFormContainer');
const showRegisterForm = document.getElementById('showRegisterForm');
const showLoginForm = document.getElementById('showLoginForm');

// profile
const pfBtn = document.getElementById('pfBtn');
const profileFormContainer = document.getElementById('profileFormContainer');
pfBtn.addEventListener('click', () => {
  profileFormContainer.classList.toggle('hidden');
});
// profile


loginBtn.addEventListener('click', () => {
  registerFormContainer.classList.add('hidden');
    loginFormContainer.classList.toggle('hidden');
});
showLoginForm.addEventListener('click', () => {
  registerFormContainer.classList.add('hidden');
  loginFormContainer.classList.remove('hidden');
});

showRegisterForm.addEventListener('click', () => {
    // loginFormContainer.classList.add('hidden');
    registerFormContainer.classList.remove('hidden');
});

window.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll functionality
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});