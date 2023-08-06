const btnClick = document.querySelectorAll('.paste, .audio');
const googleDriveLink = document.querySelector('.drive-style-container');
const embedAudio = document.querySelector('.embed-audio-container');

btnClick.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.className == 'paste') {
      googleDriveLink.style.display = 'flex';
      embedAudio.style.display = 'none';
    } else if (button.className == 'audio') {
      googleDriveLink.style.display = 'none';
      embedAudio.style.display = 'flex';
    }
  });
});
