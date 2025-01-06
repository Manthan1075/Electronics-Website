const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');


loginBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
  loginBtn.classList.add('active');
  signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
  signupBtn.classList.add('active');
  loginBtn.classList.remove('active');
});


loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  redirectToHome(); 
});
signupForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  redirectToHome(); 
});

function redirectToHome() {
  window.location.href = "../Home/Home.html"; 
}
