const backgroundMusic = document.querySelector('audio');
const toggleMusicButton = document.getElementById('toggleMusic');

toggleMusicButton.addEventListener('click', () => {
    if (!backgroundMusic.paused) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play();
    }
});