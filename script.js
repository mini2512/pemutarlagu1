const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');
const playButtons = document.querySelectorAll('.play-button');
const downloadLinks = document.querySelectorAll('.download-link');
const songTitles = document.querySelectorAll('.song-title');

// Memutar lagu berdasarkan tombol "Play" yang ditekan
playButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const songSrc = audioPlayer.querySelector('source');
        const audioSrc = `lagu${index + 1}.mp3`; // Ganti ini sesuai dengan nama file lagu Anda

        songSrc.src = audioSrc;
        audioPlayer.load();
        audioPlayer.play();
    });
});

// Menampilkan tautan unduhan saat tombol "Download" ditekan
downloadLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.stopPropagation(); // Menghentikan pemutaran lagu saat tautan unduhan ditekan
    });
});

// Memperbarui judul lagu yang diputar pada panel audio
audioPlayer.addEventListener('play', () => {
    const audioSrc = audioPlayer.querySelector('source').src;
    const songIndex = Array.from(songTitles).findIndex((title) => title.textContent === audioSrc);

    if (songIndex !== -1) {
        audioPlayer.addEventListener('ended', () => {
            songTitles[songIndex].textContent = `Lagu ${songIndex + 1}`;
        });
        songTitles[songIndex].textContent = `Now Playing...`;
    }
});
