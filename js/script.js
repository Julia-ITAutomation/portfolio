// Получаем все элементы с классом .project-card
const projectCards = document.querySelectorAll('.project-card');

// Добавляем обработчик событий на каждую карточку проекта
projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Переключаем класс 'flipped' для каждой карточки
        card.classList.toggle('flipped');
    });
});
