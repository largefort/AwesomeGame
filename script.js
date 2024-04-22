document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('game-content').classList.remove('hidden');
    startGame();
    console.log("Congratulations! You've been successfully trolled by Jafet Egill. There is actually no game to play, just a very annoying overlay blocking the screen. Enjoy your stay!");
});

document.getElementById('restart-button').addEventListener('click', function() {
    startGame();
});

function startGame() {
    // Reset game state
    document.getElementById('score').innerText = 0;
    document.getElementById('level').innerText = 1;

    // Move enemies randomly
    setInterval(moveEnemies, 1000);

    // Update score
    setInterval(updateScore, 100);
}

function moveEnemies() {
    const enemies = document.querySelectorAll('.enemy');
    enemies.forEach(enemy => {
        const newPosition = Math.floor(Math.random() * (800 - 30));
        enemy.style.left = newPosition + 'px';
    });
}

function updateScore() {
    const score = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = score + 1;
}

const enemies = document.querySelectorAll('.enemy');
enemies.forEach(enemy => {
    enemy.addEventListener('click', function() {
        document.getElementById('overlay').classList.remove('hidden');
        console.log("Hi! There is actually no game to play, just a very annoying overlay blocking the screen in a funny trolling way! You have been trolled. This website is fake by Jafet Egill.");
    });
});
