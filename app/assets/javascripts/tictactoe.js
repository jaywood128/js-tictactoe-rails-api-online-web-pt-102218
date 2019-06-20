// Code your JavaScript / jQuery solution here
var turn = 0; 

const WINNING_COMBOS = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]
       
        const state = () => $("td").map( function() {
          return this.innerHTML 
        })

function player() {
  
  return (turn % 2 == 0 ? "X" : "O")
};

function updateState(square) {

  let token = player(); 

  $(square).text(token) 
  
}
function setMessage(player) {
 
  let message = document.getElementById("message") 
    message.innerHTML += player
  
}

function winningCombo() {
  return WINNING_COMBOS.find( function(combo) {
    console.log(combo.every( i => state()[i] === "X") || combo.every( i => state()[i] === "O"))
    // If Every index in combo has an "X" in the state, or every index in combo has an "O" in the state, return true. 
    return combo.every( i => state()[i] === "X") || combo.every( i => state()[i] === "O")

  })
} 

function checkWinner() {
 
    if (!!winningCombo() === true) {
    
     var indexValue = winningCombo()[0]
     var winner = state()[indexValue]  
     // The board's winningcombo first index value 
      setMessage(`Player ${winner} Won!`)
      return true 
  } else {
      return false 
  }
} 

function doTurn(square) {
  turn += 1;
  updateState(square)
   debugger 
  if (checkWinner() === false && turn === 9) {
    $("td").empty()
    setMessage("Tie game.")
    turn = 0 
  }
  else {
     
  }

}     

$(document).ready(function(){
  attachListeners()
}) 
function attachListeners() {
    $("td").click(function(){
      doTurn(this)
    });
}


// doTurn()
// Increments the turn variable by 1.
// Invokes the updateState() function, passing it the element that was clicked.
// Invokes checkWinner() to determine whether the move results in a winning play.


// checkWiiner()
// Returns true if the current board contains any winning combinations (three X or O tokens in a row, vertically, horizontally, or diagonally). Otherwise, returns false.
// If there is a winning combination on the board, checkWinner() should invoke setMessage(), passing in the appropriate string based on who won: 'Player X Won!' or 'Player O Won!'

// setMessage(`Player ${board[combo[0]]} Won!`); 
