console.log("*** Object Oriented Javascript Version ***");

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

class Card {
    constructor(num, suit, point) {
        this.num = num;
        this.suit = suit;
        this.point = point;
    }
}

Card.prototype.getImageUrl = function() {
    return "Cards/"+this.num+this.suit+".png";
}


var newCard = new Card();

class Deck {
    constructor() {
        this.cards = [
            { num: "A", suit: 'H', point: 11 },
            { num: 2, suit: 'H', point: 2 },
            { num: 3, suit: 'H', point: 3 },
            { num: 4, suit: 'H', point: 4 },
            { num: 5, suit: 'H', point: 5 },
            { num: 6, suit: 'H', point: 6 },
            { num: 7, suit: 'H', point: 7 },
            { num: 8, suit: 'H', point: 8 },
            { num: 9, suit: 'H', point: 9 },
            { num: 10, suit: 'H', point: 10 },
            { num: "J", suit: 'H', point: 10 },
            { num: "Q", suit: 'H', point: 10 },
            { num: "K", suit: 'H', point: 10 },
            { num: "A", suit: 'D', point: 11 },
            { num: 2, suit: 'D', point: 2 },
            { num: 3, suit: 'D', point: 3 },
            { num: 4, suit: 'D', point: 4 },
            { num: 5, suit: 'D', point: 5 },
            { num: 6, suit: 'D', point: 6 },
            { num: 7, suit: 'D', point: 7 },
            { num: 8, suit: 'D', point: 8 },
            { num: 9, suit: 'D', point: 9 },
            { num: 10, suit: 'D', point: 10 },
            { num: "J", suit: 'D', point: 10 },
            { num: "Q", suit: 'D', point: 10 },
            { num: "K", suit: 'D', point: 10 },
            { num: "A", suit: 'C', point: 11 },
            { num: 2, suit: 'C', point: 2 },
            { num: 3, suit: 'C', point: 3 },
            { num: 4, suit: 'C', point: 4 },
            { num: 5, suit: 'C', point: 5 },
            { num: 6, suit: 'C', point: 6 },
            { num: 7, suit: 'C', point: 7 },
            { num: 8, suit: 'C', point: 8 },
            { num: 9, suit: 'C', point: 9 },
            { num: 10, suit: 'C', point: 10 },
            { num: "J", suit: 'C', point: 10 },
            { num: "Q", suit: 'C', point: 10 },
            { num: "K", suit: 'C', point: 10 },
            { num: "A", suit: 'S', point: 11 },
            { num: 2, suit: 'S', point: 2 },
            { num: 3, suit: 'S', point: 3 },
            { num: 4, suit: 'S', point: 4 },
            { num: 5, suit: 'S', point: 5 },
            { num: 6, suit: 'S', point: 6 },
            { num: 7, suit: 'S', point: 7 },
            { num: 8, suit: 'S', point: 8 },
            { num: 9, suit: 'S', point: 9 },
            { num: 10, suit: 'S', point: 10 },
            { num: "J", suit: 'S', point: 10 },
            { num: "Q", suit: 'S', point: 10 },
            { num: "K", suit: 'S', point: 10 }

        ];
    }
}
var newDeck = new Deck()

Deck.prototype.draw = function () {
    this.cards[]
    this.cards.pop();
}
Deck.prototype.numCardsLeft = function () {
    return this.cards.length
}
Deck.prototype.shuffle = function () {
        array = this.cards;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    
}


var cardRand = function () {
    var rand = Math.floor(Math.random() * deck.length);
    card = deck[rand]
    usedCards.push(card);
    points = card.point;
    var mod = deck.splice(rand, 1);
    return "Cards/" + card.num + card.suit + ".jpg";
}
var tie = function () {
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

deal.addEventListener('click', function () {         // Deal Button
    hit.disabled = false;
    stand.disabled = false;

    newDeck.shuffle();
    newDeck.draw();
    var img = document.createElement('img');
    img.src = newCard.getImageUrl();
    pHand.appendChild(img);
    pScore += newCard.point;


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
    var newDeck = new Deck()
    newDeck.shuffle();
    newDeck.draw();
    var img = document.createElement('img');
    img.src = newCard.getImageUrl();
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

});

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
        tie();
    }
    else if (dScore > pScore && dScore < 21) {
        dwin();
    }
    else if (dScore < pScore && dScore < 21) {
        pwin();
    }
});

again.addEventListener('click', function () {        // Again Button
    reset();
    deal.disabled = false;
    hit.disabled = true;
    stand.disabled = true;
});