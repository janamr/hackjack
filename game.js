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

//console.log(deck());

deck()
deck()


console.log(cards)

// var random = cards[Math.floor(Math.random()*cards.length)]
// console.log(random);



//player object
function Player () {

}

function Dealer () {

}

function firstDraw(player){
  for (i = 0; i <= 1; i++) {
    var random = cards[Math.floor(Math.random()*cards.length)]
    player.cards.push(cards[random])

  }
}

// playerDraw
// dealerDraw























// var cards2 = [
//   {
//     name: 'ace',
//     value: 1
//   },
//   {
//     name: 'one',
//     value: 1
//   },
//   {
//     name: 'two',
//     value: 2
//   },
//   {
//     name: 'three',
//     value: 3
//   },
//   {
//     name: 'four',
//     value: 4
//   },
//   {
//     name: 'five',
//     value: 5
//   },
//   {
//     name: 'six',
//     value: 6
//   },
//   {
//     name: 'seven',
//     value: 7
//   },
//   {
//     name: 'eight',
//     value: 8
//   },
//   {
//     name: 'nine',
//     value: 9
//   },
//   {
//     name: 'ten',
//     value: 10
//   },
//   {
//     name: 'jack',
//     value: 10
//   },
//   {
//     name: 'queen',
//     value: 10
//   },
//   {
//     name: 'king',
//     value: 10
//   },
// ];

