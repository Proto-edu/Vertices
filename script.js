document.addEventListener('DOMContentLoaded', () => {
    const h1Element = document.querySelector('h1');
    const imageElement = document.createElement('img');
    document.body.appendChild(imageElement);

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key >= '0' && key <= '9') {
            if (h1Element.style.display !== 'none') {
                h1Element.style.display = 'none';
            }
            imageElement.src = `images/${key}.png`; 
        }
    });
});