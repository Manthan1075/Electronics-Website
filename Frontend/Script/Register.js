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

signupForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  window.location.href = "../Pages/Home.html";
})
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  window.location.href = "../Pages/Home.html";
})


function redirectToHome() {
  window.location.href = "../Pages/Home.html"; 
}
