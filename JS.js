// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news');

    // Simulación de noticias (puedes agregar más o modificar)
    const newsItems = [
        {
            title: "¡Nueva temporada anunciada!",
            content: "La nueva temporada de Demon Slayer está en camino y promete más acción y aventuras.",
            date: "09-09-2024"
        },
        {
            title: "Entrevista con el creador",
            content: "Descubre qué inspiró al creador de Demon Slayer a escribir esta increíble historia.",
            date: "08-09-2024"
        },
        {
            title: "Curiosidades sobre los personajes",
            content: "Conoce más detalles sobre los personajes secundarios que han capturado el corazón de los fans.",
            date: "07-09-2024"
        }
    ];

    // Cargar las noticias en la página
    newsItems.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const title = document.createElement('h3');
        title.className = 'news-title';
        title.textContent = news.title;

        const content = document.createElement('p');
        content.className = 'news-content';
        content.textContent = news.content;

        const date = document.createElement('p');
        date.className = 'news-date';
        date.textContent = news.date;

        newsItem.appendChild(title);
        newsItem.appendChild(content);
        newsItem.appendChild(date);

        newsContainer.appendChild(newsItem);
    });
});
