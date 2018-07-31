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


function flipCard(evt) {
	var card = evt.target;
	card.classList.add('open', 'show');
	list();
}
function list() {
	var cardOpen = document.querySelectorAll('li.card.open.show');
		if(cardOpen.length == 2) {
			//deck.removeEventListener('click', flipCard);
			matchCards();
		}
		
}
		
function matchCards() {
	var childCardOpen = document.querySelectorAll('li.card.open.show > i');
		if(childCardOpen[0].classList.value != childCardOpen[1].classList.value) {
		 setTimeout(function unmatchedCards () {
			card2 = document.querySelectorAll('li.card.open.show');
				for(var j = 0; j <= card2.length; j++) {
					card2[j].classList.remove('open', 'show');
			}
		}, 500);
	}else if(childCardOpen[0].classList.value == childCardOpen[1].classList.value) {
		card1 = document.querySelectorAll('li.card.open.show');
			for(var i = 0; i <= card1.length; i++) {	
				card1[i].classList.add('match');
			}
	}else {
		gameOver();
	}
	deck.addEventListener('click', flipCard);
	
	 
}


deck.addEventListener('click', flipCard);			
	

	


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