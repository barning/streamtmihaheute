var streamDates = [
  new Date('2021-03-11')
]

var q = new Date();
var m = q.getMonth();
var d = q.getDay();
var y = q.getFullYear();

var today = new Date(y, m, d);

var answer = document.querySelector('.answer h2');


streamDates.forEach(date => {
  if (isToday(date)) {
    answer.innerHTML = 'JA'
  }
});

function isToday(dateParameter) {
  var today = new Date();
  return dateParameter.getDate() === today.getDate() && dateParameter.getMonth() === today.getMonth() && dateParameter.getFullYear() === today.getFullYear();
}