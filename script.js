// Define o jogador atual como 'X' (primeiro jogador)
let currentPlayer = 'X';

// Define o estado atual do jogo, com todas as células vazias inicialmente
let gameStatus = ['', '', '', '', '', '', '', '', ''];

// Define as combinações de células que levam à vitória
const winningCombos = [
    [0, 1, 2],  // Linha superior
    [3, 4, 5],  // Linha do meio
    [6, 7, 8],  // Linha inferior
    [0, 3, 6],  // Coluna esquerda
    [1, 4, 7],  // Coluna do meio
    [2, 5, 8],  // Coluna direita
    [0, 4, 8],  // Diagonal \
    [2, 4, 6]   // Diagonal /
];

// Função para realizar a jogada do jogador
function playerMove(cellIndex) {
    // Verifica se a célula está vazia
    if (!gameStatus[cellIndex]) {
        // Define o estado da célula como o símbolo do jogador atual
        gameStatus[cellIndex] = currentPlayer;
        // Atualiza a exibição da célula no tabuleiro
        document.getElementById('board').children[cellIndex].innerText = currentPlayer;
        
        // Verifica se o jogador atual ganhou após a jogada
        if (checkWin()) {
            // Exibe uma mensagem indicando que o jogador ganhou
            document.getElementById('status').innerText = `Jogador ${currentPlayer} ganhou!`;
            return;
        }
        
        // Verifica se houve um empate
        if (checkDraw()) {
            // Exibe uma mensagem indicando que houve um empate
            document.getElementById('status').innerText = 'Empate!';
            return;
        }
        
        // Muda para o próximo jogador (X para O ou vice-versa)
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // Atualiza a mensagem de status para indicar de quem é a vez
        document.getElementById('status').innerText = `É a vez do jogador ${currentPlayer}`;
    }
}

// Função para verificar se há um vencedor
function checkWin() {
    // Verifica se alguma das combinações vencedoras está completa
    return winningCombos.some(combo => {
        // Verifica se todas as células da combinação atual pertencem ao jogador atual
        return combo.every(index => {
            return gameStatus[index] === currentPlayer;
        });
    });
}

// Função para verificar se houve um empate
function checkDraw() {
    // Verifica se todas as células estão ocupadas
    return gameStatus.every(cell => {
        return cell !== '';
    });
}

// Função para reiniciar o jogo
function resetGame() {
    // Reseta o estado do jogo para todas as células vazias
    gameStatus = ['', '', '', '', '', '', '', '', ''];
    // Define o jogador atual como 'X' (primeiro jogador)
    currentPlayer = 'X';
    // Atualiza a mensagem de status para indicar de quem é a vez
    document.getElementById('status').innerText = `É a vez do jogador ${currentPlayer}`;
    // Limpa o conteúdo das células no tabuleiro
    const cells = document.getElementById('board').children;
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

