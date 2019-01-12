

$(document).ready(function () { 
    $("span").hover(function(){
        $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
    }, function(){
        $(this).css("background-color",  "rgb(165, 173, 161)")
    })

    $("span").mousedown(function () {
        $(this).css("background-color", "rgba(37, 87, 129, 0.6)")
    })
    
    $("span").mouseup(function () {
        $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
    })
});


var word= ""

// Code for getting value of span tags
$("span").mousedown(function () {
    console.log($(this).text())
word=$(this).text()

say(word)
})























//text to speech
function say(m){ 	var msg = new SpeechSynthesisUtterance(); 	var voices = window.speechSynthesis.getVoices(); 	msg.voice = voices[10]; 	msg.voiceURI = "native"; 	msg.volume = 1; 	msg.rate = .75; 	msg.pitch = 0.8; 	msg.text = m; 	msg.lang = 'en-US';   	speechSynthesis.speak(msg); }




