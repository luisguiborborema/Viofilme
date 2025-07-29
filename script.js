document.addEventListener('DOMContentLoaded', function() {

    // --- Marcar Link da Navbar Ativo (Scrollspy) ---
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    const sections = document.querySelectorAll('section[id]');
    const header = document.querySelector('header');

    function activateNavLinkOnScroll() {
        let currentActiveSectionId = '';
        const headerHeight = header ? header.offsetHeight : 0;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
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
    activateNavLinkOnScroll();

    // --- Reduzir Header ao Scroll ---
    const scrollThreshold = 100;

    function handleHeaderShrink() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleHeaderShrink);
    handleHeaderShrink();


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

        // Novas seções: Filosofia (Diferencial), Processo, Cases e CTA Final
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
            const faqAnswer = faqItem.querySelector('.faq-answer');

            const isActive = faqItem.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = '0';
                    item.querySelector('.faq-question .faq-toggle-icon').style.transform = 'rotate(0deg)';
                }
            });

            faqItem.classList.toggle('active');
            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                question.querySelector('.faq-toggle-icon').style.transform = 'rotate(45deg)';
            } else {
                faqAnswer.style.maxHeight = '0';
                question.querySelector('.faq-toggle-icon').style.transform = 'rotate(0deg)';
            }
        });
    });

     // --- Funcionalidade para a barra fixa parar na seção FAQ (agora, no rodapé) ---
    const fixedCtaBar = document.getElementById('fixedCtaBar'); // Seleciona a barra
    const footer = document.querySelector('footer'); // O rodapé
    const defaultBottomOffset = 20; // Corresponde ao 'bottom' definido no CSS para .fixed-cta-bar

    if (fixedCtaBar && footer) {
        function handleFixedCtaBarStop() {
            const scrollPosition = window.scrollY || window.pageYOffset;
            const footerTop = footer.offsetTop; // Topo do rodapé
            const barHeight = fixedCtaBar.offsetHeight; // Altura da barra
            const windowHeight = window.innerHeight; // Altura da viewport

            // Calcula o ponto de rolagem onde o *fundo da barra* (se fixed)
            // se encontraria com o *topo do rodapé*, considerando a margem desejada.
            // Queremos que a barra pare com `defaultBottomOffset` de distância do topo do rodapé.
            // Então, a barra irá "colar" quando o (scrollPosition + windowHeight) atingir:
            // (footerTop - defaultBottomOffset)
            const stopPoint = footerTop - defaultBottomOffset;

            // Se a parte inferior da viewport (scrollPosition + windowHeight)
            // estiver abaixo ou no ponto onde a barra deve parar
            // E o topo da barra (scrollPosition + windowHeight - barHeight - defaultBottomOffset)
            // não tiver passado o topo do footer (para evitar que a barra suba demais)
            if (scrollPosition + windowHeight > stopPoint) {
                fixedCtaBar.style.position = 'absolute';

                // Calculamos o 'bottom' em relação ao documento (ou ao pai com position: relative, geralmente body/html)
                // É a distância do final do documento até o topo do rodapé, mais a margem desejada.
                fixedCtaBar.style.bottom = `${(document.body.scrollHeight - footerTop) + defaultBottomOffset}px`;
            } else {
                fixedCtaBar.style.position = 'fixed';
                fixedCtaBar.style.bottom = `${defaultBottomOffset}px`; // Volta à posição fixa original
            }
        }

        window.addEventListener('scroll', handleFixedCtaBarStop);
        window.addEventListener('resize', handleFixedCtaBarStop);
        handleFixedCtaBarStop(); // Executa ao carregar para definir a posição inicial
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
