$(document).ready(function () {
  indexFade();
  randomPicIconText();
});

let imgBank = [
  "assets/img/hbn1.jpg",
  "assets/img/hbn2.jpg",
  "assets/img/hbn3.jpg",
  "assets/img/hbn4.jpg",
  "assets/img/hbn5.jpg",
  "assets/img/hbn6.jpg",
  "assets/img/hbn7.jpg",
  "assets/img/hbn8.jpg",
  "assets/img/hbn9.jpg",
  "assets/img/hbn10.jpg",
  "assets/img/hbn11.jpg",
  "assets/img/hbn12.jpg",
  "assets/img/hbn13.jpg",
  "assets/img/hbn14.jpg",
  "assets/img/hbn15.jpg",
  "assets/img/hbn16.jpg",
  "assets/img/hbn17.jpg",
  "assets/img/hbn18.jpg",
  "assets/img/hbn19.jpg",
  "assets/img/hbn20.jpg",
  "assets/img/hbn21.jpg",
  // "assets/img/hbn22.jpg",
  "assets/img/hbn23.jpg",
  "assets/img/hbn24.jpg",
  "assets/img/hbn25.jpg",
  "assets/img/hbn26.jpg",
  "assets/img/hbn27.jpg",
  "assets/img/hbn28.jpg",
  "assets/img/hbn29.jpg",
  "assets/img/hbn30.jpg",
];

let iconBank = [
  "assets/btn-img/flower1.png",
  "assets/btn-img/flower2.png",
  "assets/btn-img/flower3.png",
  "assets/btn-img/flower4.png",
  "assets/btn-img/flower5.png",
  "assets/btn-img/flower6.png",
  "assets/btn-img/flower7.png",
];

let textBank = [
  // `Zo kut corona Zoom <br>
  // Zo coordinated Zoom <br>
  // Zo mediated Zoom <br>
  // Zo self medicated Zoom <br>
  // Zo dishevelled Zoom <br>
  // Zo cluttered kitchen table Zoom <br>
  // Zo downward facing dog yoga class Zoom`,
  `The corona virus had for a brief second, comfortable people considering a basic
  income for everyone. That moment has come and gone.`,
  `The corona virus was a crash course in civil discourse that more than half the class
  in the end failed.`,
  `I’d rather that we <br>
  could do any one of these things that <br>
  would normally bore the shit <br>
  out of me`,
  `...but right now <br>
  we can’t. <br>
  So we don’t. <br>
  Maybe someday <br>
  we will.`,
  `The birds watch us as we pace in our gardens. <br>
  The empty skies remind us that we are supposed to
  stay in place.`,
  `...a time before everyone <br>
  had been aware of their own <br>
  conscious will and <br>
  that some thought <br>
  that this was ok.`,
  `The knowledge of nothing and the sanctity of nowhere...`,
  `This is the world where the damage done has only just begun.
  `,
  `This is the world where one should be grateful for quiet neighbors.
  `,
  `Ink smeared and smudged, <br>
  words illegible <br>
  the dreams vanished from memory <br>
  as dreams so often <br>
  tend to do.`,
  `It is never too late to look <br>
  amongst the loose change <br>
  for the mind you lost.`,
  `They are having discussions <br>
  and are making decisions <br>
  that are causing divisions.`,
  `The peanut butter is finished <br>
  and the dog is eyeing the rabbits <br>
  and there is a princess fluttering around.`,
  `...non-answers to most of my random questions...
  `,
  `Shelter from the storm <br>
  is a makeshift tent of <br>
  stolen isolation material <br>
  or a cardboard box.`,
  `...and as unusual as all this <br>
  might seem to be.`,
  // `...when we heard the news that Tom Hanks <br>
  // had contracted the coronavirus...`,
];

function randomPicIconText() {
  const randomNum = Math.floor(Math.random() * imgBank.length);
  document.getElementById("current-photo").src = imgBank[randomNum];

  const randomNum2 = Math.floor(Math.random() * textBank.length);
  document.querySelector("#current-text").innerHTML = textBank[randomNum2];
  const randomNum3 = Math.floor(Math.random() * iconBank.length);
  document.querySelector("#btn-icon").src = iconBank[randomNum3];

  $(".text-container, #rnd-btn").hide().fadeIn(400);

  gsap.fromTo(
    ".photo-container",
    { opacity: 0 },
    { duration: 0.4, opacity: 1 }
  );
}

function mediumFade() {
  $("body").fadeIn(800);
}

function indexFade() {
  $(".index-body").fadeIn(3000);
}

function langChange() {
  let langSelect = document.querySelector(".lang-btn");
  let dutchSection = document.querySelector(".contact-dutch");
  let englishSection = document.querySelector(".contact-english");

  console.log("clicked!");

  if (dutchSection.style.display === "block") {
    dutchSection.style.display = "none";
    englishSection.style.display = "block";
    langSelect.textContent = "NL";
  } else {
    englishSection.style.display = "none";
    dutchSection.style.display = "block";
    langSelect.textContent = "Eng";
  }
}
