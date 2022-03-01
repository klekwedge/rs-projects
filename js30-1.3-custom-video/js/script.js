/*-------------------------------------------------------------*/
/*-----Variable declaration------------------------------------*/
/*-------------------------------------------------------------*/

const player = document.querySelector(".player");
const video = document.querySelector(".viewer");

const mainButton = document.querySelector(".main__button");

const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");

const ranges = document.querySelectorAll(".player__slider");

const rangeVolume = document.querySelector(".volume__slider");

const volumeIcon = document.querySelector(".player__volume-icon");

/*-------------------------------------------------------------*/
/*-----Functions-----------------------------------------------*/
/*-------------------------------------------------------------*/

function togglePlay() {
  if (video.paused) {
    video.play();
    mainButton.style.display = "none";
  } else {
    video.pause();
    mainButton.style.display = "block";
  }
}

function updateButton() {
  const icon = this.paused ? "play_arrow" : "pause";
  toggle.textContent = icon;
}

function skip(skipButton) {
  video.currentTime += parseFloat(skipButton.dataset.skip);
}

function handleRangeUpdate(range) {
  video[range.name] = range.value;
  if (range.name === "volume") {
    if (range.value >= 50) {
      volumeIcon.textContent = "volume_up";
    } else if (range.value < 50 && range.value > 0) {
      volumeIcon.textContent = "volume_down";
    } else {
      volumeIcon.textContent = "volume_off";
    }
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/*-------------------------------------------------------------*/
/*-----Event listeners-----------------------------------------*/
/*-------------------------------------------------------------*/

video.onclick = function () {
  togglePlay();
};
mainButton.onclick = function () {
  togglePlay();
};

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.onclick = function () {
  togglePlay();
};

volumeIcon.onclick = function () {
  if (volumeIcon.textContent !== "volume_off") {
    volumeIcon.textContent = "volume_off";
    video.volume = 0;
  } else if (rangeVolume.value >= 50) {
    volumeIcon.textContent = "volume_up";
    video.volume = rangeVolume.value;
  } else if (rangeVolume.value < 50 && rangeVolume.value > 0) {
    volumeIcon.textContent = "volume_down";
    video.volume = rangeVolume.value;
  }
};

for (let skipButton of skipButtons) {
  skipButton.onclick = function () {
    skip(skipButton);
  };
}

for (let range of ranges) {
  range.oninput = function () 
  {
    handleRangeUpdate(range);
  };
}

progress.addEventListener("click", scrub);

rangeVolume.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value*100}%, #C8C8C8 ${value*100}%, #C8C8C8 0%)`;
});

