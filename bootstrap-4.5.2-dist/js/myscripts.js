var akanMaleNaming = ['Kwasi, Kwadwo, Kwabena,Kwaku, Yaw, Kofi,Kwame'];
var akanFemaleNaming = ['Akosua, Adwoa, Adwoa, Adwoa, Yaa,Afua,Ama'];
function akan() {
	var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    alert(gender)
    alert(date)
    var CC = parseInt(date.substr(0, 2))
    var DD = parseInt(date.substr(8, 9))
    var mm = parseInt(date.substr(5, 7))
    var yy = parseInt(date.substr(2, 4))
	var dayOfTheWeek =
		(CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
	alert(date);
}
