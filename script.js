// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Here you would typically send the data to a server
    console.log('Form submitted:', formObject);

    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
}

// Add animation to feature cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply animation to feature cards and infrastructure cards
document.querySelectorAll('.feature-card, .infrastructure-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Add typing effect to hero section
const heroTitle = document.querySelector('.hero h1');
const heroText = document.querySelector('.hero p');

if (heroTitle && heroText) {
  const titleText = heroTitle.textContent;
  const subtitleText = heroText.textContent;

  heroTitle.textContent = '';
  heroText.textContent = '';

  let titleIndex = 0;
  let subtitleIndex = 0;

  function typeTitle() {
    if (titleIndex < titleText.length) {
      heroTitle.textContent += titleText.charAt(titleIndex);
      titleIndex++;
      setTimeout(typeTitle, 100);
    } else {
      setTimeout(typeSubtitle, 500);
    }
  }

  function typeSubtitle() {
    if (subtitleIndex < subtitleText.length) {
      heroText.textContent += subtitleText.charAt(subtitleIndex);
      subtitleIndex++;
      setTimeout(typeSubtitle, 50);
    }
  }

  // Start typing effect when page loads
  window.addEventListener('load', typeTitle);
}

// Add hover effect to infrastructure cards
document.querySelectorAll('.infrastructure-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.02)';
    card.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
  });
}); 