'use strict';

// const iberia = {
// 	airline: 'Iberia',
// 	flightMadrid: 'IMAD',
// 	flightBarcelona: 'IBAR',
// 	bookingsMadrid: [],
// 	bookingsBarcelona: [],

// 	book: function (route, flightNum, name) {
// 		console.log(this);
// 		// console.log(`${name} booked a seat in ${route}${flightNum}`);
// 		// this.bookings.push(name, route + flightNum);

// 		// if (route === this.flightMadrid) {
// 		// 	console.log(`${name} booked a seat in ${route}${flightNum}`);
// 		// 	this.bookingsMadrid.push(
// 		// 		`Passenger: ${name} / Flight: ${route}${flightNum}`,
// 		// 	);
// 		// }

// 		// if (route === this.flightBarcelona) {
// 		// 	console.log(`${name} booked a seat in ${route}${flightNum}`);
// 		// 	this.bookingsBarcelona.push(
// 		// 		`Passenger: ${name} / Flight: ${route}${flightNum}`,
// 		// 	);
// 		// }

// 		if (document.getElementById('destination1').value == 'madrid') {
// 			console.log(`${name} booked a seat in ${route}${flightNum}`);
// 			this.bookingsBarcelona.push(
// 				`Passenger: ${name} / Flight: ${route}${flightNum}`,
// 			);
// 		}
// 	},
// };

// iberia.book(iberia.flightMadrid, 55, 'Mandela');
// iberia.book(iberia.flightBarcelona, 4532, 'Jess');

const airline = document.getElementById('airline');

const iberia = document.getElementById('iberia');
const lufthansa = document.getElementById('lufthansa');
const emirates = document.getElementById('emirates');

const destination1 = document.getElementById('destination1');
const destination2 = document.getElementById('destination2');

const btnBook = document.querySelector('.btnBook');

function destinationValues() {
	let airline = document.getElementById('airline').value;

	if (airline == 'iberia') {
		console.log(`${airline} selected`);
		destination1.value = 'madrid';
		destination1.innerHTML = 'Madrid';
		destination2.value = 'barcelona';
		destination2.innerHTML = 'Barcelona';
	}
	if (airline == 'lufthansa') {
		console.log(`${airline} selected`);
		destination1.value = 'amsterdam';
		destination1.innerHTML = 'Amsterdam';
		destination2.value = 'berlin';
		destination2.innerHTML = 'Berlin';
	}
	if (airline == 'emirates') {
		console.log(`${airline} selected`);
		destination1.value = 'dubai';
		destination1.innerHTML = 'Dubai';
		destination2.value = 'abudhabi';
		destination2.innerHTML = 'Abu Dhabi';
	}
}

destinationValues();
