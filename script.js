// let numbers = [];
// for (let i = 0; i < 30; i++) {
//     numbers.push(Math.ceil(Math.random() * 30));
// }
//
// function rScript() {
//     let newImg = document.getElementsByClassName('rnd');
//     let imgPool = document.getElementByClassName('photo-container');
//     for (let i = 0; i < newImg.children.length; i++) {
//         imgPool.push(Math.ceil(Math.random() * newImg.children.length))
//     }
//
// }

window.onload = choosePic;

let imgBank = new Array("assets/img/hbn1.jpg", "assets/img/hbn2.jpg", "assets/img/hbn3.jpg", "assets/img/hbn4.jpg", "assets/img/hbn5.jpg", "assets/img/hbn6.jpg", "assets/img/hbn7.jpg", "assets/img/hbn8.jpg", "assets/img/hbn9.jpg", "assets/img/hbn10.jpg", "assets/img/hbn11.jpg", "assets/img/hbn12.jpg", "assets/img/hbn13.jpg", "assets/img/hbn14.jpg", "assets/img/hbn15.jpg", "assets/img/hbn16.jpg", "assets/img/hbn17.jpg", "assets/img/hbn18.jpg", "assets/img/hbn19.jpg", "assets/img/hbn20.jpg", "assets/img/hbn21.jpg", "assets/img/hbn22.jpg", "assets/img/hbn23.jpg", "assets/img/hbn24.jpg", "assets/img/hbn25.jpg", "assets/img/hbn26.jpg", "assets/img/hbn27.jpg", "assets/img/hbn28.jpg", "assets/img/hbn29.jpg", "assets/img/hbn30.jpg", );

function choosePic() {
    var randomNum = Math.floor(Math.random() * imgBank.length);
    document.getElementById("current-photo").src = imgBank[randomNum];
}