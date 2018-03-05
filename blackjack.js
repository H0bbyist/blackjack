console.log("Sup");

var deal = document.getElementById("deal-button")
var hit = document.getElementById("hit-button")
var stand = document.getElementById("stand-button")
var again = document.getElementById("again-button")
var pHand = document.getElementById("player-hand")
var dHand = document.getElementById("dealer-hand")
var pBoard = document.getElementById("playerScore")
var dBoard = document.getElementById("dealerScore")
var images = document.getElementsByTagName('img')
var pScore = 0;
var dScore = 0;
var points = 0;
var usedCards = [];

var deck = [
    { case: "A", suit: 'H', point: 11 },
    { case: 2, suit: 'H', point: 2 },
    { case: 3, suit: 'H', point: 3 },
    { case: 4, suit: 'H', point: 4 },
    { case: 5, suit: 'H', point: 5 },
    { case: 6, suit: 'H', point: 6 },
    { case: 7, suit: 'H', point: 7 },
    { case: 8, suit: 'H', point: 8 },
    { case: 9, suit: 'H', point: 9 },
    { case: 10, suit: 'H', point: 10 },
    { case: "J", suit: 'H', point: 10 },
    { case: "Q", suit: 'H', point: 10 },
    { case: "K", suit: 'H', point: 10 },
    { case: "A", suit: 'D', point: 11 },
    { case: 2, suit: 'D', point: 2 },
    { case: 3, suit: 'D', point: 3 },
    { case: 4, suit: 'D', point: 4 },
    { case: 5, suit: 'D', point: 5 },
    { case: 6, suit: 'D', point: 6 },
    { case: 7, suit: 'D', point: 7 },
    { case: 8, suit: 'D', point: 8 },
    { case: 9, suit: 'D', point: 9 },
    { case: 10, suit: 'D', point: 10 },
    { case: "J", suit: 'D', point: 10 },
    { case: "Q", suit: 'D', point: 10 },
    { case: "K", suit: 'D', point: 10 },
    { case: "A", suit: 'C', point: 11 },
    { case: 2, suit: 'C', point: 2 },
    { case: 3, suit: 'C', point: 3 },
    { case: 4, suit: 'C', point: 4 },
    { case: 5, suit: 'C', point: 5 },
    { case: 6, suit: 'C', point: 6 },
    { case: 7, suit: 'C', point: 7 },
    { case: 8, suit: 'C', point: 8 },
    { case: 9, suit: 'C', point: 9 },
    { case: 10, suit: 'C', point: 10 },
    { case: "J", suit: 'C', point: 10 },
    { case: "Q", suit: 'C', point: 10 },
    { case: "K", suit: 'C', point: 10 },
    { case: "A", suit: 'S', point: 11 },
    { case: 2, suit: 'S', point: 2 },
    { case: 3, suit: 'S', point: 3 },
    { case: 4, suit: 'S', point: 4 },
    { case: 5, suit: 'S', point: 5 },
    { case: 6, suit: 'S', point: 6 },
    { case: 7, suit: 'S', point: 7 },
    { case: 8, suit: 'S', point: 8 },
    { case: 9, suit: 'S', point: 9 },
    { case: 10, suit: 'S', point: 10 },
    { case: "J", suit: 'S', point: 10 },
    { case: "Q", suit: 'S', point: 10 },
    { case: "K", suit: 'S', point: 10 },
    { case: "A", suit: 'H', point: 11 },
    { case: 2, suit: 'H', point: 2 },
    { case: 3, suit: 'H', point: 3 },
    { case: 4, suit: 'H', point: 4 },
    { case: 5, suit: 'H', point: 5 },
    { case: 6, suit: 'H', point: 6 },
    { case: 7, suit: 'H', point: 7 },
    { case: 8, suit: 'H', point: 8 },
    { case: 9, suit: 'H', point: 9 },
    { case: 10, suit: 'H', point: 10 },
    { case: "J", suit: 'H', point: 10 },
    { case: "Q", suit: 'H', point: 10 },
    { case: "K", suit: 'H', point: 10 },
    { case: "A", suit: 'D', point: 11 },
    { case: 2, suit: 'D', point: 2 },
    { case: 3, suit: 'D', point: 3 },
    { case: 4, suit: 'D', point: 4 },
    { case: 5, suit: 'D', point: 5 },
    { case: 6, suit: 'D', point: 6 },
    { case: 7, suit: 'D', point: 7 },
    { case: 8, suit: 'D', point: 8 },
    { case: 9, suit: 'D', point: 9 },
    { case: 10, suit: 'D', point: 10 },
    { case: "J", suit: 'D', point: 10 },
    { case: "Q", suit: 'D', point: 10 },
    { case: "K", suit: 'D', point: 10 },
    { case: "A", suit: 'C', point: 11 },
    { case: 2, suit: 'C', point: 2 },
    { case: 3, suit: 'C', point: 3 },
    { case: 4, suit: 'C', point: 4 },
    { case: 5, suit: 'C', point: 5 },
    { case: 6, suit: 'C', point: 6 },
    { case: 7, suit: 'C', point: 7 },
    { case: 8, suit: 'C', point: 8 },
    { case: 9, suit: 'C', point: 9 },
    { case: 10, suit: 'C', point: 10 },
    { case: "J", suit: 'C', point: 10 },
    { case: "Q", suit: 'C', point: 10 },
    { case: "K", suit: 'C', point: 10 },
    { case: "A", suit: 'S', point: 11 },
    { case: 2, suit: 'S', point: 2 },
    { case: 3, suit: 'S', point: 3 },
    { case: 4, suit: 'S', point: 4 },
    { case: 5, suit: 'S', point: 5 },
    { case: 6, suit: 'S', point: 6 },
    { case: 7, suit: 'S', point: 7 },
    { case: 8, suit: 'S', point: 8 },
    { case: 9, suit: 'S', point: 9 },
    { case: 10, suit: 'S', point: 10 },
    { case: "J", suit: 'S', point: 10 },
    { case: "Q", suit: 'S', point: 10 },
    { case: "K", suit: 'S', point: 10 },
    { case: "A", suit: 'H', point: 11 },
    { case: 2, suit: 'H', point: 2 },
    { case: 3, suit: 'H', point: 3 },
    { case: 4, suit: 'H', point: 4 },
    { case: 5, suit: 'H', point: 5 },
    { case: 6, suit: 'H', point: 6 },
    { case: 7, suit: 'H', point: 7 },
    { case: 8, suit: 'H', point: 8 },
    { case: 9, suit: 'H', point: 9 },
    { case: 10, suit: 'H', point: 10 },
    { case: "J", suit: 'H', point: 10 },
    { case: "Q", suit: 'H', point: 10 },
    { case: "K", suit: 'H', point: 10 },
    { case: "A", suit: 'D', point: 11 },
    { case: 2, suit: 'D', point: 2 },
    { case: 3, suit: 'D', point: 3 },
    { case: 4, suit: 'D', point: 4 },
    { case: 5, suit: 'D', point: 5 },
    { case: 6, suit: 'D', point: 6 },
    { case: 7, suit: 'D', point: 7 },
    { case: 8, suit: 'D', point: 8 },
    { case: 9, suit: 'D', point: 9 },
    { case: 10, suit: 'D', point: 10 },
    { case: "J", suit: 'D', point: 10 },
    { case: "Q", suit: 'D', point: 10 },
    { case: "K", suit: 'D', point: 10 },
    { case: "A", suit: 'C', point: 11 },
    { case: 2, suit: 'C', point: 2 },
    { case: 3, suit: 'C', point: 3 },
    { case: 4, suit: 'C', point: 4 },
    { case: 5, suit: 'C', point: 5 },
    { case: 6, suit: 'C', point: 6 },
    { case: 7, suit: 'C', point: 7 },
    { case: 8, suit: 'C', point: 8 },
    { case: 9, suit: 'C', point: 9 },
    { case: 10, suit: 'C', point: 10 },
    { case: "J", suit: 'C', point: 10 },
    { case: "Q", suit: 'C', point: 10 },
    { case: "K", suit: 'C', point: 10 },
    { case: "A", suit: 'S', point: 11 },
    { case: 2, suit: 'S', point: 2 },
    { case: 3, suit: 'S', point: 3 },
    { case: 4, suit: 'S', point: 4 },
    { case: 5, suit: 'S', point: 5 },
    { case: 6, suit: 'S', point: 6 },
    { case: 7, suit: 'S', point: 7 },
    { case: 8, suit: 'S', point: 8 },
    { case: 9, suit: 'S', point: 9 },
    { case: 10, suit: 'S', point: 10 },
    { case: "J", suit: 'S', point: 10 },
    { case: "Q", suit: 'S', point: 10 },
    { case: "K", suit: 'S', point: 10 },
];

