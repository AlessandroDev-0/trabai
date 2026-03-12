// Seleciona todos os elementos li
const listItems = document.querySelectorAll('li');

listItems.forEach(li => {
    const img = li.querySelector('img');
    if (img) {
        const imgSrc = img.src;

        li.addEventListener('mouseenter', () => {
            li.style.backgroundImage = `url(${imgSrc})`;
            li.style.backgroundSize = 'cover';
            li.style.backgroundPosition = 'left';
            li.style.backgroundRepeat = 'no-repeat';
            // Pequeno delay para permitir a transição
            setTimeout(() => {
                li.style.backgroundPosition = 'center';
            }, 10);
        });

        li.addEventListener('mouseleave', () => {
            li.style.backgroundImage = '';
            li.style.backgroundPosition = '';
        });
    }
});