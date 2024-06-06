//generate two random numbers
let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;

//choosing which dice is visible based on random number 1
if (random1 === 1) {
  document.querySelector(".p1img6").style.visibility = 'visible';
}
else if (random1 === 2) {
  document.querySelector(".p1img2").style.visibility = 'visible';
}
else if (random1 === 3) {
  document.querySelector(".p1img3").style.visibility = 'visible';
}
else if (random1 === 4) {
  document.querySelector(".p1img4").style.visibility = 'visible';
}
else if (random1 === 5) {
  document.querySelector(".p1img5").style.visibility = 'visible';
}
else {
  document.querySelector(".p1img1").style.visibility = 'visible';
}

//choosing which dice is visible based on random number 2
if (random2 === 1) {
  document.querySelector(".p2img6").style.visibility = 'visible';
}
else if (random2 === 2) {
  document.querySelector(".p2img2").style.visibility = 'visible';
}
else if (random2 === 3) {
  document.querySelector(".p2img3").style.visibility = 'visible';
}
else if (random2 === 4) {
  document.querySelector(".p2img4").style.visibility = 'visible';
}
else if (random2 === 5) {
  document.querySelector(".p2img5").style.visibility = 'visible';
}
else {
  document.querySelector(".p2img1").style.visibility = 'visible';
}

//choosing the winner message based on which random number is larger
if (random1 > random2) {
  document.querySelector("h1").style.visibility = 'hidden';
  document.querySelector(".p1wins").style.visibility = 'visible';
}
else if (random2 > random1) {
  document.querySelector("h1").style.visibility = 'hidden';
  document.querySelector(".p2wins").style.visibility = 'visible';
}
else {
  document.querySelector("h1").style.visibility = 'hidden';
  document.querySelector(".draw").style.visibility = 'visible';
}

/* video solution

var random1 = Math.floor(Math.random() * 6) + 1;

var random2 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "dice" + random1 + ".png";

var randomDice2 = "dice" + random2 + ".png";

var randomImg1 = "images/" + randomDice1;

var randomImg2 = "images/" + randomDice2;

var p1img1 = document.querySelectorAll("img")[0];

var p2img1 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomImg1);

img2.setAttribute("src", randomImg2);

if (random1 > random2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (random2 > random1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
*/
