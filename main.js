const Heading = document.querySelector(".heading")
const Player1 = document.querySelector(".player1")
const Player2 = document.querySelector(".player2")
const startBtn = document.querySelector(".start-btn")



function getRandomNUmber() {
    return Math.floor(Math.random() * 6) + 1
}

startBtn.addEventListener("click" , 
function runGame() {
    let randomNumber1 = getRandomNUmber()
let randomNumber2 = getRandomNUmber()
    Player1.innerHTML = `<p>player 1</p>
    <img src="./images/dice${randomNumber1}.png" alt="dice1">`


    Player2.innerHTML = `<p>player 2</p>
    <img src="./images/dice${randomNumber2}.png" alt="dice1">`

    return randomNumber1 > randomNumber2 ? Heading.innerHTML = `<h1>player 1 wins</h1>` : Heading.innerHTML = `<h1>player 2 wins</h1>`
}
)


