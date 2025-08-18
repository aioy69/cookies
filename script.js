const predictions = [
    "Сегодня твой день для новых начинаний.",
    "Улыбка принесёт тебе удачу.",
    "Скоро придёт хорошая новость.",
    "Ты найдёшь то, что давно искал.",
    "Верь в себя, и у тебя всё получится.",
    "Скоро тебя ждёт приятный сюрприз.",
    "Делись добром, и оно вернётся к тебе."
];

function getPrediction() {
    const randomIndex = Math.floor(Math.random() * predictions.length);
    document.getElementById('prediction').innerText = predictions[randomIndex];
}

// Счётчик просмотров (локально через localStorage)
let views = localStorage.getItem('views') || 0;
views++;
localStorage.setItem('views', views);
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('viewCounter').innerText = views;
});
