/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  let suits = ["&hearts;", "&spades;", "&clubs;", "&diams;"];

  let getRandom = array => {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
  };
  let suitsRandom = getRandom(suits);
  document.getElementById("number").innerHTML = getRandom(values);
  document.getElementById("header").innerHTML = suitsRandom;
  document.getElementById("footer").innerHTML = suitsRandom;

  let headerSuit = document.getElementById("header");
  let footerSuit = document.getElementById("footer");

  if (suitsRandom == "&hearts;" || suitsRandom == "&diams;") {
    headerSuit.style.color = "red";
    footerSuit.style.color = "red";
  }
};
