function smoothScrollTo(targetSectionId) {
  const targetSection = document.querySelector('#' + targetSectionId);
  if (!targetSection) return;
  const navbarHeight = document.querySelector('#navbar').offsetHeight;
  const sectionOffsetTop = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top: sectionOffsetTop, behavior: 'smooth' });
}

document.querySelector('#navbar').addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    smoothScrollTo(e.target.getAttribute('href').replace('#', ''));
  }
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('#navbar');
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
fadeElements.forEach(function(el) { observer.observe(el); });

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const statNums = document.querySelectorAll('.stat-num');
const statsObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) { animateCounter(entry.target); statsObserver.unobserve(entry.target); }
  });
}, { threshold: 0.5 });
statNums.forEach(function(el) { statsObserver.observe(el); });

function handleSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById('formSuccess');
  successMsg.classList.add('show');
  e.target.reset();
  setTimeout(function() { successMsg.classList.remove('show'); }, 5000);
}