var cardRand = function () {
    var rand = Math.floor(Math.random() * deck.length);
    card = deck[rand]
    usedCards.push(card);
    points = card.point;
    var mod = deck.splice(rand, 1);
    return "Cards/" + card.case + card.suit + ".jpg";
}
var draw = function () {
    pBoard.textContent = "Player:" + " " + pScore + " " + "Draw";
    dBoard.textContent = "Dealer:" + " " + dScore + " " + "Draw";
    hit.disabled = true;
    stand.disabled = true;
}
var pwin = function () {
    pBoard.textContent = "Player:" + " " + pScore + " " + "Player Wins";
    hit.disabled = true;
    stand.disabled = true;
}
var plose = function () {
    pBoard.textContent = "Player -" + " " + pScore + " " + "Player Busts";
    hit.disabled = true;
    stand.disabled = true;
}
var dwin = function () {
    dBoard.textContent = "Dealer -" + " " + dScore + " " + "Dealer Wins";
    hit.disabled = true;
    stand.disabled = true;
}
var dlose = function () {
    dBoard.textContent = "Dealer -" + " " + dScore + " " + "Dealer Busts";
    hit.disabled = true;
    stand.disabled = true;
}
var reset = function () {
    usedCards.map(function (e) {
        var x = usedCards.splice(e, usedCards.length);
        for (i = 0; i < x.length; i++) {
            deck.push(x[i]);
        }
    })



    while (pHand.firstChild) {
        pHand.removeChild(pHand.firstChild);
    }
    while (dHand.firstChild) {
        dHand.removeChild(dHand.firstChild);
    }

    pScore = 0;
    dScore = 0;
    pBoard.textContent = "Player -";
    dBoard.textContent = "Dealer -";

}

