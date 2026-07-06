// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navLinks.style.display = navLinks.classList.contains('open') ? 'flex' : 'none';
  });
}

// Close mobile nav after tapping a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      navLinks.style.display = 'none';
    }
  });
});

// Contact form: placeholder handling until a real endpoint is connected.
// See README.md for how to wire this to Formspree (free) in ~2 minutes.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks — this is a demo submission. Connect a form handler (see README.md) to receive real messages.";
    formNote.style.color = '#C9A24B';
    form.reset();
  });
}
