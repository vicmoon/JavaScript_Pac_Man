document.addEventListener('DOMContentLoaded', ()=> {
  const scoreDisplay = document.getElementById('score'); 
  const width = 28; 
  let score = 0; 

  const grid  = document.querySelector('.grid'); 
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]

    // 0- pac-dots 
    // 1- wall
    //2 = ghost 
    //3= power pellet 
    //4 - empty  


    // create board 

    const squares = []; 
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
          const square = document.createElement('div'); 
          square.id = i; 
          grid.appendChild(square)
          squares.push(square)
      
          //add layout to the board
          if(layout[i] === 0) {
            squares[i].classList.add('pac-dot')
          } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
          } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
          } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
          }
        }
      }
      createBoard();



//create character 

//draw pac-man onto the board 

let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add('pac-man');

// move pacman 

function movePacMan(e){
    squares[pacmanCurrentIndex].classList.remove('pac-man');
    console.log(e.keyCode); 

switch(e.key){
    case 'ArrowLeft':
        if(pacmanCurrentIndex % width !==0 && 
            !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') )
         {
           pacmanCurrentIndex -=1;
        }
        if(squares[pacmanCurrentIndex - 1] === squares[363]){
            pacmanCurrentIndex = 391; 
        }
        break;
   case 'ArrowUp':
       if(pacmanCurrentIndex - width >= 0 &&
        !squares[pacmanCurrentIndex - width].classList.contains('wall')&&
        !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')){
        pacmanCurrentIndex -= width;
       }
        break;

    case 'ArrowRight':
        if(pacmanCurrentIndex % width < width -1 && 
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') )
        {
            pacmanCurrentIndex +=1;

        }if(squares[pacmanCurrentIndex + 1 ] === squares[392]){
            pacmanCurrentIndex = 364; 
        }
        break;   

    case 'ArrowDown':
        if(pacmanCurrentIndex + width < width * width &&
            !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') 
             ){

            pacmanCurrentIndex += width;
        }
        break;
}
squares[pacmanCurrentIndex].classList.add('pac-man');

pacDotEaten();
powerPelletEater(); 
// checkForGameOver();
// checkForWin();

}
document.addEventListener('keyup', movePacMan);



// when a pac-dot is eaten 

function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
       score++; 
       scoreDisplay.innerHTML = score;
       squares[pacmanCurrentIndex].classList.remove('pac-dot'); 
    }

};

// when a pellet eater is eaten 

function powerPelletEater(){
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
       score += 10;
       scoreDisplay.innerHTML = score;
       ghosts.forEach(ghost => ghost.isScared = true); 
       setTimeout(notScaredGhost, 1000)
       squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }
}

// make the ghost stop flashing 

function notScaredGhost(){
    ghosts.forEach(ghost => ghost.isScared = false); 
}


// create ghosts using Ghosts class 
 class Ghost {
    constructor (className, startIndex, speed){
        this.className = className;
        this.startIndex = startIndex;
        this.speed =  speed;
        this.currentIndex = startIndex; 
        this.isScared = false;
        this.timerId = NaN; 

    }
 }

// my ghosts 

let ghosts = [
    new Ghost ('blinky', 348, 250 ),
    new Ghost('pinky', 376, 400),
    new Ghost('inky',351, 300),
    new Ghost('clyde', 379, 500),

]
console.log(ghosts);

// draw ghosts on the grid 

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add('ghost');
});

// move ghosts randomly 

ghosts.forEach(ghost => {
    moveGhost(ghost);
});

function moveGhost(ghost){
    console.log(ghost);
    const directions = [-1, 1, width, -width]; 
    let direction = directions[Math.floor(Math.random()* directions.length)];

    ghost.timerId = setInterval(function(){
        // if next square is not a ghost or wall 
        if(
        !squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall'))
        {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost'); 
            ghost.currentIndex += direction; 
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost') 
        }// else find a new random direction 
        
        else direction  = directions[Math.floor(Math.random()* directions.length)]; 
        // if the ghost is scared 

        if(ghost.isScared){
            squares[ghost.currentIndex].classList.add('scared-ghost'); 
        }
       // if the ghost is scared and pacman is on it 
       if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')){
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost'); 
        ghost.currentIndex = ghost.startIndex; 
        score +=100; 
        scoreDisplay.innerHTML = score; 
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
       }

       checkForGameOver(); 
       
    }, ghost.speed);
}



//check for Game over  

function checkForGameOver(){
if(
  squares[pacmanCurrentIndex].classList.contains('ghost') && 
 !squares[pacmanCurrentIndex].classList.contains('scared-ghost')){
    ghosts.forEach(ghost => clearInterval(ghost.timerId)); 
    document.removeEventListener('keyup', movePacMan);
    setTimeout(function() {alert('Game Over')}, 500);
}
}


function checkForWin(){
    if(score >= 274){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacMan); 
        setTimeout(function() {alert('You Won!')}, 500);
    }
}


});