hit.disabled = true;
stand.disabled = true;

deal.addEventListener('click', function () {          // Deal Button
    hit.disabled = false;
    stand.disabled = false;

    var img = document.createElement('img');
    img.src = cardRand();
    pHand.appendChild(img);
    pScore += points;

    var img = document.createElement('img');
    img.src = cardRand();
    pHand.appendChild(img);
    pScore += points;

    var img = document.createElement('img');
    img.src = cardRand();
    dHand.appendChild(img);
    dScore += points;

    var img = document.createElement('img');
    img.src = cardRand();
    dHand.appendChild(img);
    dScore += points;

    pBoard.textContent = "Player -" + " " + pScore;
    dBoard.textContent = "Dealer -" + " " + dScore;

    if (pScore > 21) {
        plose();
        hit.disabled = true;
    }
    if (pScore == 21) {
        pwin();
        hit.disabled = true;
    }

    deal.disabled = true;

});

hit.addEventListener('click', function () {          // Hit Button
    var img = document.createElement('img');
    img.src = cardRand();
    pHand.appendChild(img);
    pScore += points;

    pBoard.textContent = "Player -" + " " + pScore;

    if (pScore > 21) {
        plose();
        hit.disabled = true;
    }
    if (pScore == 21) {
        pwin();
        hit.disabled = true;
    }

})

stand.addEventListener('click', function () {        // Stand Button
    hit.disabled = true;

    while (dScore < 17) {
        var img = document.createElement('img');
        img.src = cardRand();
        dHand.appendChild(img);
        dScore += points;


    }
    dBoard.textContent = "Dealer:" + " " + dScore;

    if (dScore > 21) {
        dlose();
        stand.disabled = true;
    }
    if (dScore == 21) {
        dwin();
        stand.disabled = true;
    }
    if (dScore == pScore) {
        draw();
    }
    else if (dScore > pScore && dScore < 21) {
        dwin();
    }
    else if (dScore < pScore && dScore < 21) {
        pwin();
    }
})

again.addEventListener('click', function () {        // Again Button
    reset();
    deal.disabled = false;
    hit.disabled = true;
    stand.disabled = true;
})