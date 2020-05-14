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

  if (q1 == true && q5 == true) {
    document.getElementById('o').href = 'X-Max.html';
    document.getElementById('o').innerHTML = 'X-Max';
  }
}
