const playPreviousSong = document.querySelector('.control__previous');
const play = document.querySelector('.control__play');
const playNextSong = document.querySelector('.control__next');

const titleAudio = document.querySelector('.audio__title');
const artistAudio = document.querySelector('.audio__artist');

const currentVolume = document.querySelector('.volume__change');
const showVolume = document.querySelector('.volume__show');
const muteVolume = document.querySelector('.volume__mute');

const progressBar = document.querySelector('.progress__bar');
const showTotalProgress = document.querySelector('.progress__total');
const showCurrentProgress = document.querySelector('.progress__current');

const trackСover = document.querySelector('.audio__image');
const autoPlay = document.querySelector('.audio__auto');

const volumeIcon = document.querySelector('.audio__volume i');

let autoPlayCounter = 0;
let currentTrackIndex = 0;
let playingSong = false;

const track = document.createElement('audio');
const songsList = [
  {
    name: 'first song',
    path: 'assets/audio/track-1.mp3',
    cover: 'assets/img/track-cover-1.jpg',
    artist: 'Singer #1',
  },
  {
    name: 'second song',
    path: 'assets/audio/track-2.mp3',
    cover: 'assets/img/track-cover-2.jpg',
    artist: 'Singer #2',
  },
  {
    name: 'third song',
    path: 'assets/audio/track-3.mp3',
    cover: 'assets/img/track-cover-3.jpg',
    artist: 'Singer #3',
  },
  {
    name: 'fourth song',
    path: 'assets/audio/track-4.mp3',
    cover: 'assets/img/track-cover-4.jpg',
    artist: 'Singer #4',
  },
  {
    name: 'fifth song',
    path: 'assets/audio/track-5.mp3',
    cover: 'assets/img/track-cover-5.jpg',
    artist: 'Singer #5',
  },
];

function resetProgressBar() {
  progressBar.value = 0;
}

function loadTrack(trackIndex) {
  resetProgressBar();
  track.src = songsList[trackIndex].path;
  trackСover.src = songsList[trackIndex].cover;
  titleAudio.innerHTML = songsList[trackIndex].name;
  artistAudio.innerHTML = songsList[trackIndex].artist;
  track.load();
}

loadTrack(currentTrackIndex);

function playsong() {
  track.play();
  playingSong = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';
}

function pausesong() {
  track.pause();
  playingSong = false;
  play.innerHTML = '<i class="fa fa-play"></i>';
}

function justplay() {
  if (playingSong === false) {
    playsong();
  } else {
    pausesong();
  }
}

play.addEventListener('click', () => {
  justplay();
});

function nextSong() {
  if (currentTrackIndex < songsList.length - 1) {
    currentTrackIndex += 1;
    loadTrack(currentTrackIndex);
    playsong();
  } else {
    currentTrackIndex = 0;
    loadTrack(currentTrackIndex);
    playsong();
  }
}
playNextSong.addEventListener('click', nextSong);

function previousSong() {
  if (currentTrackIndex > 0) {
    currentTrackIndex -= 1;
    loadTrack(currentTrackIndex);
    playsong();
  } else {
    currentTrackIndex = songsList.length - 1;
    loadTrack(currentTrackIndex);
    playsong();
  }
}
playPreviousSong.addEventListener('click', previousSong);

function autoplaySwitch() {
  if (autoPlayCounter === 1) {
    autoPlayCounter = 0;
    autoPlay.style.background = 'rgba(255, 255, 255, 0.2)';
  } else {
    autoPlayCounter = 1;
    autoPlay.style.background = 'rgba(2, 176, 213, 0.6)';
  }
}

autoPlay.addEventListener('click', autoplaySwitch);

function changeStyleVolume() {
  if (currentVolume.value === '0') {
    track.volume = 0;
    showVolume.textContent = '0';
    showVolume.style.color = 'rgb(254,64,64,0.8)';
    volumeIcon.classList.add('fa-volume-xmark');
    volumeIcon.classList.remove('fa-volume-high');
    volumeIcon.classList.remove('fa-volume-low');
  } else {
    track.volume = currentVolume.value / 100;
    showVolume.textContent = `${currentVolume.value}`;
    showVolume.style.color = 'white';
    if (currentVolume.value > '0' && currentVolume.value < 50) {
      volumeIcon.classList.add('fa-volume-low');
      volumeIcon.classList.remove('fa-volume-xmark');
      volumeIcon.classList.remove('fa-volume-high');
    } else {
      volumeIcon.classList.add('fa-volume-high');
      volumeIcon.classList.remove('fa-volume-xmark');
      volumeIcon.classList.remove('fa-volume-low');
    }
  }
}

// Volume
function changeVolume() {
  showVolume.innerHTML = currentVolume.value;
  track.volume = currentVolume.value / 100;
  changeStyleVolume();
}

currentVolume.addEventListener('input', changeVolume);

function muteSound() {
  if (currentVolume.value !== '0') {
    currentVolume.classList.toggle('mute');
    if (currentVolume.classList.contains('mute')) {
      track.volume = 0;
      showVolume.textContent = '0';
      showVolume.style.color = 'rgb(254,64,64,0.8)';
      volumeIcon.classList.remove('fa-volume-high');
      volumeIcon.classList.add('fa-volume-xmark');
    } else {
      track.volume = currentVolume.value / 100;
      showVolume.textContent = `${currentVolume.value}`;
      showVolume.style.color = 'white';
      volumeIcon.classList.add('fa-volume-high');
      volumeIcon.classList.remove('fa-volume-xmark');
    }
  }
}

muteVolume.addEventListener('click', muteSound);

showVolume.addEventListener('change', () => {
  if (currentVolume.value === 0) {
    muteSound();
  }
});

// ProgressBar
function changeProgressBar() {
  const progressBarPosition = track.duration * (progressBar.value / 100);
  track.currentTime = progressBarPosition;
}

progressBar.addEventListener('input', changeProgressBar);

function updateProgressBar() {
  let position = 0;
  if (!Number.isNaN(track.duration)) {
    position = (track.currentTime / track.duration) * 100;
    progressBar.value = position;
    progressBar.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${progressBar.value}%, #fff ${progressBar.value}%, white 100%)`;

    const totalMin = Math.floor(track.duration / 60);
    let totaltSec = Math.floor(track.duration % 60);
    if (totaltSec < 10) {
      totaltSec = `0${totaltSec}`;
    }
    showTotalProgress.textContent = `${totalMin}:${totaltSec}`;

    const currentMin = Math.floor(track.currentTime / 60);
    let currentSec = Math.floor(track.currentTime % 60);
    if (currentSec < 10) {
      currentSec = `0${currentSec}`;
    }
    showCurrentProgress.textContent = `${currentMin}:${currentSec}`;
  }

  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (currentTrackIndex !== songsList.length - 1) {
      currentTrackIndex += 1;
      loadTrack(currentTrackIndex);
      playsong();
    } else if (currentTrackIndex === songsList.length - 1 && autoPlayCounter === 1) {
      currentTrackIndex = 0;
      loadTrack(currentTrackIndex);
      playsong();
    }
  }
}

track.addEventListener('timeupdate', updateProgressBar);

// Current Volume stylization
currentVolume.addEventListener('input', function () {
  const { value } = this;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`;
});
