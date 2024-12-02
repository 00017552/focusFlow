// Description: This file contains the functions to play, pause, skip to the next or previous track in the music player.
const musicList = [
    'assets/music/music1.mp3',
    'assets/music/music2.m4a',
    'assets/music/music3.m4a',
    'assets/music/music4.mp3',
    'assets/music/music5.m4a',
];

let currentTrackIndex = 0;

const audioPlayer = document.getElementById('audioPlayer');

function play() {
    audioPlayer.play();
    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'block';
}

function pause() {
    audioPlayer.pause();
    document.getElementById('play').style.display = 'block';
    document.getElementById('pause').style.display = 'none';
}

function prev() {
    currentTrackIndex = (currentTrackIndex - 1 + musicList.length) % musicList.length;
    updateTrack();
}

function next() {
    currentTrackIndex = (currentTrackIndex + 1) % musicList.length;
    updateTrack();
}

function updateTrack() {
    audioPlayer.src = musicList[currentTrackIndex];
    audioPlayer.load();
    audioPlayer.play();
    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'block';
}
// updateTrack();