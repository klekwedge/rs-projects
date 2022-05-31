const video = document.querySelector('.viewer');

const mainButton = document.querySelector('.main__button');

const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');

const ranges = document.querySelectorAll('.player__slider');
const rangeVolume = document.querySelector('.volume__slider');

const volumeIcon = document.querySelector('.player__volume-icon');

function togglePlay() {
  if (video.paused) {
    video.play();
    mainButton.style.display = 'none';
  } else {
    video.pause();
    mainButton.style.display = 'block';
  }
}

video.addEventListener('click', togglePlay);
mainButton.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

function updateButton() {
  const icon = this.paused ? 'play_arrow' : 'pause';
  toggle.textContent = icon;
}

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

function skip(skipButton) {
  video.currentTime += parseFloat(skipButton.dataset.skip);
}

skipButtons.forEach((skipButton) => {
  skipButton.addEventListener('click', () => {
    skip(skipButton);
  });
});

function handleRangeUpdate(range) {
  video[range.name] = range.value;
  if (range.name === 'volume') {
    if (range.value >= 50) {
      volumeIcon.textContent = 'volume_up';
    } else if (range.value < 50 && range.value > 0) {
      volumeIcon.textContent = 'volume_down';
    } else {
      volumeIcon.textContent = 'volume_off';
    }
  }
}

ranges.forEach((range) => {
  range.addEventListener('input', () => {
    handleRangeUpdate(range);
  });
});

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener('timeupdate', handleProgress);

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

progress.addEventListener('click', scrub);

volumeIcon.addEventListener('timeupdate', () => {
  if (volumeIcon.textContent !== 'volume_off') {
    volumeIcon.textContent = 'volume_off';
    video.volume = 0;
  } else if (rangeVolume.value >= 50) {
    volumeIcon.textContent = 'volume_up';
    video.volume = rangeVolume.value;
  } else if (rangeVolume.value < 50 && rangeVolume.value > 0) {
    volumeIcon.textContent = 'volume_down';
    video.volume = rangeVolume.value;
  }
});

rangeVolume.addEventListener('input', function () {
  const { value } = this;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value * 100}%, #C8C8C8 ${
    value * 100
  }%, #C8C8C8 0%)`;
});
