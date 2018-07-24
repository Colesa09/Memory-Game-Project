//Javascript for Memory Card Game

/*function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}*/

var card1, card2;
var symbol;

var deck = document.querySelector('.deck');
deck.addEventListener('click', flipCard, false);

function flipCard(evt) {
	var card = evt.target;
	card.classList.add('open', 'show');
	list();
}
function list() {
	var cardOpen = document.querySelectorAll('.open, .show');
	if(cardOpen.length == 2) {
		deck.removeEventListener('click', flipCard, false);
	}
	console.log(cardOpen);
}
		
		
	

	


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */