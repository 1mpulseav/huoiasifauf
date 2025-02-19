function createHearts(count, isBroken = false) {
    const heartContainer = document.querySelector('.heart-container');
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heart.style.opacity = Math.random(); // случайная прозрачность
        heart.style.backgroundImage = isBroken ? "url('broken_heart.png')" : "url('heart.png')";
        heartContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Создаем сердца при загрузке страницы
setInterval(() => createHearts(1, true), 300);