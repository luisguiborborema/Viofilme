document.addEventListener('DOMContentLoaded', function() {

    // --- Marcar Link da Navbar Ativo (Scrollspy) ---
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    // Adicionado o ID 'home' para a seção hero para o scrollspy funcionar corretamente
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
    // REMOVIDO: O efeito de digitação não será mais usado, o H2 é estático.
    /*
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
    */

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
            const faqItem = question.closest('.faq-item'); // Encontra o pai .faq-item
            const faqAnswer = faqItem.querySelector('.faq-answer');

            // Verifica se este item já está ativo
            const isActive = faqItem.classList.contains('active');

            // Fecha todas as outras FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = '0';
                    item.querySelector('.faq-question .faq-toggle-icon').style.transform = 'rotate(0deg)'; // Reseta ícone
                }
            });

            // Abre/Fecha a FAQ clicada
            faqItem.classList.toggle('active');
            if (faqItem.classList.contains('active')) {
                // Define max-height para a scrollHeight do conteúdo para transição suave
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                question.querySelector('.faq-toggle-icon').style.transform = 'rotate(45deg)'; // Gira o ícone
            } else {
                faqAnswer.style.maxHeight = '0';
                question.querySelector('.faq-toggle-icon').style.transform = 'rotate(0deg)'; // Reseta ícone
            }
        });
    });
/*
     // --- Código do Chatbot ---
    const chatbotToggleButton = document.getElementById('chatbot-toggle-button');
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatbotCloseButton = document.getElementById('chatbot-close-button');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSendButton = document.getElementById('chat-send-button');

    // ** IMPORTANTE: Substitua esta URL pela URL do seu Custom Webhook do Make **
    const MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/jwvgtcckq9x778nsciyjxq5reu5m2dxo';

    chatbotToggleButton.addEventListener('click', () => {
        chatbotWidget.classList.toggle('open');
        if (chatbotWidget.classList.contains('open')) {
            chatInput.focus(); // Foca no input quando o chat abre
            chatMessages.scrollTop = chatMessages.scrollHeight; // Rola para o final
        }
    });

    chatbotCloseButton.addEventListener('click', () => {
        chatbotWidget.classList.remove('open');
    });

    // Função para adicionar mensagem ao chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Rola para a última mensagem
    }

    // Função para enviar mensagem para o Make
    async function sendMessageToMake(message) {
        // Adiciona a mensagem do usuário imediatamente
        addMessage(message, 'user');
        chatInput.value = ''; // Limpa o input

        // Adiciona uma mensagem de "digitando..." do bot
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot-message');
        typingIndicator.textContent = 'Digitando...';
        typingIndicator.id = 'typing-indicator';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await fetch(MAKE_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            });

            // Remove o indicador de digitando
            if (document.getElementById('typing-indicator')) {
                document.getElementById('typing-indicator').remove();
            }

            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }

            const data = await response.json();
            // Espera que o Make retorne um JSON como: {"response": "Sua mensagem aqui"}
            if (data.response) {
                addMessage(data.response, 'bot');
            } else {
                addMessage("Ocorreu um erro ao processar sua mensagem. Tente novamente.", 'bot');
            }

        } catch (error) {
            console.error('Erro ao enviar mensagem para o Make:', error);
            // Remove o indicador de digitando em caso de erro
            if (document.getElementById('typing-indicator')) {
                document.getElementById('typing-indicator').remove();
            }
            addMessage("Desculpe, não consegui me conectar no momento. Por favor, tente mais tarde.", 'bot');
        }
    }

    // Evento de clique no botão de enviar
    chatSendButton.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            sendMessageToMake(message);
        }
    });

    // Evento de "Enter" no campo de input
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                sendMessageToMake(message);
            }
        }
    });
*/
});
