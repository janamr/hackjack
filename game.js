function card (value,name,suit){
  this.value=value;
  this.name=name;
  this.suit=suit;
}

var cards = [];
function deck (){
  this.names = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['hearts','diamonds','spades','clubs'];

  for (var s = 0; s < this.suits.length; s++) {
    for (var n = 0; n < this.names.length; n++) {
      if (n > 9 ) {
      cards.push(new card(10, this.names[n], this.suits[s]));
      } else if (this.names[n]==="A"){
        cards.push(new card(11, this.names[n], this.suits[s]));
      }
      else cards.push(new card(n+1, this.names[n], this.suits[s]));
    }
  }


  return cards;
}



deck()
console.log(cards)
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
  displayHand();
  $(".dealer-cards").empty();
  var card = dealer.cards[0]
  $('.dealer-cards').append('<div>'+ card.name +'<img src="images/'+ card.suit +'.png"></div>');
  $('.dealer-cards').append('<img src="images/card-placeholder.png" class="player-cards" alt="">');

}

function displayHand() {
  $(".score").text(player.points);
  $(".player-cards").empty();
  player.cards.forEach(function(card){
    $('.player-cards').append('<div>'+ card.name +'<img src="images/'+ card.suit +'.png"></div>');
  });
}


// dealer options
function dealerChoice(){
  while (dealer.points < 17) {
    draw(dealer);
  }
  // if (sumValues (dealer) >= 17) {
  //   compare()
  // }
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

Player.prototype.hit = function(Draw){
  return this.cards + Draw;
}

Player.prototype.stand = function(){
  return this.cards
}

function sumValues (user) {
  user.points = 0;
  for (var i=0; i<user.cards.length; i++) {
    user.points += user.cards[i].value
  }
  // if (user.points > 21) {
  //   var ace = user.cards.find(function(element) {
  //     return element.name == "A"
  //   })
  // }
  // if (ace !== undefined){
  //   return user.points - 10
  // }


 return user.points
}

// function userChoice (user) {
//   while (user.points < 21) {
//     var userChoice = prompt("You have: " + user.points + ". Hit or Stand");
//     userChoice = userChoice.toLowerCase();
//     if (userChoice == 'hit') {
//       draw(user);
//       displayHand();
//     } else if (userChoice == "stand") {
//       break;
//     }
//   }
// }

// function compare player&dealer cards
function compare(){
  if (player.points == dealer.points) {
    alert ('STANDOFF');
  }
  if (player.points > dealer.points && player.points <= 21){
    alert ('YOU WON!')
  }
  else if (dealer.points > player.points && dealer.points <= 21) {
    alert ('YOU LOSE!');
  }
};

// $(document).ready(function(){
//   $(".deal").click(function(){
//       $(.).text("Hello world!");
//   });
// });

// $(".score").text(player.points)

$("#deal").click(function (){
    deal();
    $(".player-cards").show();
    $("#hit").show();
    $("#stand").show();
    $(".pre-deal").hide();
    $("#deal").hide();
})

$("#hit").click(function(){
  draw(player);
  displayHand();
})

$("#stand").click(function(){
  dealerChoice();
  $(".dealer-cards").empty();
  dealer.cards.forEach(function(card){
    $('.dealer-cards').append('<div>'+ card.name +'<img src="images/'+ card.suit +'.png"></div>');
  });
  compare();
})

// $(".hit").click(function draw())
// $(".stand").click(function compare())


// userChoice(player);
// dealerChoice(dealer);
// compare();