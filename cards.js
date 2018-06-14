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
      if (n > 9) {
      cards.push(new card(10, this.names[n], this.suits[s]));
      } else
      cards.push(new card(n+1, this.names[n], this.suits[s]));
    }
  }


  return cards;
}