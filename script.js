// --------- Buttons & Events ---------
const colorBtn = document.getElementById('colorBtn');
const textBtn = document.getElementById('textBtn');
const secretBtn = document.getElementById('secretBtn');

colorBtn.addEventListener('click', () => {
  // Change button color randomly
  colorBtn.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

textBtn.addEventListener('click', () => {
  // Change button text toggling
  textBtn.textContent = textBtn.textContent === 'Change My Text' ? 'Text Changed!' : 'Change My Text';
});

// Secret action on double click
secretBtn.addEventListener('dblclick', () => {
  alert('You found the secret! 🎉');
});

// Detect any key press and log
document.addEventListener('keypress', (e) => {
  console.log(`You pressed the key: "${e.key}"`);
});


// --------- Image Gallery ---------
const galleryImages = document.querySelectorAll('.gallery-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showImage(index) {
  galleryImages.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

showImage(currentIndex); // Initialize gallery


// --------- Tabs ---------
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});


// --------- Form Validation ---------
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Real-time feedback on input
emailInput.addEventListener('input', () => {
  emailError.textContent = emailInput.validity.valid ? '' : 'Please enter a valid email.';
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
  } else {
    passwordError.textContent = '';
  }
});

// On form submit
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  if (!emailInput.validity.valid) {
    emailError.textContent = 'Please enter a valid email.';
    valid = false;
  }

  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully! 🎉');
    signupForm.reset();
    emailError.textContent = '';
    passwordError.textContent = '';
  }
});
