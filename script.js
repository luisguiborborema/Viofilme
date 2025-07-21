document.addEventListener('DOMContentLoaded', function() {

    // --- Marcar Link da Navbar Ativo (Scrollspy) ---
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const sections = document.querySelectorAll('section[id]');
    const header = document.querySelector('header');

    function activateNavLinkOnScroll() {
        let currentActiveSectionId = '';
        const headerHeight = header ? header.offsetHeight : 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50; // Um pequeno offset
            if (window.scrollY >= sectionTop) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentActiveSectionId) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', activateNavLinkOnScroll);
    activateNavLinkOnScroll(); // Executa uma vez ao carregar a página


    // --- Código do Efeito de Digitação (Typing Effect) ---
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const textToType = [
            "marketing que vende e conteúdo que encanta.",
            "marcas que se tornam inesquecíveis.",
            "estratégias que geram resultados.",
            "uma presença digital incrível."
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 80;
        const deletingSpeed = 40;
        const delayBetweenTexts = 2000;

        function type() {
            const currentText = textToType[textIndex];
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentText.length) {
                speed = delayBetweenTexts;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textToType.length;
                speed = typingSpeed;
            }
            setTimeout(type, speed);
        }
        type();
    }


    // --- Código do ScrollReveal.js ---
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            distance: '80px',
            duration: 1500,
            easing: 'ease-in-out',
            delay: 200,
            reset: false
        });

        // Revelar elementos da Viofilme
        ScrollReveal().reveal('.hero-content h1', { origin: 'top' });
        ScrollReveal().reveal('.hero-content h2', { origin: 'bottom', delay: 200 });
        ScrollReveal().reveal('.hero-subheadline', { origin: 'bottom', delay: 400 });
        ScrollReveal().reveal('.main-cta', { origin: 'bottom', delay: 600 });

        ScrollReveal().reveal('.pain-points-section h2', { origin: 'top' });
        ScrollReveal().reveal('.pain-points-section .section-description', { origin: 'top', delay: 100 });
        ScrollReveal().reveal('.pain-points-prompt', { origin: 'left', delay: 200 });
        ScrollReveal().reveal('.pain-points-list-container li', { origin: 'left', interval: 100, delay: 300 });

        ScrollReveal().reveal('.pillars-intro-section h2', { origin: 'top' });
        ScrollReveal().reveal('.pillars-intro-section .section-description', { origin: 'top', delay: 100 });
        ScrollReveal().reveal('.pillars-call-to-action', { origin: 'bottom', delay: 200 });

        ScrollReveal().reveal('.pillar-section .pillar-text', { origin: 'left', delay: 100 });
        ScrollReveal().reveal('.pillar-section .pillar-image', { origin: 'right', delay: 300 });
    }
});