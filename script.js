// Функция для создания сердечек
function createHearts(count, isBroken = false) {
    const heartContainer = document.querySelector('.heart-container');
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heart.style.opacity = Math.random();
        heart.style.backgroundImage = isBroken ? "url('broken_heart.png')" : "url('heart.png')";
        heartContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

document.getElementById('yesButton').addEventListener('click', function() {
    clickSound.play();
    window.location.href = 'congratulations.html';
});

document.getElementById('noButton').addEventListener('click', function() {
    clickSound.play();
    window.location.href = 'sad.html';
});

setInterval(() => createHearts(1), 500);

const button = document.getElementById('noButton');

const originalText = button.textContent;

button.addEventListener('mouseover', () => {
    button.textContent = 'Так!';
});

button.addEventListener('mouseout', () => {
    button.textContent = originalText;
});

// Додавання звукових ефектів
const clickSound = new Audio('click.mp3');
const hoverSound = new Audio('hover.mp3');

document.getElementById('yesButton').addEventListener('click', function() {
    clickSound.play();
    window.location.href = 'congratulations.html';
});

document.getElementById('noButton').addEventListener('click', function() {
    clickSound.play();
    window.location.href = 'sad.html';
});

// Анімація для кнопок при наведенні
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        hoverSound.play();
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Зміна кольору сердець при натисканні на кнопку
document.getElementById('changeColorButton').addEventListener('click', function() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
});
// Відтворення фонової музики
const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.play();
backgroundMusic.loop = true;