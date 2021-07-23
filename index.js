'use strict';

const bookIberia = {
	airline: 'Iberia',
	route1: ['IMAD', 'Madrid'],
	route2: ['IBAR', 'Barcelona'],
	bookingsRoute1: [],
	bookingsRoute2: [],

	book: function (route, flightNum, name) {
		console.log(this);
		if (route === this.route1[0]) {
			console.log(
				`${name} booked a seat in ${this.route1[0]}${flightNum}`,
			);
			this.bookingsRoute1.push(
				`Passenger: ${name} / Flight: ${this.route1[0]}${flightNum}`,
			);
		} else if (route === this.route2[0]) {
			console.log(
				`${name} booked a seat in ${this.route2[0]}${flightNum}`,
			);
			this.bookingsRoute2.push(
				`Passenger: ${name} / Flight: ${this.route2[0]}${flightNum}`,
			);
		}
	},
};

// CREATE TWO MORE OBJECTS FOR DIFFERENT FLIGHT COMPANIES
const bookLufthansa = {
	airline: 'Lufthansa',
	route1: ['LAMS', 'Amsterdam'],
	route2: ['LBER', 'Berlin'],
	bookingsRoute1: [],
	bookingsRoute2: [],
};

const bookEmirates = {
	airline: 'Emirates',
	route1: ['EDUB', 'Dubai'],
	route2: ['EABU', 'Abu Dhabi'],
	bookingsRoute1: [],
	bookingsRoute2: [],
};

// PASS BOOK FUNCTION FROM THE FIRST BOOK OBJECT
const book = bookIberia.book;

// BIND METHOD to NOT REPEAT
const bookEMroute1 = book.bind(bookEmirates, bookEmirates.route1[0], 11);
const bookEMroute2 = book.bind(bookEmirates, bookEmirates.route2[0], 22);
const bookLHroute1 = book.bind(bookLufthansa, bookLufthansa.route1[0], 33);
const bookLHroute2 = book.bind(bookLufthansa, bookLufthansa.route2[0], 44);
const bookIBroute1 = book.bind(bookIberia, bookIberia.route1[0], 55);
const bookIBroute2 = book.bind(bookIberia, bookIberia.route2[0], 66);
// Better to create bind method for each route and make the function to pass just two arguments

// INPUT NAME & EMAIL
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
// SELECT AIRLINE & DESTINATION
const airline = document.getElementById('airline');
const destination = document.getElementById('destination');
// AIRLINE OPTIONS
const iberia = document.getElementById('iberia');
const lufthansa = document.getElementById('lufthansa');
const emirates = document.getElementById('emirates');
// DESTINATION OPTIONS
const destination1 = document.getElementById('destination1');
const destination2 = document.getElementById('destination2');
// BTN BOOK
const btnBook = document.querySelector('.btnBook');

// FUNCTION TO CHANGE DESTINATION VALUES WHEN AIRLINE SELECT OPTION IS CHANGED
let fligherName;
let fligherEmail;
let airlineValue;
let destinationValue;

function destinationValues() {
	airlineValue = document.getElementById('airline').value;

	if (airlineValue == 'Iberia') {
		destination1.value = 'Madrid';
		destination1.innerHTML = 'Madrid';
		destination2.value = 'Barcelona';
		destination2.innerHTML = 'Barcelona';
	} else if (airlineValue == 'Lufthansa') {
		destination1.value = 'Amsterdam';
		destination1.innerHTML = 'Amsterdam';
		destination2.value = 'Berlin';
		destination2.innerHTML = 'Berlin';
	} else if (airlineValue == 'Emirates') {
		destination1.value = 'Dubai';
		destination1.innerHTML = 'Dubai';
		destination2.value = 'Abu Dhabi';
		destination2.innerHTML = 'Abu Dhabi';
	}
}
destinationValues();

// FUNCTION DECLARATION TO CALL LATER AND GET INPUT VALUES
function getInputValues() {
	fligherName = document.getElementById('name').value;
	console.log(fligherName);
	fligherEmail = document.getElementById('email').value;
	console.log(fligherEmail);
	airlineValue = document.getElementById('airline').value;
	console.log(airline);
	destinationValue = document.getElementById('destination').value;
	console.log(destination);
}

// FUNCTION CLEAR VALUES
function clearValues() {
	nameInput.value = '';
	emailInput.value = '';
	airline.value = '';
	destination.value = '';
}

// BOOK CONFIRMATION BOX
const bookDoneContainer = document.querySelector('.bookDone');
const bookDoneText = document.querySelector('.bookDone--text');

function showBookConfirmation() {
	bookDoneContainer.style.display = 'block';
	bookDoneText.innerHTML = `Congratulations ${fligherName}! Your flight to ${destinationValue} with ${airlineValue} has been processed. Your will receive a confirmation email in ${fligherEmail} during next minutes.`;
	setTimeout(function () {
		bookDoneContainer.style.display = 'none';
	}, 7500);
}

// BOOK FLIGHT BUTTON CLICK
document.querySelector('.btnBook').addEventListener('click', function (e) {
	// e.preventDefault;
	getInputValues(); // GET INPUT VALUES WHEN BTN CLICKED

	if (destination.value == bookIberia.route1[1]) {
		bookIBroute1(fligherName);
	} else if (destination.value == bookIberia.route2[1]) {
		bookIBroute2(fligherName);
	} else if (destination.value == bookLufthansa.route1[1]) {
		bookLHroute1(fligherName);
	} else if (destination.value == bookLufthansa.route2[1]) {
		bookLHroute2(fligherName);
	} else if (destination.value == bookEmirates.route1[1]) {
		bookEMroute1(fligherName);
	} else if (destination.value == bookEmirates.route2[1]) {
		bookEMroute2(fligherName);
	}

	clearValues();

	showBookConfirmation();
});
