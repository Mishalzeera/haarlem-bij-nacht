window.onload = randomPicIconText;

let imgBank = new Array(
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
  "assets/img/hbn30.jpg"
);

let iconBank = new Array(
  "assets/btn-img/flower1.png",
  "assets/btn-img/flower2.png",
  "assets/btn-img/flower3.png",
  "assets/btn-img/flower4.png",
  "assets/btn-img/flower5.png",
  "assets/btn-img/flower6.png",
  "assets/btn-img/flower7.png"
);

let textBank = new Array(
  "assets/texts/text-1.jpg",
  "assets/texts/text-2.jpg",
  "assets/texts/text-3.jpg"
);

function randomPicIconText() {
  const randomNum = Math.floor(Math.random() * imgBank.length);
  document.getElementById("current-photo").src = imgBank[randomNum];

  const randomNum2 = Math.floor(Math.random() * textBank.length);
  document.querySelector("#current-text").src = textBank[randomNum2];
  const randomNum3 = Math.floor(Math.random() * iconBank.length);
  document.querySelector("#btn-icon").src = iconBank[randomNum3];
}
