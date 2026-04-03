function startVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech Recognition not supported in this browser");
        return;
    }

    let recognition = new SpeechRecognition();

    recognition.lang = "hi-IN"; // Hindi voice
    recognition.interimResults = false;

    recognition.onstart = function() {
        console.log("Voice started...");
    };

    recognition.onresult = function(event) {
        document.getElementById("inputText").value =
            event.results[0][0].transcript;
    };

    recognition.onerror = function(event) {
        console.log("Error:", event.error);
        alert("Mic error: " + event.error);
    };

    recognition.start();
}
