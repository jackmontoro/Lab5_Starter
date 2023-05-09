// explore.js

window.addEventListener('DOMContentLoaded', init);

var smileFace;
var text;
var play;


function init() {
  const voiceSelect = document.getElementById("voice-select");
  const spSynth = window.speechSynthesis;
  let voiceList = [];

  text = document.getElementById("test-to-speak");
  smileFace = document.querySelector("img[alt='Smiling face']");



  window.onload = function() {
    window.speechSynthesis.onvoiceschanged = function() {
      voiceList = spSynth.getVoices();
      for(let i = 0; i < voiceList.length; i++) {
        const voice = document.createElement("option");
        voice.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
        console.log(`${voiceList[i].name} (${voiceList[i].lang})`);
        voice.setAttribute("value", voiceList[i].name);
        voice.setAttribute("data-name", voiceList[i].name);
        voiceSelect.appendChild(voice);
      }
    };
  };

  var voiceIndex;
  voiceSelect.addEventListener("change", function(){
    voiceIndex = voiceSelect.options[voiceSelect.selectedIndex].index;
  });

  
  play = document.querySelector("button");

  play.addEventListener("click", function() {
    text = document.getElementById("test-to-speak");
    smileFace = document.querySelector("img[alt='Smiling face']");
    let utter = new SpeechSynthesisUtterance(text.value);
    utter.onstart = function() {
      smileFace.src="./assets/images/smiling-open.png";
    };
    utter.onend = function() {
      smileFace.src="./assets/images/smiling.png";
    };
    utter.voice = voiceList[voiceIndex-1];

    spSynth.speak(utter);
  });

}