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
  "assets/img/hbn22.jpg",
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
  `Zo kut corona Zoom 
  Zo coordinated Zoom
  Zo mediated Zoom
  Zo self medicated Zoom
  Zo dishevelled Zoom
  Zo cluttered kitchen table Zoom
  Zo downward facing dog yoga class Zoom`,
  `The corona virus had for a brief second, comfortable people considering a basic
  income for everyone. That moment has come and gone.`,
  `The corona virus was a crash course in civil discourse that more than half the class
  in the end failed.`,
  `I’d rather that we
  could do any one of these things that
  would normally bore the shit
  out of me`,
  `But right now
  we can’t.
  So we don’t.
  Maybe someday
  we will.`,
  `The birds watch us as we pace in our gardens.
  The empty skies remind us that we are supposed to
  stay in place.`,
  `A time before everyone
  had been aware of their own
  conscious will and
  that some thought
  that this was ok.`,
  `The knowledge of nothing and the sanctity of nowhere.`,
  `This is the world where the damage done has only just begun.
  `,
  `This is the world where one should be grateful for quiet neighbors.
  `,
  `Ink smeared and smudged,
  words illegible
  the dreams vanished from memory
  as dreams so often
  tend to do.`,
  `It is never too late to look
  amongst the loose change
  for the mind you lost`,
  `They are having discussions
  and are making decisions
  that are causing divisions`,
  `The peanut butter is finished
  and the dog is eyeing the rabbits
  and there is a princess fluttering around`,
  `Non-answers to most of my random questions
  `,
  `Shelter from the storm
  is a makeshift tent of
  stolen isolation material
  or a cardboard box`,
  `And as unusual as all this
  might seem to be`,
  `When we heard the news that Tom Hanks
  had contracted the coronavirus`,
];

function randomPicIconText() {
  const randomNum = Math.floor(Math.random() * imgBank.length);
  document.getElementById("current-photo").src = imgBank[randomNum];

  const randomNum2 = Math.floor(Math.random() * textBank.length);
  document.querySelector("#current-text").textContent = textBank[randomNum2];
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
