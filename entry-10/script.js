let audio = new Audio ('orange-lofi-song.mp3');

document.getElementById("music").onclick = function() {audio.play("music")};

let timer;
let seconds = 0;

document.getElementById('start').onclick = function() {
    clearInterval(timer);
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
};

document.getElementById('stop').onclick = function() {
    clearInterval(timer);
};

document.getElementById('reset').onclick = function() {
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
};

function updateDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('display').innerText = `${hours}:${minutes}:${secs}`;
}

let rangeInput = document.getElementById("range-input");
let fontSize = document.getElementById("size");

function changeSize() {
    fontSize.style.fontSize = rangeInput.value + "px";
  }