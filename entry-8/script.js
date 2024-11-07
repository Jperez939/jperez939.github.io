document.getElementById("fontsize").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("fontsize").style.fontSize = Math.floor(Math.random() * (22 - 11)+ 11) + "px";;
}

let audio = new Audio ('tasty-chill-lofi-vibe-242105.mp3');

document.getElementById("music").onclick = function() {audio.play("music")};


