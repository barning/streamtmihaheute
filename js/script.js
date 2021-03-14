var streamDates = [
  new Date('2021-03-19')
]

var q = new Date();
var m = q.getMonth();
var d = q.getDay();
var y = q.getFullYear();

var today = new Date(y, m, d);

var answer = document.querySelector('.answer h2');
var kevinNiklas = document.querySelector('.show-twitch--kevinniklas');
var miha = document.querySelector('.show-twitch--miha');

var isStreaming = false;

checkAllDates();


function checkAllDates() {
  streamDates.forEach(date => {
    if (isToday(date)) {
      answer.innerHTML = 'JA'
      isStreaming = true;
    }
  });

  if (!isStreaming) {
    kevinNiklas.classList.remove('hide');
    miha.classList.add('hide');
  } else {
    kevinNiklas.classList.add('hide');
    miha.classList.remove('hide');
  }
}

function isToday(dateParameter) {
  var today = new Date();
  return dateParameter.getDate() === today.getDate() && dateParameter.getMonth() === today.getMonth() && dateParameter.getFullYear() === today.getFullYear();
}
