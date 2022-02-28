function backmeet() {
  setTimeout(function() {
    meett.style.display = "none"
    trans4.style.display = "block"
    document.body.style.width = "auto"
    document.body.style.height = "auto"
    document.body.style.minHeight = "0"
    document.body.style.textShadow = "none"
  }, 2 * 1000)
  setTimeout(function() {
    document.getElementById('changeColor').style.animationName = "color";
    document.getElementById('changeColor').style.animationDuration = "2s"
    changeColor.style.animationIterationCount = "2"
    changeColor.style.zIndex = "11"
  }, 0.5 * 1000);
  setTimeout(function() {
    document.getElementById('changeColor').style.animationName = "place";
    document.getElementById('changeColor').style.animationDuration = "place"
    changeColor.style.animationIterationCount = "place"
    changeColor.style.zIndex = "-3"
  }, 5 * 1000);
}

function meetStart() {
  setTimeout(function() {
    trans4.style.display = "none";
    meett.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.background = "pink"
    document.body.style.width = "100%"
    document.body.style.backgroundPosition = "top cener"
    document.body.style.height = "100%"
    document.body.style.minHeight = "1000px"
    document.body.style.fontFamily = "'quicksandlight', Helvetica, Arial;"
    document.body.style.color = "#FFF"
    document.body.style.textShadow = "-1px -1px 4px rgba(0, 0, 0, 0.35)"
    document.body.style.textShadow.filter = "dropshadow(color=#000000, offx=1, offy=1)"
  }, 2.5 * 1000);
  setTimeout(function() {
    document.getElementById('changeColor').style.animationName = "color";
    document.getElementById('changeColor').style.animationDuration = "2s"
    changeColor.style.animationIterationCount = "2"
    changeColor.style.zIndex = "11"
  }, 0.5 * 1000);
  setTimeout(function() {
    document.getElementById('changeColor').style.animationName = "place";
    document.getElementById('changeColor').style.animationDuration = "place"
    changeColor.style.animationIterationCount = "place"
    changeColor.style.zIndex = "-3"
  }, 5 * 1000)
}
