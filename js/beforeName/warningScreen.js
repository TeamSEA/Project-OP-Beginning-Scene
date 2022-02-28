window.localStorage;

let date = new Date();
let caption = '';
let gameWarning = true;
let captionLength = 0;
let enter = false;
let preload = false;
let username = 'i';
let realUsername = localStorage.getItem('name');
let resSet = localStorage.getItem('resSet');
let res;
let save101;
let save1010;

let save1;
let save1001;

if (localStorage.getItem('save1') != null) {
  save101 = localStorage.getItem('save1');
  save1010 = localStorage.getItem('save1-1')
  save1 = Number(save101)
  save1001 = Number(save101)
}


// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
  a = 0,
  isBackspacing = false,
  isParagraph = false;

// Typerwrite test. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  date + ":     This Game Contains Inappropriate Scenes.|Some scenes are only for people of 16 years and older.",
  "User/OP/Application/Project SEA_OP/Start_Server/Run: This Includes But Is Not Limited To, Partial Nudity, Slightly Over-Racized Characters, and Blood |By contining you agree that you are 16 or older",
  "      _______ ________ _______ ________ _______ ______ _______ ________ _______ ________ _______ ________ _______ ________ ________ ________ _______ ________ _______ ________ _______ ________ _______ ________ _______ ________ _______ ________ _______ ________ _______ ________ _______ ________ _______ ________ _______ ________ ________ ________ _______  _______ _______ ________ ________ ________ _____________ ________ ________ ________ ________ ________ ________ ________ ________ _______________ ________ _______ ________  ________ ________ ________ _____ ________ _______ ________ ________ ________ _______  _______ _______ ________ ________ ________ _____________ ________ ________ ________ ________ ________ ________ ________ ________ _______________ ________ _______ ________  ________ ________ ________ _____ ________ _______ ________ ________ ________ _______  _______ _______ ________ ________ ________ _____________ ________ ________ ________ ________ ________ ________ ________ ________ _______________ ________ _______ ________  ________ ________ ________ __",
  "        "
];

// Speed (in milliseconds) of typing.
var speedForward = 40, //Typing Speed
  speedWait = 5000, // Wait between typing and backspacing
  speedBetweenLines = 2000, //Wait between first and second lines
  speedBackspace = 15; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
    aString = ar[a],
    eHeader = element.children("h2"), //Header element
    eParagraph = element.children("h3"); //Subheader element

  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {

    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {

      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function() {
          typeWriter(id, ar);
        }, speedBetweenLines);

        // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function() {
          typeWriter(id, ar);
        }, speedForward);
      }

      // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {

      isBackspacing = true;
      setTimeout(function() {
        typeWriter(id, ar);
      }, speedWait);

    }

    // If backspacing is enabled
  } else {

    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {

      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function() {
        typeWriter(id, ar);
      }, speedBackspace);

      // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else {

      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function() {
        typeWriter(id, ar);
      }, 50)
      if (a == 2) {
        document.getElementById("output").style.color = "#39FF14"
        output.style.backgroundColor = "#39FF14"
        speedForward = 5;
        speedBackspace = 5;
        speedWait = 1000;
      }

      if (a == 2 && window.getComputedStyle(gameWarningid).display === "block") {
        gameWarning = false
        //  alert(gameWarning);
        setTimeout(function() {
          trans2.style.display = "block"
        }, 5000)
        setTimeout(function() {
          gameWarningid.style.display = "none";
        }, 14000);
      }
    }
  }
}
