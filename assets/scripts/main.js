function time () {
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

function zeros(number) {
  if (String(number).length < 2) {
    return "0" + number;
  } else {
    return number;
  }
}

document.querySelector('hr').style.width = (seconds / 60) * 500 + 'px';

var hexStringSeconds = seconds.toString(16),
    hexStringMinutes = minutes.toString(16),
    hexStringHours = hours.toString(16);

document.querySelector('.time-clock').textContent = zeros(hours) + ":" + zeros(minutes) + ":" + zeros(seconds);
document.querySelector('.hex-clock').textContent = zeros(hexStringHours) + ":" + zeros(hexStringMinutes) + ":" + zeros(hexStringSeconds);

document.body.style.backgroundColor = "#" + zeros(hexStringHours) + zeros(hexStringMinutes) + zeros(hexStringSeconds);
}

setInterval(time, 1000);
