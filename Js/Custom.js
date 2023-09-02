

let Speech = new SpeechSynthesisUtterance();
const Play = document.getElementById("Button");
const Select = document.querySelector("select");

let voices = [];


Play.addEventListener('click', function(){
     Speech.text = document.getElementById("TextInput").value;
    window.speechSynthesis.speak(Speech);
})

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    Speech.voice = voices[0];

    voices.forEach((voice, i)=>(Select.options[i] = new Option(voice.name, i)))
}

Select.addEventListener("change", ()=>{
    Speech.voice = voices[Select.value];
})


