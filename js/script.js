// CC - is the century digits. For example 1989 has CC = 19

// YY - is the Year digits (1989 has YY = 89)

// MM -  is the Month

// DD - is the Day of the month 

// mod - is the modulus function ( % )

function output() {
 var month = document.getElementById("month").value;
 var mm = parseInt(month);
 var day = document.getElementById("day").value;
 var dd = parseInt(day);
 var year = document.getElementById("year").value;
 var yy = parseInt(year);
 var cc = (yy - 1) / 100 + 1;


//  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7



 var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
 var boyNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 var girlNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
 if (document.getElementById("gender").checked) {
 var gender = 'male';
 }

//  var gebder = 'female';

 else {
 var gender = 'female';
 }
 if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
 alert("invalid month");
 }
 else if (dd < 1 || dd > 31) {
 alert("invalid date");
 }

 // math.round(result) == // && gender ==='male' //

 // math.round(result) == // && gender ==='male' //

 // math.round(result) == // && gender ==='male' //

 {
 if (Math.round(result) == 1 && gender === 'male');
 }

 {
 document.getElementById("outcome").innerHTML =
  ("Born on Monday ,your akan name is " + boyNames[1]);
 }


 if (Math.round(result) == 2 && gender === 'male') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Tuesday ,your akan name is " + boyNames[2]);
 }


 else if (Math.round(result) == 3 && gender === 'male') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Wednesday ,your akan name is " + boyNames[3]);
 }

 else if (Math.round(result) == 4 && gender === 'male') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Thursday,your akan name is " + boyNames[4]);
 }


 else if (Math.round(result) == 5 && gender === 'male') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Friday,your akan name is " + boyNames[5]);
 }


 else if (Math.round(result) == 6 && gender === 'male') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Saturday,your akan name is " + boyNames[6]);
 }


 else if (Math.round(result) == 0 && gender === 'male') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Sunday,your akan name is " + boyNames[0]);
 }

// femalenames  and born day //
// femalenames  and born day //
// femalenames  and born day //

 else if (Math.round(result) == 1 && gender === 'female') {
 document.getElementById("outcome").innerHTML = 
 ("Born on monday ,your akan name is " + girlNames[1]);
 }


 else if (Math.round(result) == 2 && gender === 'female') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Tuesday,your akan name is " + girlNames[2]);
 }


 else if (Math.round(result) == 3 && gender === 'female') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Wednesday,your akan name is " + girlNames[3]);
 }


 else if (Math.round(result) == 4 && gender === 'female') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Thursday,your akan name is " + girlNames[4]);
 }


 else if (Math.round(result) == 5 && gender === 'female') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Friday,your akan name is " + girlNames[5]);
 }


 else if (Math.round(result) == 6 && gender === 'female') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Saturday,your akan name is " + girlNames[6]);
 }


 else if (Math.round(result) == 0 && gender === 'female') {
 document.getElementById("outcome").innerHTML = 
 ("Born on Sunday,your akan name is " + girlNames[0]);
 }

 
 else {
 alert("enter your information please");
 }
 }


