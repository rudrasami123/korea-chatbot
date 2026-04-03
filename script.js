async function translateText() {
  let text = document.getElementById("inputText").value;

  try {
    let response = await fetch(
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ko&dt=t&q=" + encodeURIComponent(text)
    );

    let data = await response.json();

    let translated = data[0].map(item => item[0]).join("");

    document.getElementById("output").innerHTML =
      "<b>Korean:</b> " + translated;

  } catch (error) {
    document.getElementById("output").innerHTML =
      "❌ Error: Try again.";
  }
}

// 🎤 Voice input (KEEP THIS)
function startVoice() {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.lang = "en-US";

  recognition.onresult = function(event) {
    document.getElementById("inputText").value =
      event.results[0][0].transcript;
  };

  recognition.start();
}
