

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











    $("img").hover(function(){
        $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
    }, function(){
        $(this).css("background-color",  "white")
    })

    $("img").mousedown(function () {
        $(this).css("background-color", "rgba(37, 87, 129, 0.6)")
    })
    
    $("img").mouseup(function () {
        $(this).css("background-color", "rgba(37, 127, 129, 0.6)")
    })





var word= ""


  var tOut;
$("span").hover(function(){
    word=$(this).text()
    tOut = setTimeout(function(){
        
         say(word) 
        
        console.log(word)
        
    },150);
},function(){
    clearTimeout(tOut);
   
});














});





//text to speech
function say(m){ 	var msg = new SpeechSynthesisUtterance(); 	var voices = window.speechSynthesis.getVoices(); 	msg.voice = voices[10]; 	msg.voiceURI = "native"; 	msg.volume = 1; 	msg.rate = .75; 	msg.pitch = 0.8; 	msg.text = m; 	msg.lang = 'en-US';   	speechSynthesis.speak(msg); }




