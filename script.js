async function translateText() {
  let text = document.getElementById("inputText").value;

  let response = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: text,
      source: "auto",
      target: "ko",
      format: "text"
    })
  });

  let data = await response.json();

  document.getElementById("output").innerHTML =
    "<b>Korean:</b> " + data.translatedText;
}

// 🎤 Voice input
function startVoice() {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.lang = "en-US";

  recognition.onresult = function(event) {
    document.getElementById("inputText").value =
      event.results[0][0].transcript;
  };

  recognition.start();
}
