const btnGetLocation = document.getElementById('btn-location');
const userLocation = document.getElementById('user-location');

btnGetLocation.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});

const showPosition = (position) => {
  userLocation.innerHTML = `Latitude: ${position.coords.latitude} <br> Longituder: ${position.coords.longitude}`;
};
