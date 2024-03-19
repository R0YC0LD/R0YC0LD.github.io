// Spotify benzeri bir müzik oynatıcı uygulaması için JavaScript kodları

// Örnek müzik verisi
const songs = [
    {
        title: "Şarkı 1",
        artist: "Sanatçı 1",
        cover: "song1.jpg",
        audio: "song1.mp3",
        duration: "3:45"
    },
    {
        title: "Şarkı 2",
        artist: "Sanatçı 2",
        cover: "song2.jpg",
        audio: "song2.mp3",
        duration: "4:10"
    },
    {
        title: "Şarkı 3",
        artist: "Sanatçı 3",
        cover: "song3.jpg",
        audio: "song3.mp3",
        duration: "3:30"
    }
];

let currentSongIndex = 0;
let isPlaying = false;
let progressInterval;

const audio = new Audio();
audio.src = songs[currentSongIndex].audio;

// Müzik çaları güncelle
function updatePlayer() {
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    const albumCover = document.getElementById("album-cover");
    const progressBar = document.getElementById("progress-bar");
    const currentTime = document.getElementById("current-time");
    const totalTime = document.getElementById("total-time");

    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover;
    totalTime.textContent = songs[currentSongIndex].duration;

    if (isPlaying) {
        audio.play();
        progressInterval = setInterval(updateProgress, 1000);
    } else {
        audio.pause();
        clearInterval(progressInterval);
    }
}

// Şarkı ilerlemesi ve zamanı güncelle
function updateProgress() {
    const progressBar = document.getElementById("progress-bar");
    const currentTime = document.getElementById("current-time");
    const duration = audio.duration;
    const currentTimeValue = audio.currentTime;

    progressBar.value = (currentTimeValue / duration) * 100;
    currentTime.textContent = formatTime(currentTimeValue);
}

// Süreyi biçimlendir
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Şarkıyı çal
function playSong() {
    isPlaying = true;
    updatePlayer();
}

// Şarkıyı duraklat
function pauseSong() {
    isPlaying = false;
    updatePlayer();
}

// Önceki şarkıya geç
function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updatePlayer();
}

// Sonraki şarkıya geç
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updatePlayer();
}

// Başlangıçta müzik çaları güncelle
updatePlayer();

// Olay dinleyicileri ekle
document.getElementById("play-pause-button").addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});

document.getElementById("previous-button").addEventListener("click", previousSong);

document.getElementById("next-button").addEventListener("click", nextSong);
