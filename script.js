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

// let textBank = new Array(
//   "assets/texts/text-1.jpg",
//   "assets/texts/text-2.jpg",
//   "assets/texts/text-3.jpg"
// );

let textBank = [
  `Be long, not too long, short, not too short. Too difficult. Come - lets sleep. We can do the rest in the morning. She says no. There is much, so much, left to do. I go to bed, carefree.`,
  `The pillow is a magnetic negative pole. My head is a positive one. I took a Xanax and now I'm stuck. The room lights up, a shock to my narcotic stillness. A message on my phone. Worse yet, an emoji.`,
  `Sometimes the moonlight is like your mothers milk, primary and caressing. All pain eventually ends.`,
  `Joshua, Marike and Mish were sitting in the park. It was the dead of night. Mish had swallowed the world. Marike was trying the Heimlich. Josh expelled gas. Mish laughed, Atlas came flying out. It worked!`,
  `A single column in the night. Not too bright a glow. With my eyes closed I didn't notice. The ghost of an ambition - far overreached but never attained - smiles at me. I snore, sleeping.`,
  `Celestial objects hang on threads. Will I ever know them? The threat of morning has no bite at this hour. I look up, to where I've looked so many times. The same threads pull me. `,
  `They hover around my pillow, to remind me when I return. Some are like puffs of perfume. Some are like the updraft from a sewer. They say, "The Night's sleep is a life that lives forever!" They know I will turn them into books.`,
];

function randomPicIconText() {
  const randomNum = Math.floor(Math.random() * imgBank.length);
  document.getElementById("current-photo").src = imgBank[randomNum];

  const randomNum2 = Math.floor(Math.random() * textBank.length);
  document.querySelector("#current-text").textContent = textBank[randomNum2];
  const randomNum3 = Math.floor(Math.random() * iconBank.length);
  document.querySelector("#btn-icon").src = iconBank[randomNum3];


}

function contactFade() {
 
}

function indexFade() {

}
