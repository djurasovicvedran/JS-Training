let firstCard = 11;
let secondCard = 10;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sum = firstCard + secondCard;

if(sum < 21){
    message = ("Dou you want to draw a new card?");
    
} else if(sum === 21){
    message = ("Wohoo! You've got Blackjack!")
    hasBlackJack = true;
    

} else if(sum > 21){
    message = ("You're out of the game");
    isAlive = false;
}
message = "We're logging out!";
var blabla = 1;











    
