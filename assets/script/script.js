const replay = document.querySelector('.restart')
const check = document.querySelector('.play')
const message = document.querySelector('.message')
const square = document.querySelectorAll('.btn')

let initial = 0
const selectedSquare = []

replay.addEventListener('click', ReplayGame)
check.addEventListener('click', Attack)

function ReplayGame () {
  window.location.reload()
}

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('click', Position)
}

function Position () {
  const id = this.getAttribute('id')

  if (initial === 0) {
    this.style.background = 'beige'
    selectedSquare.push(id)
    console.log(selectedSquare)
    initial++
  } else if (initial === 1) {
    this.style.background = 'orange'
    selectedSquare.push(id)
    initial++
  } else {
    message.style.color = 'red'
    message.textContent = 'only two square can be choosed'
  }
}

function Attack () {
  console.log(selectedSquare)
  const correct = String.fromCodePoint(128522)
  const wrong = String.fromCodePoint(128531)
  if (selectedSquare.length !== 2) {
    message.style.color = 'black'
    message.textContent = ' to play make two moves!'
    setTimeout(() => {
      message.textContent = ''
    }, 1000)
  } else {
    const index1 = selectedSquare[0]
    const index2 = selectedSquare[1]
    const unit11 = index1.split('', index1)[0]
    const unit12 = index1.split('', index1)[1]

    const unit21 = index2.split('', index2)[0]
    const unit22 = index2.split('', index2)[1]

    const positionRightLeft = Math.abs(parseInt(index1) - parseInt(index2))

    if (unit11 === unit21) {
      message.textContent = ` attack sucessful Great Job`
    } else if (unit12 === unit22) {
      message.textContent = `attack sucessful Great Job`
    } else if (unit11 - unit12 === unit21 - unit22) {
      message.textContent = `attack sucessful Great Job`
    } else if (positionRightLeft % 9 === 0) {
      message.textContent = `attack sucessful Great Job`
    } else {
      message.style.color = 'red'
      message.textContent = ` Oops!  attack failed sorry`
    }
  }
}
