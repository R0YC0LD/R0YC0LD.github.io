// Şarkı verilerini temsil eden bir dizi
var songs = [
    {
        title: "My Awesome Song",
        artist: "Müzisyen Adı",
        duration: "3:30",
        cover: "album-cover.jpg",
        file: "my-awesome-song.mp3"
    },
    // Diğer şarkılar buraya eklenebilir
];

var currentSongIndex = 0; // Şu anda çalınan şarkının dizindeki indeksi
var audio = new Audio(); // Yeni bir ses öğesi oluştur

// Müzik çalıcı öğelerini seç
var playButton = document.querySelector('.spotify-controls button:nth-child(2)');
var previousButton = document.querySelector('.spotify-controls button:nth-child(1)');
var nextButton = document.querySelector('.spotify-controls button:nth-child(3)');
var progressBar = document.querySelector('.spotify-progress-bar');

// Şarkıyı başlatan işlev
function playSong() {
    var song = songs[currentSongIndex];
    audio.src = song.file;
    audio.play();
    updateCurrentlyPlaying();
}

// Şu anda çalınan şarkının bilgilerini güncelleyen işlev
function updateCurrentlyPlaying() {
    var song = songs[currentSongIndex];
    document.querySelector('.spotify-track img').src = song.cover;
    document.querySelector('.spotify-track-info p:first-child').textContent = "Şarkı: " + song.title;
    document.querySelector('.spotify-track-info p:last-child').textContent = "Sanatçı: " + song.artist;
}

// Bir sonraki şarkıya geçen işlev
function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Eğer şarkılar bitmişse, ilk şarkıya geri dön
    }
    playSong();
}

// Bir önceki şarkıya geçen işlev
function previousSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Eğer ilk şarkıdaysak, son şarkıya git
    }
    playSong();
}

// Müzik çalıcı kontrol düğmelerine tıklanınca işlevlerin bağlanması
playButton.addEventListener('click', function() {
    if (audio.paused) {
        playSong();
        playButton.textContent = "Durdur";
    } else {
        audio.pause();
        playButton.textContent = "Çal";
    }
});

previousButton.addEventListener('click', previousSong);
nextButton.addEventListener('click', nextSong);

// Ses ilerlemesini güncelleyen işlev
audio.addEventListener('timeupdate', function() {
    var progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + "%";
});

// Şarkı bittiğinde bir sonraki şarkıya geç
audio.addEventListener('ended', nextSong);

// Başlangıçta ilk şarkıyı oynat
playSong();
