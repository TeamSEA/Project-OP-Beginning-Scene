let creditStart = false;

function creditStart1() {
  if (creditStart == true && window.getComputedStyle(trans4).display === "block") {
    setTimeout(function() {
      creditStart = false;
      trans4.style.display = "none";
      transC.style.display = "block"
      setTimeout(creditEnd, 104000)
      document.body.style.backgroundRepeat = "repeat"
      document.body.style.overflow = "hidden";
      document.body.height = "100vh"
      document.body.style.backgroundImage = "none"
      document.body.style.backgroundImage = "radial-gradient(circle at top center, #333 0%, #111 100%)"
      document.body.style.fontFamily = "Arial, sans-serif";
    }, 6 * 1000)
    setTimeout(function() {
      document.getElementById('changeColor').style.animationName = "color";
      document.getElementById('changeColor').style.animationDuration = "5s"
      changeColor.style.animationIterationCount = "2"
      changeColor.style.zIndex = "30"
    }, 0.5 * 1000);

  }
}

setInterval(creditStart1, 100)

function creditEnd() {
  transC.style.display = "none";
  document.body.height = "40px"
  trans4.style.display = "block"
  setTimeout(function() {
    document.getElementById('changeColor').style.animationName = "place";
    document.getElementById('changeColor').style.animationDuration = "place"
    changeColor.style.animationIterationCount = "place"
    changeColor.style.zIndex = "-3"
  }, 0.5 * 1000);
}
