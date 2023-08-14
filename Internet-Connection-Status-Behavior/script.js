const imageStatus = document.getElementById('status-image');
const statusMessage = document.getElementById('status');
const section = document.getElementById('section-container');

window.addEventListener('online', function () {
  imageStatus.src = 'images/wifi.png';
  statusMessage.innerHTML = "You're ONLINE!!! Connection looks good.";
  section.style.backgroundColor = '#005490';
});

window.addEventListener('offline', function () {
  imageStatus.src = 'images/no-signal.png';
  statusMessage.innerHTML = 'OOPS!!! Your Internet Connection is Down.';
  section.style.backgroundColor = 'black';
});
