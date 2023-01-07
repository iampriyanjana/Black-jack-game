let cards=[];
let firstCard;
let secondCard;
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";
let player={
    name:"priya",
    chips:200
}
let startGame=document.getElementById('start-game'); 
let messageEl=document.getElementById('message-el');
let finalSum=document.querySelector('#sum');
let cardsEl=document.querySelector('#cards');
let newCard=document.getElementById('new-card');
let playerEl=document.getElementById('player-el');

playerEl.innerHTML = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomCard= Math.floor(Math.random()*13)+1;
    if(randomCard==1){
        return 11;
    }
    else if(randomCard>=11){
         return 10;
    }
    else{
        return randomCard;
    }
}
function startgame(){
    isAlive=true;
    let first=getRandomCard();
    let second=getRandomCard();
    cards=[first,second];
    sum=first+second;

    rendergame();
}
function rendergame(){

    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    finalSum.textContent="Sum: "+sum;
    
    if(sum<=20){
        message="Do you want to draw a new card? 🙂";
    }
    else if(sum===21){
        message="Wohoo!You've got blackjack! 🥳";
        hasBlackJack=true;
    }
    else{
        message="You're out of the game! 😭";
        isAlive=false;
    }
    messageEl.textContent=message;
}
function newcard(){

    //only allow new card if player can further play && also if they have not received a blackjack
     if(isAlive===true && hasBlackJack===false){
        let card=getRandomCard();
        cards.push(card);
        sum+=card;
        rendergame();
     }
}
startGame.addEventListener("click",startgame);
newCard.addEventListener("click",newcard);