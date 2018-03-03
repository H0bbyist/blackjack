console.log("Sup");

var deal = document.getElementById("deal-button")
var hit = document.getElementById("hit-button")
var stand = document.getElementById("stand-button")
var pHand = document.getElementById("player-hand")
var dHand = document.getElementById("dealer-hand")
var img1 = document.createElement('img')
var img2 = document.createElement('img')
var img3 = document.createElement('img')
var img4 = document.createElement('img')
var img5 = document.createElement('img')

var deck = [
    { point: 1, suit: 'hearts' },
    { point: 2, suit: 'hearts' },
    { point: 3, suit: 'hearts' },
    { point: 4, suit: 'hearts' },
    { point: 5, suit: 'hearts' },
    { point: 6, suit: 'hearts' },
    { point: 7, suit: 'hearts' },
    { point: 8, suit: 'hearts' },
    { point: 9, suit: 'hearts' },
    { point: 10, suit: 'hearts' },
    { point: 11, suit: 'hearts' },
    { point: 12, suit: 'hearts' },
    { point: 13, suit: 'hearts' },
    { point: 1, suit: 'diamonds' },
    { point: 2, suit: 'diamonds' },
    { point: 3, suit: 'diamonds' },
    { point: 4, suit: 'diamonds' },
    { point: 5, suit: 'diamonds' },
    { point: 6, suit: 'diamonds' },
    { point: 7, suit: 'diamonds' },
    { point: 8, suit: 'diamonds' },
    { point: 9, suit: 'diamonds' },
    { point: 10, suit: 'diamonds' },
    { point: 11, suit: 'diamonds' },
    { point: 12, suit: 'diamonds' },
    { point: 13, suit: 'diamonds' },
    { point: 1, suit: 'clubs' },
    { point: 2, suit: 'clubs' },
    { point: 3, suit: 'clubs' },
    { point: 4, suit: 'clubs' },
    { point: 5, suit: 'clubs' },
    { point: 6, suit: 'clubs' },
    { point: 7, suit: 'clubs' },
    { point: 8, suit: 'clubs' },
    { point: 9, suit: 'clubs' },
    { point: 10, suit: 'clubs' },
    { point: 11, suit: 'clubs' },
    { point: 12, suit: 'clubs' },
    { point: 13, suit: 'clubs' },
    { point: 1, suit: 'spades' },
    { point: 2, suit: 'spades' },
    { point: 3, suit: 'spades' },
    { point: 4, suit: 'spades' },
    { point: 5, suit: 'spades' },
    { point: 6, suit: 'spades' },
    { point: 7, suit: 'spades' },
    { point: 8, suit: 'spades' },
    { point: 9, suit: 'spades' },
    { point: 10, suit: 'spades' },
    { point: 11, suit: 'spades' },
    { point: 12, suit: 'spades' },
    { point: 13, suit: 'spades' },
    

];

img1.src = "cards/AS.jpg"
img2.src = "cards/AC.jpg"
img3.src = "cards/AH.jpg"
img4.src = "cards/AD.jpg"
img5.src = "cards/4D.jpg"

deal.addEventListener('click', function(e){
    pHand.appendChild(img1);
    pHand.appendChild(img2);
    dHand.appendChild(img3);
    dHand.appendChild(img4);
    
});

hit.addEventListener('click', function(e) {
    pHand.appendChild(img5);
})