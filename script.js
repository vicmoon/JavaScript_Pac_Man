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
            !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
            !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair') 
             ){
            pacmanCurrentIndex += width;
        }
        break;
}
squares[pacmanCurrentIndex].classList.add('pac-man');

pacDotEaten();
powerPelletEater(); 
checkForGameOver();
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
       squares[pacmanCurrentIndex].classList.remove('power-pellet')
    }

}


function checkForGameOver(){
    
}




});
