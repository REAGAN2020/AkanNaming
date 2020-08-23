var akanMaleNaming = ['Kwasi, Kwadwo, Kwabena,Kwaku, Yaw, Kofi,Kwame'];
var akanFemaleNaming = ['Akosua, Adwoa, Adwoa, Adwoa, Yaa,Afua,Ama'];
function akan() {
	var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    alert(gender)
    alert(date)
    var CC = parseInt(date.substr(0, 2))
    var DD = parseInt(date.substr(8, 9))
    alert(DD)
	// var mm;
	// var yy;
	// var dayOfTheWeek =
	// 	(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
	// alert(date);
}
