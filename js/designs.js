//Javascript for Memory Card Game

var startTimer, endTimer; 
var mins = 0; 
var sec = 0;

var deck = document.querySelector('.deck');
var restart = document.querySelector('.restart');
var newCards = [];
var cardOpen = [];
var cardsMatch = [];

var stars = document.querySelectorAll('.fa-star');
var scorePanel = document.querySelector('.score-panel');

//Tracking moves & star rating
var count = document.querySelector('.moves');
var movesCount = 0;
function counter() {
	 movesCount++;
	count.innerHTML = movesCount;
	if(movesCount >= 15) {
		stars[1].style.visibility = 'hidden';
	}else if(movesCount > 10 && movesCount < 15) {
		stars[0].style.visibility = 'hidden';
	}
}


//Tracking time function
var time = document.createElement('span');
time.setAttribute('id', 'time');
scorePanel.insertAdjacentElement('beforeend', time);
function timer() {
	time.innerHTML = mins + ' :minutes ' + sec + ' :seconds';
	sec++;
		if(sec == 60) {
			mins++;
			sec = 0;
		}
}


//Shuffle the cards function
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
//Game is started again after win
function startGame() {
	//moves, star rating and timer reset
	movesCount = 0;
	count.innerHTML = movesCount;
	stars[0].style.visibility = 'initial';
	stars[1].style.visibility = 'initial';
	document.getElementById('time').innerHTML = " ";
	min = 0;
	sec = 0;
	setInterval(timer, 1000);
	//end of moves, star and timer
	
		while( (j = cardsMatch.shift()) !== undefined) {
				newCards.push(j);
		}
		newCards = shuffle(newCards);
		for(var x = 0; x <= newCards.length; x++) {
			newCards[x].classList.remove('open', 'show', 'match');
			deck.appendChild(newCards[x]);
		}
	flipCard();
}
//Memory Game function
startTimer = setInterval(timer, 1000);
function flipCard(evt) {
	var card = evt.target;
	
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
//Game over function
function gameOver() {
	if(confirm('You Won! Congratulations.\nWould you like to play again?\nMoves: ' + movesCount +'\nTime: ' + endTimer)) {
		startGame();
		
	}	
}
//if the restart button is click before game over
function restartGame() {
	startGame();
}
//event listeners for cards on game and restart button	
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