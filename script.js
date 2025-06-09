// Animación al hacer scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
cards.forEach(card => observer.observe(card));

// Efecto de clic en los beneficios
const benefitItems = document.querySelectorAll('.benefit-item');
benefitItems.forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'scale(0.95)';
        setTimeout(() => item.style.transform = 'scale(1)', 200);
    });
});
