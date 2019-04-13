const ticTacToe = {
    gameOver: false,
    winningPlays: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],
    options: {
        simbols: ['X', 'O'],
        player: 0,
        change: function(_prPosition) {
            const value = this.player === 0 ? 
                this.simbols[0] :
                this.simbols[1];
            return value;
        },
        changePlayer: function() {
            this.player = this.player === 0 ? 1 : 0;
        }
    },
    plays: null,
    noPlays: ['', '', '', '', '', '', '', '', ''], 
    element: null,
    init: function(_prElement) {
        this.element = _prElement;
    },
    draw: function() {
        let content = '';

        for ( i in this.plays ) {
            content += '<div onclick="ticTacToe.makePlay(' + i + ')">' + this.plays[i] + '</div>';
        };

        this.element.innerHTML = content;
    },
    checkWinner: function() {
        let currentOption = this.options.player === 0 ?
            this.options.simbols[0] :
            this.options.simbols[1];

        for(i in this.winningPlays) {
            if (
                this.plays[ this.winningPlays[i][0] ] == currentOption  &&
                this.plays[ this.winningPlays[i][1] ] == currentOption &&
                this.plays[ this.winningPlays[i][2] ] == currentOption
            ) {
                this.gameOver = true;
                break;
            }
        }
        if (!this.gameOver) {
            this.checkEmptate();
        }
    },
    checkEmptate: function() {
        let count = 0;
        for(i in this.plays) {
            if (this.plays[i] !== '') {
                count++;
            }
        }
        if (count === 9) {
            this.showEmptate();
        }
    },
    makePlay: function(_prPosition) {
        if (this.plays[ _prPosition ] !== '') return;

        this.plays[ _prPosition ] = this.options.change(_prPosition);
        this.draw();

        this.checkWinner();

        if (this.gameOver) {
            this.showWinner();
        } else {
            this.options.changePlayer();
        }
    },
    start: function() {
        this.gameOver = false;
        this.plays = [...this.noPlays];
        this.options.player = 0;
        this.draw();
    },
    showEmptate: function() {
        document.querySelector('.titleWinner').textContent = `Jogo empatou`;
        document.querySelector('.winner').style.display = "flex";
    },
    showWinner: function() {
        Object.freeze(this.plays);

        const vencedor = this.options.player === 0 ? 
            'Jogador 1 venceu' : 
            'Jogador 2 venceu';
        document.querySelector('.titleWinner').textContent = vencedor;
        document.querySelector('.winner').style.display = "flex";
    }
};