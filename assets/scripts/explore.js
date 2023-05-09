// explore.js

window.addEventListener('DOMContentLoaded', init);

var voiceSelect;
var smileFace;
var text;
var play;

function init() {
  voiceSelect = document.getElementById("voice-select");
  const spSynth = window.speechSynthesis;
  let voiceList = spSynth.getVoices();

  text = document.getElementById("test-to-speak");
  smileFace = document.querySelector("img[alt='Smiling face']");


  function initializeVoiceSelector() {
    for(let i = 0; i < voiceList.length; i++) {
      const voice = document.createElement("option");
      voice.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
      voice.setAttribute("data-lang", voiceList[i].lang);
      voice.setAttribute("data-name", voiceList[i].name);
      voiceList.appendChild(voice);
    }
  }

  speechSynthesis.addEventListener("voiceschanged", () => {
    voiceList = spSynth.getVoices();
    initializeVoiceSelector();
  });

  var voiceIndex;
  voiceSelect.addEventListener("change", (event) =>{
    voiceIndex = voiceSelect.options[voiceSelect.selectedIndex].index;
  });

  
  play = document.querySelector("button");

  play.addEventListener("click", (event) => {
    text = document.getElementById("test-to-speak");
    smileFace = document.querySelector("img[alt='Smiling face']");
    if (text.value != "") {
      let utter = new SpeechSynthesisUtterance(text.value);
      utter.onstart = function() {
        smileFace.src="./assets/images/smiling-open.png";
      };
      utter.onend = function() {
        smileFace.src="./assets/images/smiling.png";
      };
      utter.voice = voiceList[voiceIndex-1];

      spSynth.speak(utter);
    }
  })

}