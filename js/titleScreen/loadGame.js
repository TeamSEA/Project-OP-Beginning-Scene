if (localStorage.getItem('save1') != null) {
  document.getElementById("loadGameFile1").innerHTML = "Load Game"
  document.getElementById("loadGameFile1").onclick = function() {
    index = save1
    convIndex = save1001
    $("#continue").click();
  }
}
