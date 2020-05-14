var dateButton = document.getElementById('gd');
var d = document.getElementById('d');
dateButton.addEventListener("click", getDate)
function getDate() {
  d.innerHTML = Date();
}








function myFunction() {
  var q1 = document.getElementById('1').checked;
  var q2 = document.getElementById('2').checked;
  var q3 = document.getElementById('3').checked;
  var q4 = document.getElementById('4').checked;
  var q5 = document.getElementById('5').checked;
  var q6 = document.getElementById('6').checked;
  var q7 = document.getElementById('7').checked;

  if (q3 == true && q5 == true) {
    document.getElementById('o').href = 'X-Max.html';
    document.getElementById('o').innerHTML = 'X-Max';
  } else if (q4 == true && q7 == true) {
    document.getElementById('o').href = 'Ultimaker_3.html';
    document.getElementById('o').innerHTML = 'Ultimaker 3';
  } else if (q1 == true && q5 == true) {
    document.getElementById('o').href = 'creality_CR.html';
    document.getElementById('o').innerHTML = 'Creality CR 10';
  } else if (q1 == true && q7 == true) {
    document.getElementById('o').href = 'creality_CR.html';
    document.getElementById('o').innerHTML = 'Creality CR 10';
  } else if (q3 == true && q7 == true) {
    document.getElementById('o').href = 'MakerBot_Replicator+.html';
    document.getElementById('o').innerHTML = 'MakerBot Replicator +';
  } else if (q1 == true && q6 == true) {
    document.getElementById('o').href = 'creality_resin.html';
    document.getElementById('o').innerHTML = 'Creality LD-002R LCD';
  } else if (q4 == true && q6 == true) {
    document.getElementById('o').href = 'form_3.html';
    document.getElementById('o').innerHTML = 'Formlabs Form 3';
  } else if (q4 == true && q5 == true) {
    document.getElementById('o').href = 'markforged_2.html';
    document.getElementById('o').innerHTML = 'Markforged Mark two';
  } else {
    document.getElementById('o').href = '';
    document.getElementById('o').innerHTML = '';
  }
}
