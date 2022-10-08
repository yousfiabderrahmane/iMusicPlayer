const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// song titles
const songs = ["eminem", "lartiste", "smallX"];
// keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// update song details

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}
// Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}
// Pause song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  audio.pause();
}
// Next song
function nextSong() {
  songIndex++;
  if (songIndex > 2) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}
// Prev song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Event listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

setTimeout(() => {
  document.querySelector("#music-container").classList.add("opa");
}, 600);
setTimeout(() => {
  document.querySelector("h1").classList.add("opa");
}, 200);

// Change son
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
