
let sum = 0
let cards = [] // array - ordered list of items
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("body")
let cardsEl = document.getElementById("cards-el")

let player = {

    name: "Johni",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){

    let randomNumber = Math.floor( Math.random() * 6) + 1

    if(randomNumber> 10){

        return 10
    }
    else if(randomNumber ===1){

        return 11
    }
    else{

        return randomNumber
    }    
}
function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let sum = firstCard + secondCard
    let cards = [firstCard, secondCard]

    renderGame()
}
function renderGame(){

    cardsEl.textContent = "Cards: "

    for(let count=0; count<cards.length;count++){

        cardsEl.textContent += cards[count] + " "
    }
    sumEl.textContent = "Sum: "+sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){ //=== means strictly equal to 21 condition
        message = "Wow, you have got the Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    
    //Cash out
    messageEl.textContent = message    
}

function newCard(){
    console.log("Drawing a new card from the deck!")         
    if(isAlive && !hasBlackJack){

        let card = getRandomCard()
        sum += card
    
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
