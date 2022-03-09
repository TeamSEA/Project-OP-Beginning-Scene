function resSeven() {
  localStorage.setItem('resSet', 700);
  location.reload();
}

function resNine() {
  localStorage.setItem('resSet', 900);
  location.reload();
}

if (resSet == 900) {
  trans3.style.display = "none"
  trans4.style.display = "block"
  fadeWhite.style.display = "block"
  fadeWhite.style.zIndex = "100"
  fadeWhite.style.animationName = "color"
  fadeWhite.style.animationDuration = "3s"

  setTimeout(function() {
    fadeWhite.style.display = "none"
    fadeWhite.style.zIndex = "-100"
  }, 3 * 1000)
}
