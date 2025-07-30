document.addEventListener('DOMContentLoaded', function() {

    // --- FUNÇÃO AUXILIAR DE THROTTLE (NOVA) ---
    // Esta função controla a frequência com que uma outra função pode ser executada.
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
        };
    }

    // --- VARIÁVEIS GLOBAIS ---
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const sections = document.querySelectorAll('section[id]');

    // --- Marcar Link da Navbar Ativo (Scrollspy) ---
    function activateNavLinkOnScroll() {
        const headerOffset = 80;
        let currentActiveSectionId = '';
        const scrollY = window.scrollY || window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerOffset;
            if (scrollY >= sectionTop) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (linkHref && linkHref.substring(1) === currentActiveSectionId) {
                link.classList.add('active');
            }
        });
    }

    // --- Reduzir Header ao Scroll ---
    function handleHeaderShrink() {
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollThreshold = 100;
        if (scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // --- APLICAÇÃO DO THROTTLE (MUDANÇA IMPORTANTE) ---
    // Agora, as funções só rodam a cada 100ms, evitando a sobrecarga.
    window.addEventListener('scroll', throttle(handleHeaderShrink, 100));
    window.addEventListener('scroll', throttle(activateNavLinkOnScroll, 100));

    // Executa as funções uma vez no carregamento da página
    handleHeaderShrink();
    activateNavLinkOnScroll();


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
            duration: 1200,
            easing: 'ease-in-out',
            delay: 150,
            reset: false
        });

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
        ScrollReveal().reveal('.philosophy-section h2', { origin: 'top' });
        ScrollReveal().reveal('.philosophy-section .section-description', { origin: 'top', delay: 100 });
        ScrollReveal().reveal('.media-day-highlight', { origin: 'bottom', delay: 200 });
        ScrollReveal().reveal('.before-after-carousel .carousel-item', { origin: 'bottom', interval: 150, delay: 300 });
        ScrollReveal().reveal('.process-section h2', { origin: 'top' });
        ScrollReveal().reveal('.process-section .section-description', { origin: 'top', delay: 100 });
        ScrollReveal().reveal('.process-step', { origin: 'bottom', interval: 100, delay: 200 });
        ScrollReveal().reveal('.cases-section h2', { origin: 'top' });
        ScrollReveal().reveal('.case-item', { origin: 'bottom', interval: 150, delay: 100 });
        ScrollReveal().reveal('.cta-final-section h2', { origin: 'top' });
        ScrollReveal().reveal('.cta-final-section .section-description', { origin: 'top', delay: 100 });
        ScrollReveal().reveal('.cta-final-section .main-cta', { origin: 'bottom', delay: 200 });
        ScrollReveal().reveal('.cta-final-section .cta-objection', { origin: 'bottom', delay: 300 });
    }

    // --- Funcionalidade do Acordeão (FAQ) ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const isActive = faqItem.classList.contains('active');
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) item.classList.remove('active');
            });
            if (!isActive) faqItem.classList.add('active');
        });
    });

    // --- Funcionalidade para a barra fixa parar na seção FAQ ---
    const fixedCtaBar = document.getElementById('fixedCtaBar');
    const faqSection = document.querySelector('#faq');
    const footer = document.querySelector('footer.main-footer');

    if (fixedCtaBar && footer) {
        function handleFixedCtaBarStop() {
            const barHeight = fixedCtaBar.offsetHeight;
            const footerTop = footer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (footerTop < windowHeight) {
                fixedCtaBar.style.transform = `translate(-50%, ${footerTop - windowHeight}px)`;
            } else {
                fixedCtaBar.style.transform = 'translateX(-50%)';
            }
        }
        window.addEventListener('scroll', throttle(handleFixedCtaBarStop, 50));
        window.addEventListener('resize', throttle(handleFixedCtaBarStop, 50));
        handleFixedCtaBarStop();
    }


    // --- Lógica para Abrir/Fechar o Modal de Formulário ---
    const openFormButton = document.getElementById('openFormButton');
    const formModal = document.getElementById('formModal');
    const closeButton = document.querySelector('#formModal .close-button');

    if (openFormButton && formModal && closeButton) {
        openFormButton.addEventListener('click', function(event) {
            event.preventDefault();
            formModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeButton.addEventListener('click', function() {
            formModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        window.addEventListener('click', function(event) {
            if (event.target == formModal) {
                formModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

});
