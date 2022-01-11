let player = {
    Name: "Veca",
    Chips:  145
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "Want to play a round?";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");



let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;
//generate random cards in range 1-13

function getRandomCard(){
    let randomCard = Math.floor(Math.random()* 13) + 1;
    if (randomCard > 10){
        return 10;
    } else if (randomCard === 1) {
        return 11;
    } else {
        return randomCard;
    }
    
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
    
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    //render out ALL the cards
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = ("Dou you want to draw a new card?"); 
    } else if(sum === 21){
        message = ("Wohoo! You've got Blackjack!")
        hasBlackJack = true;
    } else {
        message = ("You're out of the game");
        isAlive = false;
    }
     messageEl.textContent = message;
};

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        var card = getRandomCard(); 
        sum += card;
        cards.push(card);
        renderGame();
    }
}

