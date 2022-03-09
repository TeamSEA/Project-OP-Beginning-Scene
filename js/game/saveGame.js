const stopInterval = setInterval(noSave, 1000);

function savingGame() {
  document.getElementById('hideButtons').style.display = "block"
  document.getElementById('content').style.marginTop = '-83vh';
}

function saveGame1() {
  if (localStorage.getItem('save1') != null) {
    overwriteAlert();
  } else {
    localStorage.setItem('save1', index)
    localStorage.setItem('save1-1', convIndex)
    alert('gameSaved');
    hideButtons.style.display = "none"
    content.style.marginTop = "-3vh"
  }
}

function overwriteAlert() {
  if (confirm('Do You Want To Overwrite The Previous Save?') == true) {
    localStorage.setItem('save1', index)
    localStorage.setItem('save1-1', convIndex)
    hideButtons.style.display = "none"
    content.style.marginTop = "-3vh"
    alert("Game Saved");
  }
}

function noSave() {
  if (window.getComputedStyle(hideButtons).display == "block") {
    document.getElementById('content').onclick = function() {
      hideButtons.style.display = "none"
      content.style.marginTop = "-3vh"
    }
  }
}
