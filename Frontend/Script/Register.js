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
  const signupFormData = {
    name: signupForm.name.value,
    email: signupForm.email.value,
    password: signupForm.password.value,
    mno: signupForm.mno.value,
    age: signupForm.age.value
  };
  localStorage.setItem('signupData', JSON.stringify(signupFormData));
  
  window.location.href = "../Pages/Home.html";
})
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const loginFormData = {
    email: loginForm.email.value,
    password: loginForm.password.value
  };
  localStorage.setItem('loginData', JSON.stringify(loginFormData));
  window.location.href = "../Pages/Home.html";
})


function redirectToHome() {
  window.location.href = "../Pages/Home.html";
}