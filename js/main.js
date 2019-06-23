const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

// Play Game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

// Get Computer Choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'pedra';
    } else if (rand <= 0.67) {
        return 'papel';
    } else {
        return 'tesoura';
    }
}

// Get Winner
function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'pedra') {
        if (c === 'papel') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'papel') {
        if (c === 'tesoura') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'tesoura') {
        if (c === 'pedra') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

// Tradução
function traduzir(x) {
    if (x === 'pedra') {
        return 'rock';
    } else if (x === 'papel') {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Show Winner
function showWinner(w, c) {
    if (w === 'player') {
        scoreboard.player++;
        result.innerHTML = `
        <h1 class='text-win'>Você Ganhou :D</h1>
        <i class='fas fa-hand-${traduzir(c)} fa-10x' />
        <p>O Computador Escolheu <strong>${c.charAt(0).toUpperCase() + c.slice(1)}</strong></p>`;
    } else if (w === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class='text-lose'>Você Perdeu :C</h1>
        <i class='fas fa-hand-${traduzir(c)} fa-10x' />
        <p>O Computador Escolheu <strong>${c.charAt(0).toUpperCase() + c.slice(1)}</strong></p>`;
    } else {
        result.innerHTML = `
        <h1>Empatou</h1>
        <i class='fas fa-hand-${traduzir(c)} fa-10x' />
        <p>O Computador Escolheu <strong>${c.charAt(0).toUpperCase() + c.slice(1)}</strong></p>`;
    }
    score.innerHTML = `
    <p>Jogador: ${scoreboard.player}</p>
    <p>Computador: ${scoreboard.computer}</p>`;
    modal.style.display = 'block';
}

// Clear Modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// Restart Game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Jogador: ${scoreboard.player}</p>
    <p>Computador: ${scoreboard.computer}</p>`;
}

// Event Listeners
choices.forEach(choice => {
    choice.addEventListener('click', play);
})

window.addEventListener('click', clearModal);

restart.addEventListener('click', restartGame);