
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('open');
  const isExpanded = navLinks.classList.contains('open');
  menuButton.setAttribute('aria-expanded', isExpanded);
  menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) toggleMenu();
  });
});


const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    messageDiv.textContent = 'Please fill out all required fields.';
    messageDiv.style.color = 'red';
  } else {
    messageDiv.textContent = 'Thank you! I will be in touch shortly.';
    messageDiv.style.color = 'green';
    contactForm.reset();
  }
});
