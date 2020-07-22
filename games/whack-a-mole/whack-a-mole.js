const cells = [...document.querySelectorAll('td')]

let audio = new Audio();
audio.src = "whack-audio.wav";

function randomize() {
  const index = Math.floor(Math.random() * cells.length)
  mole(cells[index])
}

function mole(cell) {
  cell.innerHTML = '<img src="mole.png" alt="Mole" width="70" height="70">';
  cell.addEventListener('click', () => {
    if(cell.children.length) {
      audio.play();
      cell.removeChild(cell.children[0])
      randomize()
    }
  })
}

randomize()