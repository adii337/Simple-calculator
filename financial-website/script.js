// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Call Modal Functions
function openCallModal() {
    const modal = document.getElementById('callModal');
    modal.style.display = 'block';
}

function closeCallModal() {
    const modal = document.getElementById('callModal');
    modal.style.display = 'none';
}

// Support Modal Functions
function openSupportModal() {
    const modal = document.getElementById('supportModal');
    modal.style.display = 'block';
}

function closeSupportModal() {
    const modal = document.getElementById('supportModal');
    modal.style.display = 'none';
}

// Feedback Modal Functions
function openFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    modal.style.display = 'block';
}

function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    modal.style.display = 'none';
}

// Terms Modal Functions
function openTermsModal() {
    const modal = document.getElementById('termsModal');
    modal.style.display = 'block';
}

function closeTermsModal() {
    const modal = document.getElementById('termsModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    const callModal = document.getElementById('callModal');
    const supportModal = document.getElementById('supportModal');
    const feedbackModal = document.getElementById('feedbackModal');
    const termsModal = document.getElementById('termsModal');

    if (event.target === callModal) {
        callModal.style.display = 'none';
    }
    if (event.target === supportModal) {
        supportModal.style.display = 'none';
    }
    if (event.target === feedbackModal) {
        feedbackModal.style.display = 'none';
    }
    if (event.target === termsModal) {
        termsModal.style.display = 'none';
    }
});

// FAQ Toggle
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector('.faq-answer');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.querySelector('.faq-question').classList.remove('active');
            item.querySelector('.faq-answer').classList.remove('show');
        }
    });
    
    // Toggle current FAQ
    button.classList.toggle('active');
    answer.classList.toggle('show');
}

// Form Submission Handlers

// Call Form Submission
const callForm = document.querySelector('#callModal form');
if (callForm) {
    callForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will call you soon.');
        callForm.reset();
        closeCallModal();
    });
}

// Feedback Form Submission
function submitFeedback(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const type = form.querySelector('select').value;
    const message = form.querySelector('textarea').value;
    
    console.log('Feedback submitted:', { name, email, type, message });
    alert('Thank you for your feedback! We appreciate your input.');
    form.reset();
    closeFeedbackModal();
}

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

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize
console.log('FinanceHub website loaded successfully!');