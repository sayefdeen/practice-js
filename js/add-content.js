"use strict";
sayHello();

userOrder();

function sayHello() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  if (hourNow > 18) {
    greeting = "Good evening, Class!";
  } else if (hourNow > 12) {
    greeting = "Good afternoon, Class!";
  } else if (hourNow >= 0) {
    greeting = "Good morning!";
  } else {
    greeting = "Something went wrong";
  }
  // console.log(hourNow);
  document.write("<h3>" + greeting + `</h3>`);
}

function userOrder() {
  var userChoice = prompt("Please select House Or Hotle");
  while (userChoice !== "house" && userChoice !== "hotle") {
    userChoice = prompt("please select house of hotle");
  }
  var orderNumber = prompt("How many orders tou want?");
  for (var i = 0; i < orderNumber; i++) {
    if (userChoice === `house`) {
      document.write('<p><img id="block" src="images/house.png"><p>');
    } else if (userChoice === "hotle") {
      document.write('<p><img src="images/hotel.png"></p>');
    }
  }
}
