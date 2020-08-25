var akanMaleNaming = [
	'Kwasi',
	'Kwadwo',
	'Kwabena',
	'Kwaku',
	'Yaw',
	'Kofi',
	'Kwame',
];
var akanFemaleNaming = [
	'Akosua',
	'Adwoa',
	'Abenaa',
	'Akua',
	'Yaa',
	'Afua',
	'Ama',
];
function akan() {
	var date = document.getElementById('date').value;
	var gender = document.getElementById('gender').value;
	var CC = parseInt(date.substr(0, 2));
	var DD = parseInt(date.substr(8, 9));
	var MM = parseInt(date.substr(5, 7));
	var YY = parseInt(date.substr(2, 4));
	var dayOfTheWeek = parseInt(
		(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7
	);
	if (gender === 'Male') {
		alert('Ghanian name: ' + akanMaleNaming[dayOfTheWeek]);
	} else if (gender === 'Female') {
		alert('Ghanian name' + akanFemaleNaming[dayOfTheWeek]);
	}
}
