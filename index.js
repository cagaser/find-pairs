// const allCards = document.querySelectorAll(".card")

//Get the deck 
const deck = document.querySelectorAll(".card")
const deckArray = Array.from(deck)

//Assign values to all cards
const card1 = deckArray[0]
const card2 = deckArray[1]
const card3 = deckArray[2]
const card4 = deckArray[3]

//--------------------------------------
// deckArray.forEach(assignValue)

// function assignValue(card) {
//     card.innerHTML = "A";
// }
//TODO: USETHIS LATER, BUT MAKE SURE THEY ARE RANDOM ASSIGNMENT
//--------------------------------------

card1.innerHTML = "A"
card2.innerHTML = "B"
card3.innerHTML = "A"
card4.innerHTML = "B"

//Add eventListener to each card
//On click, show front
card1.addEventListener("click", flip)
card2.addEventListener("click", flip)
card3.addEventListener("click", flip)
card4.addEventListener("click", flip)

deckArray.forEach((card) => {card.addEventListener("click", flip)});

const pairedCards = []
function flip() {
    
    pairedCards.push(this)
    this.style.backgroundColor = "tomato";
    if (pairedCards.length > 1) {
        // console.log(pairedCards)
        //if not the same then change color to blue
        if (pairedCards[0].innerHTML !== pairedCards[1].innerHTML) {
            setTimeout(flipBack, 800, pairedCards[0])
            setTimeout(flipBack, 800, pairedCards[1])
        }

         //empty the paired cards list so we can check the other pair
        else pairedCards.length = 0;
    }
    console.log(pairedCards.length)
}

function flipBack (card) {
    // console.log(card)
    card.style.backgroundColor = "cornflowerblue";
}
