console.log("Sup");

var deal =document.getElementById("deal-button")
var hit = document.getElementById("hit-button")
var stand = document.getElementById("stand-button")
var pHand = document.getElementById("player-hand")
var dHand = document.getElementById("dealer-hand")


var deck = [
    { point: "A", suit: 'H' },
    { point: 2, suit: 'H' },
    { point: 3, suit: 'H' },
    { point: 4, suit: 'H' },
    { point: 5, suit: 'H' },
    { point: 6, suit: 'H' },
    { point: 7, suit: 'H' },
    { point: 8, suit: 'H' },
    { point: 9, suit: 'H' },
    { point: 10, suit: 'H' },
    { point: "J", suit: 'H' },
    { point: "Q", suit: 'H' },
    { point: "K", suit: 'H' },
    { point: "A", suit: 'D' },
    { point: 2, suit: 'D' },
    { point: 3, suit: 'D' },
    { point: 4, suit: 'D' },
    { point: 5, suit: 'D' },
    { point: 6, suit: 'D' },
    { point: 7, suit: 'D' },
    { point: 8, suit: 'D' },
    { point: 9, suit: 'D' },
    { point: 10, suit: 'D' },
    { point: "J", suit: 'D' },
    { point: "Q", suit: 'D' },
    { point: "K", suit: 'D' },
    { point: "A", suit: 'C' },
    { point: 2, suit: 'C' },
    { point: 3, suit: 'C' },
    { point: 4, suit: 'C' },
    { point: 5, suit: 'C' },
    { point: 6, suit: 'C' },
    { point: 7, suit: 'C' },
    { point: 8, suit: 'C' },
    { point: 9, suit: 'C' },
    { point: 10, suit: 'C' },
    { point: "J", suit: 'C' },
    { point: "Q", suit: 'C' },
    { point: "K", suit: 'C' },
    { point: "A", suit: 'S' },
    { point: 2, suit: 'S' },
    { point: 3, suit: 'S' },
    { point: 4, suit: 'S' },
    { point: 5, suit: 'S' },
    { point: 6, suit: 'S' },
    { point: 7, suit: 'S' },
    { point: 8, suit: 'S' },
    { point: 9, suit: 'S' },
    { point: 10, suit: 'S' },
    { point: "J", suit: 'S' },
    { point: "Q", suit: 'S' },
    { point: "K", suit: 'S' },
];

var playerHand = [];
var dealerHand = [];


var cardRand = function() {
    
    var rand = Math.floor(Math.random() * 52);
    card = deck[rand]
    var img = document.createElement('img');
    return "Cards/"+card.point+card.suit+ ".jpg";
    
    
}


deal.addEventListener('click', function(e){
    var img = document.createElement('img');
    img.src = cardRand();
    pHand.appendChild(img);
    var img = document.createElement('img');
    img.src = cardRand();
    pHand.appendChild(img);
    var img = document.createElement('img');
    img.src = cardRand();
    dHand.appendChild(img);
    var img = document.createElement('img');
    img.src = cardRand();
    dHand.appendChild(img);

});

hit.addEventListener('click', function(e) {
    var img = document.createElement('img');
    img.src = cardRand();
    pHand.appendChild(img);
})