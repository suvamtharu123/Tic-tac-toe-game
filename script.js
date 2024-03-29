let keyPress = new Audio("keypress.wav")
let winnerSound = new Audio("win.wav")
let soundReset = new Audio('reset.wav')
let turn = "X"
let gameover = false;
let reset = document.getElementById('reset')

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X"

}



// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let winner = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ]
  winner.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Congratulation you won"
      gameover = true
      document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '197px';
      winnerSound.play()

    }



  })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeTurn();
      keyPress.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  })
})

//Add onclick listner to reset button
reset.addEventListener('click', (e) => {
  let boxtexts = document.querySelectorAll('.boxtext')
  Array.from(boxtexts).forEach((element) => {
    element.innerText = ''
  });
  turn = 'X'
  gameover = false
  document.getElementsByClassName('info')[0].innerText = 'Turn for' + turn;
  document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '0';
  soundReset.play();
})
