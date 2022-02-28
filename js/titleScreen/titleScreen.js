function transition4() {
  if (window.getComputedStyle(trans4).display === "block") {
    document.body.style.backgroundImage = "url('https://images.fineartamerica.com/images-medium-large-5/surreal-pink-tree-landscape-south-carolina-pink-nature-landscape-kathy-fornal.jpg')";
    document.body.style.backgroundRepeat = "repeat"
  }
}
setInterval(transition4, 150);
