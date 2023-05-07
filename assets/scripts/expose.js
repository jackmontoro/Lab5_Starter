// expose.js
// Author: Jack Montoro SP2023

window.addEventListener('DOMContentLoaded', init);

var hornChoice;
var hornImage;
var sound;
var buttonPress;
var confetti;
var volImage;
var volControl;




function init() {
  // horn selection variables
  hornChoice = document.getElementById("horn-select");
  hornImage = document.querySelector("img[alt='No image selected']");
  sound = document.querySelector("audio");

  // volume control variables
  volImage = document.querySelector("img[alt='Volume level 2']");
  volControl = document.querySelector("range[id='volume']");

  // button-related variables
  buttonPress = document.querySelector('button');
  confetti = new JSConfetti();

  // Listener to play sound and add effects when button clicked
  buttonPress.addEventListener('click', function() {
    sound.play();
    if (hornChoice.value == 'party-horn') {
      confetti.addConfetti();
    }
  });

  // Listener to change image and sound when new sound selected
  hornChoice.addEventListener('change', (event) => {
    switch(event.target.value) {
      case 'party-horn':
        hornImage.src="assets/images/party-horn.svg";
        sound.src="assets/audio/party-horn.mp3";
      case 'car-horn':
        hornImage.src = "assets/images/car-horn.svg";
        sound.src="assets/audio/car-horn.mp3";
      case 'air-horn':
        hornImage.src = "assets/images/air-horn.svg";
        sound.src="assets/audio/air-horn.mp3";
    }
  });

  // Listener to change volume and volume picture
  volControl.addEventListener("change", (event) => {
    sound.volume = event.target.value / 100;
    if (event.target.value == 0){
      volImage.src="assets/icons/volume-level-0.svg";
    }
    else if (event.target.value < 33) {
      volImage.src="assets/icons/volume-level-1.svg";
    }
    else if (event.target.value < 67) {
      volImage.src="assets/icons/volume-level-2.svg";
    }
    else {
      volImage.src="assets/icons/volume-level-3.svg";
    }
  })




}