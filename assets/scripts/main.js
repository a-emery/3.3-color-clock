function time () {
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

function zeros(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

document.querySelector('hr').style.width = (seconds / 60) * 500 + 'px';

console.log(seconds / 60);

document.querySelector('.clock').textContent = zeros(hours) + ":" + zeros(minutes) + ":" + zeros(seconds);
}

setInterval(time, 1000);
