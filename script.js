const LEVELS = [
    {
        name: 'slow',
        speed: 2000,
        row: 5,
        column: 5,
    },
    {
        name: 'medium',
        speed: 1500,
        row: 7,
        column: 7,
    },
    {
        name: 'quick',
        speed: 1000,
        row: 9,
        column: 9,
    },
];

model = { 
    levels: LEVELS,

    createGameBoard(levelName) {
        const level = this.levels.find(level => level.name === levelName);
        const className = levelName;
        const row = level.row;
        const column = level.column;
        const speed = level.speed
        
        view.renderGameBoard(className, row, column, speed)

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

    renderGameBoard(className, row, column, speed) {
        const gameBoard = document.querySelector('.mouse-board');
        

        let gameBoardHTML = `<ul class="${className}">`;

        for (let i = 0; i < row * column; i++) {
            gameBoardHTML += `<li data-index="${i}"></li>`;
        }

        gameBoardHTML += '</ul>';
        gameBoard.innerHTML = gameBoardHTML;

        this.startTimer(15);
        this.helloMouse(className, speed);

       
       
    },

    startTimer(duration) {
        const timer = document.getElementById('timer');
        let time = duration;

        const intervalId = setInterval(function() {
            
            const minutes = (time - time % 60) / 60;
            const seconds = time % 60;
            time --;
            timer.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            

            if (+time === 0) {
                clearInterval(intervalId);
                timer.textContent = ``;
            }
        }, 1000)
    },

    helloMouse(className, speed) {
        const mouseBoard = document.querySelector(`.${className}`);
        const cells = [...mouseBoard.querySelectorAll('li')];
        const img = document.createElement('img');
        img.src = 'assets/mouse.png';
        img.alt = 'MOUSE';
        let cell= null;
        

        const intervalId = setInterval(function(){
            if (cell) {
                cell.innerHTML = '';
            }
            let mousePosition =  Math.floor(Math.random() * cells.length);
            cell = cells.find(cell => +cell.getAttribute('data-index') === mousePosition);
            cell.append(img);
            
            

        }, speed)
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