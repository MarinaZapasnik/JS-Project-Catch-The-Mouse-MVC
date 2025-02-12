const LEVELS = [
    {
        name: 'slow',
        speed: 2000,
        row: 7,
        column: 7,
    },
    {
        name: 'medium',
        speed: 1500,
        row: 10,
        column: 10,
    },
    {
        name: 'quick',
        speed: 1000,
        row: 13,
        column: 13,
    },
];

model = { 
    levels: LEVELS,

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

        

        const form = document.getElementById('form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем отправку формы
            const levels = [...document.getElementsByName('level')];
            const level = levels.find(level => level.checked);
            const levelName = level.value;
            controller.createGameBoard(levelName);
            
        });
    },

    renderGameBoard(row, column, speed) {
        const gameBoard = document.querySelector('.mouse-board');
        let gameBoardHTML = '<ul>';

        for (let i = 0; i < row * column; i++) {
            gameBoardHTML += `<li data-index="${i}"></li>`;
        }

        gameBoardHTML += '</ul>';
        gameBoard.innerHTML = gameBoardHTML;

        // Пример размещения мышки в случайной ячейке
       
    },

        



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