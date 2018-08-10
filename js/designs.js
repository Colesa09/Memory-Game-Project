//Javascript for Memory Card Game

var cards = document.querySelectorAll('.card');
var card = [...cards];
var deck = document.querySelector('.deck');
var restart = document.querySelector('.restart');
var newCards = [];
var cardOpen = [];
var cardsMatch = [];

var startTimer, endTimer; 
var mins = 0; 
var sec = 0;

var stars = document.querySelectorAll('.fa-star');
var allStars = document.querySelector('.stars');
var starRating = allStars.innerHTML;


var time = document.createElement('span');
var scorePanel = document.querySelector('.score-panel');
time.setAttribute('id', 'time');
scorePanel.insertAdjacentElement('beforeend', time);
/*
 *
/*Original function that start matching game */

timer();
function flipCard(evt) {
	card = evt.target;
	card.classList.add('open', 'show');
	cardOpen.push(card);
	if(cardOpen.length == 2) {
		counter();
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
				clearInterval(startTimer);
				endTimer = time.textContent;
			}
		}
	}else {
		setTimeout(function unmatchedCards () {
					cardOpen[0].classList.remove('open', 'show');
					cardOpen[1].classList.remove('open', 'show');
					cardOpen.splice(0, 2);
		}, 700);
	}
}
/*End of original function that starts matching game*/
/*
/*
/*Tracking moves made and calculates the star rating */
var count = document.querySelector('.moves');
var movesCount = 0;
function counter() {
	 movesCount++;
	count.innerHTML = movesCount;
	if(movesCount >= 17) {
		stars[1].style.visibility = 'hidden';
	}else if(movesCount > 12 && movesCount < 17) {
		stars[0].style.visibility = 'hidden';
	}
}
/*
 *
/*Tracking time function */
function timer() {
	startTimer = setInterval(function() {
		time.innerHTML = mins + ' :minutes ' + sec + ' :seconds';
		sec++;
		if(sec == 60) {
			mins++;
			sec = 0;
		}
	}, 1000);
}
/*
 *
/*Function that displays alert when winner wins the game */
var alertBox = document.getElementById('modal');
var playAgain = document.getElementById('playAgain');
var message = document.querySelector('.alertModal');
var displayRank = document.createElement('p');

function displayAlert() {
	displayRank.setAttribute('class', 'alertText');
	displayRank.innerHTML = "Number of Moves: " + movesCount + "<br>Star Rating: " + starRating  + "<br>Finished Time: " + endTimer;
	message.appendChild(displayRank);
}
/*
 *
/*Game over function when player has won the game */
function gameOver() {
	if(alertBox.classList == 'modal') {
	alertBox.style.display = 'block';
	displayAlert();
	}
	playAgain.addEventListener('click', function() {
		if(event.target == this) {
			alertBox.style.display = 'none';
			displayRank.innerHTML = " ";
		}
		startGame();
	});
}
/*
 *
/*Function that shuffle cards */
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
/*
 *
/*Function that starts game when the restart button is clicked */
function restartGame() {
	newCards = [...cards];
	newCards = shuffle(newCards);
	for(var y = 0; y < newCards.length; y++) {
		newCards[y].classList.remove('open', 'show', 'match');
		deck.appendChild(newCards[y]);
	}
	newCards = [];	
	//reset moves and star rating
	movesCount = 0;
	count.innerHTML = movesCount;
	stars[0].style.visibility = 'initial';
	stars[1].style.visibility = 'initial';
	/*end of reset moves and star rating
	
	reset Timer*/
	clearInterval(startTimer);
	document.getElementById('time').innerHTML = " ";
	mins = 0;
	sec = 0;
	timer();
	//end of timer
}
/*
 *
/*Function that starts game after wins*/
function startGame() {
	if(cardsMatch.length == 16) {
	cardsMatch = shuffle(cardsMatch);
		for(var x = 0; x < cardsMatch.length; x++) {
			cardsMatch[x].classList.remove('open', 'show', 'match');
			deck.appendChild(cardsMatch[x]);
		}
	}
		cardsMatch = [];		
	//reset moves and star rating
	movesCount = 0;
	count.innerHTML = movesCount;
	stars[0].style.visibility = 'initial';
	stars[1].style.visibility = 'initial';
	/*end of reset moves and star rating
	
	reset Timer*/
	document.getElementById('time').innerHTML = " ";
	mins = 0;
	sec = 0;
	timer();
	//end of timer
	
}	
/*
 *
/*Event Listeners for deck of cards and restart button*/
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