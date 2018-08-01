//Javascript for Memory Card Game

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var card1, card2;
var symbol;

var deck = document.querySelector('.deck');
var restart = document.querySelector('.restart');
var cards = " ";
var cardOpen = [];
var cardsMatch = [];

function flipCard(evt) {
	var card = evt.target;
	card.classList.add('open', 'show');
	//need to start timer here
	cardOpen.push(card);
	if(cardOpen.length == 2) {
		matchCards();
	}
}
	
function matchCards() {
	if(cardOpen[0].isEqualNode(cardOpen[1])) {
		cardOpen[0].classList.add('match');
		cardOpen[1].classList.add('match');
		while( (i = cardOpen.shift()) !== undefined) {
			cardsMatch.push(i);
			if(cardsMatch.length == 16) {
				setTimeout(gameOver, 1000);
				//need to end timer here
			}
		}
	}else {
		setTimeout(function unmatchedCards () {
					cardOpen[0].classList.remove('open', 'show');
					cardOpen[1].classList.remove('open', 'show');
					cardOpen.splice(0, 2);
		}, 1000);
	}
}

function gameOver() {
	if(confirm('You Won! Congratulations.\nWould you like to play again?')) {
		location.reload(true);
		shuffle();
	}
		
}
function restartGame() {
	location.reload(true);
	shuffle();
}
	
deck.addEventListener('click', flipCard);	
restart.addEventListener('click', restartGame);

	

	


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