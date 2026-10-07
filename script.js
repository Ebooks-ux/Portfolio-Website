// Typing text effect for main hero header
const typingText = document.querySelector('.typing-text');

const roles = [
    "Junior Developer",
    "Web Developer",
    "Software Developer",
    "Web Designer",
    "YouTuber",
    "Script Writer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;
    
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of completed title
        typeSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Switch to next title in array
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Mobile Menu Toggle logic
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Start typing animation once DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeEffect);
} else {
    typeEffect();
}


// Download CV: this will work once a resume.pdf file is placed in this folder.
const downloadCv = document.querySelector('#download-cv');
if (downloadCv) {
    downloadCv.addEventListener('click', () => {
        window.open('resume.pdf', '_blank');
    });
}
