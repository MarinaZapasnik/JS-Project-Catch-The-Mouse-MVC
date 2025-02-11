const LEVELS =  [
    {
        name: 'slow', 
        speed: 2000,
        row: 7,
        column: 7,

    },
    {
        name: 'medium mouse', 
        speed: 1500,
        row: 10,
        column: 10,

    },
    {
        name: 'quick mouse', 
        speed: 1000,
        row: 13,
        column: 13,

    },

],

model = { 
    leмels: LEVELS,

    createGameBoard(levelName) {
        const level = this.levels.find(level => level.name === levelName);
        const row = level.row;
        const column = level.column;
        const speed = level.speed;
        view.renderGameBoard(row, column,speed)

    }

}

view = {

    init () {

        

        const startGame = document.getElementById('start-button');
        const choiseLevel = document.getElementById('form');

        startGame.addEventListener('click', function() {
            
            choiseLevel.addEventListener('change', function (event) {
            
            const levels = [...document.getElementsByName('level')];
            const level = levels.find(level => level.checked);
            const levelName = level.value;
            
            controller.createGameBoard(levelName)

            //this.renderGameBoard(row, column, speed);
        })

        })


        

    },

    renderGameBoard (row, column, speed) {
        const gameBoard = document.querySelector('.mouse-board');
        let gameBoardHTML = '<ul>';

        for (let i = 0; i < row; i++) {
            gameBoardHTML += '<li><ul>';
            for (let j = 0; j < column; j++) {
                gameBoardHTML += `<li data-row="${i}" data-column="${j}"></li>`;
            }
            gameBoardHTML += '</ul></li>';
        }
    
        gameBoardHTML += '</ul>';
        gameBoard.innerHTML = gameBoardHTML;
    }

        



    } 

}

controller = {
    createGameBoard(levelName) {
        model.createGameBoard(levelName)
    }

}

function init () {
    view.init 
    
    ()
}

document.addEventListener('DOMContentLoaded', init);