var streamDates = [
  new Date('2021-03-11'),
  new Date('2021-03-19'),
  new Date('2021-04-15'),
  new Date('2021-04-22'),
  new Date('2021-05-06'),
  new Date('2021-05-20'),
  new Date('2021-05-26'),
  new Date('2021-06-03')
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

new Twitch.Player("twitch-embed", {
  channel: "halbzocken"
});


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
