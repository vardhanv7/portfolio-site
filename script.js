// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initTypingAnimation();
    initNameTypingAnimation();
    initScrollAnimations();
    initSkillBars();
    initCertificatesModal();
    initContactForm();
    initSmoothScrolling();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide scroll indicator when user starts scrolling
        if (scrollIndicator) {
            if (window.scrollY > 50) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
            }
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Typing animation for dynamic role
function initTypingAnimation() {
    const roles = [
        'Student',
        'Web Developer',
        'AI Enthusiast',
        'GAMER',
        'VIDEO GRAPHER'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    function typeRole() {
        const roleElement = document.getElementById('role-typed');
        
        if (!roleElement) return;

        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(typeRole, speed);
    }

    // Start typing animation after a delay
    setTimeout(typeRole, 2000);
}

// Name typing animation - plays once per page load/reload
function initNameTypingAnimation() {
    const nameElement = document.getElementById('typing-name');
    
    if (!nameElement) return;
    
    // Clear any previous content
    nameElement.textContent = '';
    nameElement.classList.remove('typing-complete');
    
    const fullName = 'VUPPALA ANAND VARDHAN';
    let charIndex = 0;
    const typeSpeed = 100; // milliseconds per character
    
    function typeName() {
        if (charIndex < fullName.length) {
            nameElement.textContent = fullName.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeName, typeSpeed);
        } else {
            // Animation complete - hide cursor
            nameElement.classList.add('typing-complete');
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(typeName, 800);
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                // Special handling for skill bars
                if (entry.target.classList.contains('skill-progress')) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.setProperty('--width', width);
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, 100);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-title, .skill-progress, .project-card, .stat, .contact-info > *, .about-text > *');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Skill bars animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        bar.addEventListener('animationstart', () => {
            const width = bar.getAttribute('data-width');
            bar.style.setProperty('--width', width);
        });
    });
}

// Certificates Modal functionality
function initCertificatesModal() {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalYear = document.getElementById('modalYear');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    const certificateCards = document.querySelectorAll('.certificate-card');
    let currentCertificateIndex = 0;
    
    // Certificate data
    const certificates = [
        {
            image: 'Certificates/ServiceNow_Administrator.jpg',
            title: 'ServiceNow Certified System Administrator',
            year: '2025'
        },
        {
            image: 'Certificates/Power_BI.jpg',
            title: 'Power BI Foundations',
            year: '2024'
        },
        {
            image: 'Certificates/Python.jpg',
            title: 'Python for Everybody',
            year: '2023'
        }
    ];

    function openModal(index) {
        currentCertificateIndex = index;
        const cert = certificates[index];
        
        modalImage.src = cert.image;
        modalImage.alt = cert.title;
        modalTitle.textContent = cert.title;
        modalYear.textContent = cert.year;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Update navigation buttons visibility
        updateNavigationButtons();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    function showNextCertificate() {
        currentCertificateIndex = (currentCertificateIndex + 1) % certificates.length;
        const cert = certificates[currentCertificateIndex];
        
        modalImage.src = cert.image;
        modalImage.alt = cert.title;
        modalTitle.textContent = cert.title;
        modalYear.textContent = cert.year;
        
        updateNavigationButtons();
    }

    function showPrevCertificate() {
        currentCertificateIndex = (currentCertificateIndex - 1 + certificates.length) % certificates.length;
        const cert = certificates[currentCertificateIndex];
        
        modalImage.src = cert.image;
        modalImage.alt = cert.title;
        modalTitle.textContent = cert.title;
        modalYear.textContent = cert.year;
        
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        // Always show navigation buttons since we have multiple certificates
        modalPrev.style.display = 'flex';
        modalNext.style.display = 'flex';
    }

    // Event listeners for certificate cards
    certificateCards.forEach((card, index) => {
        const viewBtn = card.querySelector('.view-certificate-btn');
        viewBtn.addEventListener('click', () => openModal(index));
    });

    // Event listeners for modal controls
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', showPrevCertificate);
    modalNext.addEventListener('click', showNextCertificate);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPrevCertificate();
                    break;
                case 'ArrowRight':
                    showNextCertificate();
                    break;
            }
        }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - show next
                showNextCertificate();
            } else {
                // Swipe right - show previous
                showPrevCertificate();
            }
        }
    }

    // Prevent modal content clicks from closing modal
    const modalContent = document.querySelector('.modal-content');
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    const statusEl = document.getElementById('contactStatus');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // UI: indicate sending
        setStatus(statusEl, 'Sending...', 'loading');

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (response.ok) {
                form.reset();
                setStatus(statusEl, 'Thank you, your message has been sent!', 'success');
            } else {
                const data = await response.json().catch(() => ({}));
                const err = data && data.errors && data.errors.length ? data.errors.map(e => e.message).join(', ') : 'Something went wrong. Please try again later.';
                setStatus(statusEl, err, 'error');
            }
        } catch (err) {
            setStatus(statusEl, 'Network error. Please try again later.', 'error');
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        input.addEventListener('input', function() {
            clearFieldError(this);
            clearStatus(statusEl);
        });
    });
}

function setStatus(el, message, type) {
    if (!el) return;
    el.style.display = 'block';
    el.textContent = message;
    el.className = `contact-status contact-status-${type}`;
}

function clearStatus(el) {
    if (!el) return;
    el.style.display = 'none';
    el.textContent = '';
    el.className = 'contact-status';
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Field validation
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    clearFieldError(field);
    
    if (!value) {
        showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
        return false;
    }
    
    if (fieldName === 'email' && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    field.style.borderColor = '#ff6b6b';
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ff6b6b';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

// Clear field error
function clearFieldError(field) {
    field.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Show notification
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';
    } else {
        notification.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a24)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator click functionality
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const offsetTop = aboutSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    const animatedElements = document.querySelectorAll('.home-title, .dynamic-role, .home-description, .home-buttons');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

    // Initialize scroll progress
    createScrollProgress();

    // Handle responsive layout for About section
    initAboutLayout();

// Handle responsive layout for About section
function initAboutLayout() {
    // Layout is now handled purely with CSS flexbox
    // No JavaScript classes needed for responsive behavior
    const aboutContent = document.querySelector('.about-content');
    
    // Ensure proper image loading
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Fallback if image doesn't load
        profileImage.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'image-placeholder';
            placeholder.innerHTML = '<i class="fas fa-user"></i>';
            placeholder.style.cssText = 'font-size: 4.5rem; color: rgba(255, 255, 255, 0.8); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;';
            this.parentNode.appendChild(placeholder);
        });
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll-based animations and effects
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);
