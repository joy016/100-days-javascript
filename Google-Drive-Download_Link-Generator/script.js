const btnClick = document.querySelectorAll('.paste, .audio, .video');
const googleDriveLink = document.querySelector('.drive-style-container');
const embedAudio = document.querySelector('.embed-audio-container');
const embedVideo = document.querySelector('.embed-video-container');
const inputLink = document.querySelector('#google-drive-link');
const btnGenerate = document.querySelector('.btn-generate');
const downLoadedLink = document.getElementById('downloaded-link');
const embededAudio = document.getElementById('audio-link');
const embededVideo = document.getElementById('embeded-video');
const btnCopyDownloadedLInk = document.getElementById('copy-downloadedLink');
const btnCopyVideo = document.getElementById('copy-videoLink');
const copyAudio = document.getElementById('copy-audio');

let videoIFrame = '';
let audioEmbed = '';

const copyToClipboard = (element) => {
  const textArea = document.createElement('textarea');
  textArea.value = element.value || element.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Copied to clipboard');
};

const handleGenerateLink = () => {
  const googleDriveLinkPattern =
    /^https:\/\/drive\.google\.com\/file\/d\/[a-zA-Z0-9_-]+\/view\?usp=drive_link$/;
  const url = new URL(inputLink.value);
  const originURL = url.origin;
  const urlId = inputLink.value.split('/');
  const addedLink = 'uc?export=download&id=';
  const combinedLink = `${originURL}/${addedLink}${urlId[5]}`;
  const embedVideoSource = `${originURL}/file/d/${urlId[5]}/preview `;
  videoIFrame = `<iframe width="420" height="315"src="${embedVideoSource}"></iframe>`;
  audioEmbed = `<audio controls autoplay>
  <source src="${combinedLink}" type="audio/mp3">
</audio>`;

  if (!googleDriveLinkPattern.test(inputLink.value)) {
    alert('Invalid Google drive link');
    return;
  }

  downLoadedLink.value = combinedLink;
  embededVideo.value = videoIFrame;
  embededAudio.value = audioEmbed;

  console.log(audioEmbed);
};

btnCopyDownloadedLInk.addEventListener('click', () => {
  copyToClipboard(downLoadedLink);
});

btnCopyVideo.addEventListener('click', () => {
  copyToClipboard(videoIFrame);
});

copyAudio.addEventListener('click', () => {
  copyToClipboard(audioEmbed);
});

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
