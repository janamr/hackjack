
function card (value,name,suit){
  this.value=value;
  this.name=name;
  this.suit=suit;
}

var cards = [];
function deck (){
  this.names = ['ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'];
  this.suits = ['hearts','diamonds','spades','clubs'];

  for (var s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {
      if (n > 9) {
      cards.push(new card(10, this.names[n], this.suits[s]));
      } else
      cards.push(new card(n+1, this.names[n], this.suits[s]));
    }
  }
  return cards;
}

// console.log(cards)
deck()
deck()
deck()

function draw(user){
  var random = Math.floor(Math.random()*cards.length)
  user.cards.push(cards[random])
 // cards = cards.slice(1,random)
  sumValues(user);
  return cards
}

function deal() {
  draw(player);
  draw(dealer);
  draw(player);
  draw(dealer);
}

// user options
// function dealerChoice(){
//   switch (choice) {
//       case "Hit":
//        draw(player)
//        checkSum(player)
//        break;
//       case "Stand":
//         checkSum(dealer)
//         while (sumValues (dealer) < 17) {
//           draw(dealer)
//         }
//           if (sumValues (dealer) >= 17) {
//             compare()
//           }
//        // visual: flip dealer card
//        break;
//   }}

// dealer options
function dealerChoice(dealer){
  while (dealer.points < 17) {
    draw(dealer);
  }
  if (sumValues (dealer) >= 17) {
    compare()
  }
}

//dealer object
function Dealer (cards, points) {
  this.cards = cards;
  this.points = points;
}

var dealer = new Dealer([], 0)

// console.log(dealer)

//player object
function Player (cards, chips, bet, points) {
  this.cards = cards;
  this.chips = chips;
  this.bet = bet;
  this.points = points;
}

var player = new Player([], 95, 5, 0)
console.log(player.cards)

deal();

userChoice(player);
dealerChoice(dealer);
compare();

Player.prototype.hit = function(Draw){
  return this.cards + Draw;
}

Player.prototype.stand = function(){
  return this.cards
}

function card (value,name,suit){
  this.value=value;
  this.name=name;
  this.suit=suit;
}

var cards = [];
function deck (){
  this.names = ['ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'];
  this.suits = ['hearts','diamonds','spades','clubs'];

  for (var s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {
      if (n > 9) {
      cards.push(new card(10, this.names[n], this.suits[s]));
      } else
      cards.push(new card(n+1, this.names[n], this.suits[s]));
    }
  }
  return cards;
}

function sumValues (user) {
  user.points = 0;
  for (var i=0; i<user.cards.length; i++) {
    user.points += user.cards[i].value
  }//
  return user.points
}

function userChoice (user) {
  while (user.points < 21) {
    var userChoice = prompt("You have: " + user.points + ". Hit or Stand");
    userChoice = userChoice.toLowerCase();
    if (userChoice == 'hit') {
      draw(user);
    } else if (userChoice == "stand") {
      break;
    }
  }
}

// function compare player&dealer cards
function compare(){
  if (player.points == dealer.points) {
    return 'STANDOFF'
  }
  if (player.points > dealer.points && player.points <= 21){
    return 'YOU WON!'
  }
  else if (dealer.points > player.points && dealer.points <= 21) {
    return 'YOU LOSE!'
  }
};