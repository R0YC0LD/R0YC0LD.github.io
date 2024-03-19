document.addEventListener("DOMContentLoaded", function() {
    var audio = new Audio();
    audio.src = "my-awesome-song.mp3"; // Örnek bir şarkı

    var playPauseButton = document.getElementById("play-pause-button");
    var previousButton = document.getElementById("previous-button");
    var nextButton = document.getElementById("next-button");
    var progressBar = document.querySelector(".progress-bar");

    playPauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = "Pause";
        } else {
            audio.pause();
            playPauseButton.textContent = "Play";
        }
    });

    previousButton.addEventListener("click", function() {
        // Önceki şarkıya geçiş işlevi
    });

    nextButton.addEventListener("click", function() {
        // Sonraki şarkıya geçiş işlevi
    });

    audio.addEventListener("timeupdate", function() {
        var progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + "%";
    });
});
