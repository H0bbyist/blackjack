console.log("Sup");

var deal = document.getElementById("deal-button")
var pHand = document.getElementById("player-hand")
var dHand = document.getElementById("dealer-hand")
var img1 = document.createElement('img')
var img2 = document.createElement('img')
var img3 = document.createElement('img')
var img4 = document.createElement('img')

img1.src = "cards/AS.jpg"
img2.src = "cards/AC.jpg"
img3.src = "cards/AH.jpg"
img4.src = "cards/AD.jpg"

deal.addEventListener('click', function(e){
    pHand.appendChild(img1);
    pHand.appendChild(img2);

    dHand.appendChild(img3);
    dHand.appendChild(img4);
    
});
