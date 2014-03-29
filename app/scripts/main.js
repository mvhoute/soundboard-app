function play(){
    var audio = document.getElementById("audio");
    audio.play();
}

function playSound(el,soundfile) {
    if (el.mp3) {
        if(el.mp3.paused) el.mp3.play();
        else el.mp3.pause();
    } else {
        el.mp3 = new Audio(soundfile);
        el.mp3.play();
    }
}
