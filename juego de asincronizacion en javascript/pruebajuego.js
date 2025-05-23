document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('gameBoard');

    const images = [
        'agricultor.jpeg',
        'bombero.jpeg',
        'piloto.jpeg',
        'policia.jpeg',
        'profesora.jpeg',
        'programaor.jpeg',
        'veterinario.jpeg',
        'ingeniero.jpg',
        
        
    ];

    

    let cards = [];
    let flippedCards = [];
    let matchedCardsCount = 0;
    let lockBoard = false;

    // Función para mezclar un array (Fisher-Yates shuffle)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Crear las tarjetas del juego
    const createBoard = () => {
        const gameImages = [...images, ...images];
        const shuffledImages = shuffleArray(gameImages);

        gameBoard.innerHTML = '';
        cards = [];
        flippedCards = [];
        matchedCardsCount = 0;
        lockBoard = false;

        shuffledImages.forEach((imageName, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.name = imageName;

            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner');

            const cardFront = document.createElement('div');
            cardFront.classList.add('card-face', 'card-front');

            const cardBack = document.createElement('div');
            cardBack.classList.add('card-face', 'card-back');
            const imgElement = document.createElement('img');
            imgElement.src = `img/${imageName}`;
            imgElement.alt = imageName.split('.')[0];
            cardBack.appendChild(imgElement);

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            card.appendChild(cardInner);

            card.addEventListener('click', flipCard);
            gameBoard.appendChild(card);
            cards.push(card);
        });
    };

    // Función asíncrona para voltear una tarjeta
    const flipCard = async (event) => {
        if (lockBoard) return;
        const clickedCard = event.currentTarget;

        if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
            return;
        }

        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            lockBoard = true;
            await checkForMatch();
        }
    };

    // Función asíncrona para verificar si hay una coincidencia
    const checkForMatch = async () => {
        const [firstCard, secondCard] = flippedCards;

        if (firstCard.dataset.name === secondCard.dataset.name) {
            // Es un par
            await new Promise(resolve => setTimeout(resolve, 800)); // Pausa para que el usuario vea el par
            firstCard.classList.add('matched', 'matched-green'); // Añadir clase 'matched-green'
            secondCard.classList.add('matched', 'matched-green'); // Añadir clase 'matched-green'
            matchedCardsCount += 2;
            resetFlippedCards();

            if (matchedCardsCount === cards.length) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert('¡Felicidades! Has encontrado todas las parejas. ¡Juego Terminado!');
            }
        } else {
            // No es un par
            await new Promise(resolve => setTimeout(resolve, 1500)); // Pausa para memorizar
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetFlippedCards();
        }
    };

    // Reiniciar las tarjetas volteadas y desbloquear el tablero
    const resetFlippedCards = () => {
        flippedCards = [];
        lockBoard = false;
    };

    // Inicializar el juego al cargar la página
    createBoard();
});