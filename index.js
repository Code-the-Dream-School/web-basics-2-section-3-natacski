 //Create Players
 const player1 = {
  name: prompt('player 1 name:'),
  shipCount: 0,  
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}

const player2 = {
  name: prompt('player 2 name:'),
  shipCount: 0,  
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
}

//Filling the game board with ships
const fillGameBoard = () => {
  for (let index = 0; index < 4; index++) {   
    let xCoord = getRandomInt(3);
    player1.gameBoard[index][xCoord] = 1;
  }

  player1.shipCount = 4;

  for (let index = 0; index < 4; index++) {   
    let xCoord = getRandomInt(3);
    player2.gameBoard[index][xCoord] = 1;
  }

  player2.shipCount = 4;
}


//Generate a random number 
const getRandomInt= (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}


//Battleship function
const battleship = (playerWhoseTurnItIs, otherPlayer) => {

  let inputXcoord = prompt(playerWhoseTurnItIs.name + ' Please enter a number between 0-3 for the x coordinate');
  let inputYcoord = prompt(playerWhoseTurnItIs.name + ' Please enter a number between 0-3 for the y coordinate');
      
  if (otherPlayer.gameBoard[inputXcoord][inputYcoord] === 1) {
    alert('HIT');
    otherPlayer.gameBoard[inputXcoord][inputYcoord] = 0;
    otherPlayer.shipCount = otherPlayer.shipCount - 1;

    if ( otherPlayer.shipCount  === 0)
    {
      alert( playerWhoseTurnItIs.name + ' wins the game!');
      return playerWhoseTurnItIs.name;
    }

  }else{
    alert('MISS');
  }
}

fillGameBoard();

console.log(JSON.stringify(player1.gameBoard))
console.log(JSON.stringify(player2.gameBoard))

let winner;

//Let players take turns
while ( player1.shipCount !== 0 || player2.shipCount !== 0 ) {
  winner = battleship(player1, player2);
  if (player1.shipCount === 0 || player2.shipCount === 0)
  {
    break;
  }
  else{
    winner = battleship(player2, player1);
    if (player1.shipCount === 0 || player2.shipCount === 0)
    {
      break;
    }
  }
}
const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = winner + ' wins the game!';


