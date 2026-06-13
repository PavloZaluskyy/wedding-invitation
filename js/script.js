const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.tiktok-container');

const observerOptions = {
    root: container,
    rootMargin: '0px',
    threshold: 0.5 // Слайд вважається активним, коли він зайняв 50% екрана
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            
            // 1. Оновлюємо точки пагінації
            dots.forEach(dot => dot.classList.remove('active'));
            const activeDot = document.querySelector(`.dot[data-slide="${index}"]`);
            if (activeDot) activeDot.classList.add('active');

            // 2. Активуємо анімацію для поточного слайда
            entry.target.classList.add('visible');
        } else {
            // Знімаємо клас, щоб при повторному скролі анімація відіграла знову
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

slides.forEach(slide => observer.observe(slide));

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = dot.getAttribute('data-slide');
        slides[slideIndex].scrollIntoView({ behavior: 'smooth' });
    });
});

function handleRSVP() {
    // Сюди твій друг вставить посилання на анкету (Google Forms, Telegram-бот тощо)
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe64Bh7fVxZAd7IyiyDMqx-BCM1M3-6zss1jZU59NUyD2lNzA/viewform"; 
    // Відкриваємо в новому вікні
    window.open(googleFormUrl, '_blank');
}