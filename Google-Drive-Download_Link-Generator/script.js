const btnClick = document.querySelectorAll('.paste, .audio, .video');
const googleDriveLink = document.querySelector('.drive-style-container');
const embedAudio = document.querySelector('.embed-audio-container');
const embedVideo = document.querySelector('.embed-video-container');
const inputLink = document.querySelector('#google-drive-link');
const btnGenerate = document.querySelector('.btn-generate');
const downLoadedLink = document.getElementById('downloaded-link');

const handleGenerateLink = () => {
  const googleDriveLinkPattern =
    /^https:\/\/drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+\/view\?usp=drive_link$/;

  const url = new URL(inputLink.value);
  const originURL = url.origin;
  const urlId = inputLink.value.split('/');
  const addedLink = 'uc?export=download&id=';

  const combinedLink = `${originURL}/${addedLink}${urlId[5]}`;

  if (!googleDriveLinkPattern.test(inputLink.value)) {
    alert('Invalid Google drive link');
    return;
  }

  downLoadedLink.value += combinedLink;

  // alert(combinedLink);
};

btnClick.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.className == 'paste') {
      googleDriveLink.style.display = 'flex';
      embedAudio.style.display = 'none';
      embedVideo.style.display = 'none';
    } else if (button.className == 'audio') {
      googleDriveLink.style.display = 'none';
      embedVideo.style.display = 'none';
      embedAudio.style.display = 'flex';
    } else {
      googleDriveLink.style.display = 'none';
      embedAudio.style.display = 'none';
      embedVideo.style.display = 'flex';
    }
  });
});

btnGenerate.addEventListener('click', handleGenerateLink);
