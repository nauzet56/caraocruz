const coinImage = document.getElementById('coinImage');
const gameMessage = document.getElementById('gameMessage');
const launchButton = document.getElementById('launchButton');

let isPlaying = false;

function launchCoin() {
    if (isPlaying) return;
    
    isPlaying = true;
    launchButton.disabled = true;
    
    const playerChoice = document.querySelector('input[name="choice"]:checked').value;
    gameMessage.textContent = '¡Lanzando la moneda...!';
    gameMessage.className = 'message';
    
    const duration = 1000 + Math.random() * 1000;
    let currentSide = 'cara';
    
    // Imagen cara: cara.png
    // Imagen cruz: cruz.jpg
    const imgSrc = currentSide === 'cara' ? 'cara.png' : 'cruz.jpg';
    coinImage.innerHTML = `<img src="${imgSrc}" class="coin-img flipping">`;
    
    const interval = setInterval(() => {
        currentSide = currentSide === 'cara' ? 'cruz' : 'cara';
        const imgSrc = currentSide === 'cara' ? 'cara.png' : 'cruz.jpg';
        coinImage.innerHTML = `<img src="${imgSrc}" class="coin-img flipping">`;
    }, 200);
    
    setTimeout(() => {
        clearInterval(interval);
        
        const result = Math.random() < 0.5 ? 'cara' : 'cruz';
        const resultSrc = result === 'cara' ? 'cara.png' : 'cruz.jpg';
        coinImage.innerHTML = `<img src="${resultSrc}" class="coin-img result">`;
        
        if (playerChoice === result) {
            gameMessage.textContent = '¡GANASTE! Acertaste el resultado';
            gameMessage.className = 'message win';
        } else {
            gameMessage.textContent = `¡HAS PERDIDO! Salió ${result.toUpperCase()}`;
            gameMessage.className = 'message lose';
        }
        
        setTimeout(() => {
            coinImage.innerHTML = '<div class="coin question">?</div>';
            gameMessage.textContent = 'Elige cara o cruz y presiona "Lanzar Moneda"';
            gameMessage.className = 'message';
            isPlaying = false;
            launchButton.disabled = false;
        }, 3000);
    }, duration);
}

launchButton.addEventListener('click', launchCoin);

document.querySelectorAll('input[name="choice"]').forEach(input => {
    input.addEventListener('change', (e) => {
        if (!isPlaying) {
            gameMessage.textContent = `Has elegido ${e.target.value.toUpperCase()}. ¡Lanza la moneda!`;
        }
    });
});
