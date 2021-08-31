var RandomNumber1 = Math.floor(Math.random()*6)+1;

var randomimage1 = "images/dice" +RandomNumber1+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimage1);


// var RandomNumber2 = Math.floor(Math.rondom()*6)+1;
// var randomimage2="images/dice" +RandomNumber2+".png";
// var img2=document.querySelectorAll("img")[1];
// img2.setAttribute("src",randomimage2);


var RandomNumber2 = Math.floor(Math.random()*6)+1;

var randomimage2="images/dice" +RandomNumber2+".png";
// var randomimage2 = "images/dice" +RandomNumber2+".png";

var img2=document.querySelectorAll("img")[1];
// var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimage2);

// img2.setAttribute("src",randomimage2);

if (RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="🎲 Player 1 won";
}
else if (RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML="🎲 Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="🎲 Its a DRAW!!!🎲";
}