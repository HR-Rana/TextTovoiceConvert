

let Speech = new SpeechSynthesisUtterance();
const Play = document.getElementById("Button");

Play.addEventListener('click', function(){
     Speech.text = document.getElementById("TextInput").value;
    window.speechSynthesis.speak(Speech);
})