createIntervals();
//game
let fred = Fred = "Fred"
let renn = Renn = "Renn"
let Op = OP = op = "OP"

var bgs = ["http://img2.goodfon.su/original/2560x1440/b/ee/school-interior-shkola-pustoy.jpg?d=1",
  "http://www.imgbase.info/images/safe-wallpapers/anime/anime_scenery/51966_anime_scenery_anime_scenery_empty_road.jpg"
]
var conversations = [{
    con: "Hey Wake up, " + realUsername + ".",
    exp: "-1",
    sp: fred,
    bg: 0
  },
  {
    con: "Hey Wake up, " + realUsername + ".",
    exp: "-1",
    sp: fred,
    bg: 0
  },
  {
    con: "C'mon it's already 9:00.",
    exp: "-1",
    sp: Fred,
    bg: 0
  },
  {
    con: "Did you get any sleep on the red-eye flight?",
    exp: "-1",
    sp: fred,
    bg: 0
  },
  {
    con: "I'm going to slap him.",
    exp: "0",
    sp: fred,
    bg: 0
  },
  {
    con: "Fine, " + renn,
    exp: "0",
    sp: fred,
    bg: 0
  },
  {
    con: "Finally your awake.",
    exp: "0",
    sp: fred,
    bg: 0
  },
  {
    con: "You are so lazy",
    exp: "0",
    sp: renn,
    bg: 0
  },
  {
    con: "Sorry I'm just... nervous is what I guess you'd call it",
    exp: "0",
    sp: realUsername,
    bg: 0
  },
  {
    con: "Even though it sounds like Renn was being an ass to you, you know that she's fine",
    exp: "0",
    sp: op,
    bg: 0
  },
  {
    con: "She has been your freind since 2nd grade and you took her under your wing",
    exp: "0",
    sp: Op,
    bg: 0
  },
  {
    con: "She has always been nervous around people she doesn\'t know. \n you always have thought it was because of her weird british accent",
    exp: "0",
    sp: OP,
    bg: 0
  },
  {
    con: "I'm going to go and get some coffee and maybe a scone",
    exp: "0",
    sp: realUsername,
    bg: 0
  },
  {
    con: "Remember, you spent all your money on sleeping pills?",
    exp: "0",
    sp: fred,
    bg: 1
  },
  {
    con: "Oh yeaaaaaaah bollocks",
    exp: "0",
    sp: realUsername,
    bg: 1
  },
  {
    con: "I would give you some money,",
    exp: "0",
    sp: renn,
    bg: 1
  },
  {
    con: "but I spent it all, sorry.",
    exp: "0",
    sp: renn,
    bg: 1
  },
  {
    con: "You don't mind?",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "Hehe, I hope we'll get along, then.",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "..Hey",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "I know we just met.",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "And this may sound crazy, but..",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "Here's my number, and maybe you can call me sometimes?",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "We ended up exchanging phone numbers.",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "I guess I'll be going home this way, then.",
    exp: "0",
    sp: "",
    bg: 1
  },
  {
    con: "We then went our own way at the fork. She kept waving at me until she was gone.",
    exp: "-1",
    sp: "",
    bg: 1
  },
  {
    con: "Maybe this year isn't going so bad as I expected.",
    exp: "-1",
    sp: "",
    bg: 1
  },
  {
    con: "I went home with a spring on my steps, as my future school life begins to unfold before me.",
    exp: "-1",
    sp: "",
    bg: 1
  },
  {
    con: "...",
    exp: "-1",
    sp: "",
    bg: 0
  },
  {
    con: ".....",
    exp: "-1",
    sp: "",
    bg: 0
  },
  {
    con: ".......",
    exp: "-1",
    sp: "",
    bg: 0
  },
  {
    con: "Why are you still here? Go make some pens.",
    exp: "-1",
    sp: "",
    bg: 0
  }
];
var convBox = document.getElementById('conversation');
var spkBox = document.getElementById('speaker');
var backBox = document.getElementById('background');
var speed = 50;
var index = 0;
var convIndex = 0;
var disp;
var nConv = conversations[index]["con"].split('');
spkBox.innerHTML = conversations[index]["sp"];
var img = document.getElementById('char');
if (conversations[index]["exp"] < 0) {
  img.style.opacity = 0;
}

function createIntervals() {
  disp = setInterval(function() {
    convBox.innerHTML += nConv[convIndex];
    convIndex += 1;

    if (convIndex == nConv.length) {
      clearInterval(disp);
    }
  }, speed);
}

function contConv() {
  if (typeof disp != undefined) {
    if (index < conversations.length - 1) {
      clearInterval(disp);
      index += 1;
      convIndex = 0;
      nConv = conversations[index]["con"].split('');
      if (conversations[index]["exp"] < 1) {
        img.style.opacity = 0;
      } else {
        img.style.opacity = 1;
      }
      createIntervals();
      convBox.innerHTML = "";
      spkBox.innerHTML = conversations[index]["sp"];
      backBox.style.background = "url(" + bgs[conversations[index]['bg']] + ") no-repeat";
      backBox.style.backgroundSize = "cover";
    }
  }
}

/*
setInterval(function() {
  if (username == "i") {
    console.log("no")
  }
}, 1000)
*/
function chgSpeed(i) {
  speed = i;
}
