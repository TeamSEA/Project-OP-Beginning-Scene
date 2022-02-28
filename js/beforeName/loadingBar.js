var wide = 0;


function move() {
  if (wide == 0) {
    wide = 1;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 150);

    function frame() {
      if (width >= 100 && window.getComputedStyle(trans3).display === "block") {
        clearInterval(id);
        wide = 0;
        trans3.style.display = "none";
        screen5.style.display = "block"
        document.body.style.backgroundColor = "pink";
        changeColor.style.zIndex = "-3"
        document.getElementById('changeColor').style.animationName = "place";
        document.getElementById('changeColor').style.animationDuration = "place"
        changeColor.style.animationIterationCount = "place"
        // alert("hi")
      } else if (width == 99 && window.getComputedStyle(trans3).display === "block") {
        width++
        elem.style.width = "Game Loaded"
        elem.innerHTML = "Game Loaded"
      } else if (width >= 0 && window.getComputedStyle(trans3).display === "block") {
        width++
        elem.style.width = width + "%";
        elem.innerHTML = width + "% loading assets";
        perload = true;
      }
    }

  }
}
move();
