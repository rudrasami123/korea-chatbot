function translateText() {
  let text = document.getElementById("inputText").value;

  // Fake translation (for now)
  let translated = fakeTranslate(text);

  document.getElementById("output").innerHTML =
    "<b>Korean:</b> " + translated;
}

// Simple mock translation
function fakeTranslate(text) {
  if (text.toLowerCase().includes("hello")) {
    return "안녕하세요";
  }
  if (text.toLowerCase().includes("thank you")) {
    return "감사합니다";
  }
  return "번역 결과 (Translation result)";
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
