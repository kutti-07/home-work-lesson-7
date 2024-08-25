document.addEventListener('DOMContentLoaded', async () => {
    const content = document.getElementById('content');

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const imageUrl = 'https://img.ixbt.site/live/topics/preview/00/07/20/29/967519ead6.jpg'; 

        data.forEach(post => {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = imageUrl; 
            img.alt = 'Card Image';

            const title = document.createElement('h2');
            title.textContent = post.title;

            const description = document.createElement('p');
            description.textContent = post.body;

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);

            content.appendChild(card);
        });

    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
});
