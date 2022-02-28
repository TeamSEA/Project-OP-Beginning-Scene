//name screen

function alertCheck() {
  if (confirm("Are You 100% Sure You Want To Enter? \nJust Checking 1 More Time.")) {
    alert("Okay I'll Continue.")
  } else {
    alert("Okay I'll Just Shut It Off.")
    trans3.style.display = "none";
    trans4.style.display = "none";
  }
}
if (realUsername != null) {
  gameWarningid.style.display = "none"
  trans3.style.display = "block";
}

setTimeout(testUsername(), 3 * 1000);

function testUsername() {
  if (caption.length > 1) {
    enter = true;
    username = caption;
    setTimeout(function() {
      localStorage.setItem('name', username);
      location.reload();
    }, 1 * 5000)
    setTimeout(function() {
      document.getElementById('changeColor').style.animationName = "color";
      document.getElementById('changeColor').style.animationDuration = "6s"
      changeColor.style.animationIterationCount = "1"
      changeColor.style.zIndex = "3"
    }, 0.5 * 1000);
  }
}
setInterval(testUsername, 100)
setInterval(timeout, 100);

//used for the enter key
$('input#user-caption').keyup(function(e) {
  if (e.which === 13) { // 13 equals 'enter' key
    $('input#test-typing').click();
  }
});
//other bullsh!t I don't no
$(document).ready(function() {
  setInterval('cursorAnimation()', 600);
  captionEl = $('#caption');
  $(document).ready(function() {
    setInterval('cursorAnimation()', 600);
    captionEl
    $('#test-typing').click(function() {
      testTypingEffect();
    });
  })
})

function testTypingEffect() {
  caption = $('input#user-caption').val();
  if (caption.toUpperCase() == "FUCK" || caption.toUpperCase() == "SHIT" || caption.toUpperCase() == "XOREN" || caption.toUpperCase() == "BITCH" || caption.toUpperCase() == "DEVON") {
    caption = "no no little biotch";
    type();
  } else if (caption.toUpperCase() == "FUCK MY ASS" || caption.toUpperCase() == "I FUCK TOASTERS" || caption.toUpperCase() == "I FUCK TOASTER") {
    caption = "Okay Sterling";
    type();
  } else {
    type()
  }
}

function type() {
  captionEl.html(caption.substr(0, captionLength++));
  if (captionLength < caption.length + 1) {
    setTimeout('type()', 50);
  } else {
    captionLength = 0;
    caption = '';
  }
}


function cursorAnimation() {
  $('#cursor').animate({
    opacity: 0
  }, 'fast', 'swing').animate({
    opacity: 1
  }, 'fast', 'swing');
}

const firstNames = ['Yasser', 'Derren', 'John', 'Neive', 'Roberta', 'Fariha', 'Woodrow', 'Joan', 'Saskia', 'Loan', 'Moe', "Joe", "Ted", "Johnson", "Neko", "Ilo", "Jack", "Jeff", "Floyd", "Joseph", ""];
const secondNames = ['Huynh', 'Vaughan', 'Thomas', 'Romero', 'Oneal', 'Redman', 'Buck', 'McGowan', 'Barr', 'White', 'Lester', 'Johnson', "Bundy", "Mika", "Chan", "Smite", "Ripper", "Dahmer", "Goodman", "Martin", ""];
const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () =>
  `${firstNames[getRandomNumber(firstNames.length)]} ${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {
  document.getElementById("user-caption").value = getRandomName();
}
document.getElementById('generate')
  .addEventListener('click', setRandomName);
setRandomName();
