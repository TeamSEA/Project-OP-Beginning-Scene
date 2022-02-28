//start game
let startGame = false;

function gameStart() {
  setTimeout(function() {

    document.getElementById('changeColor').style.animationName = "color";
    document.getElementById('changeColor').style.animationDuration = "2.5s"
    changeColor.style.animationIterationCount = "2"
    changeColor.style.zIndex = "30"
  }, 0.5 * 1000);
  setTimeout(function() {
    trans4.style.display = "none"
    first.style.display = "block"
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "White";
    document.getElementById('changeColor').style.animationName = "place";
    document.getElementById('changeColor').style.animationDuration = "place"
    changeColor.style.animationIterationCount = "place"
    changeColor.style.zIndex = "-3"
  }, 2.5 * 1000);
}
