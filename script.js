async function translateText() {
    let text = document.getElementById("inputText").value;
    let lang = document.getElementById("language").value;

    try {
        // Step 1: to English
        let res1 = await fetch(
            "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + lang + "&tl=en&dt=t&q=" 
            + encodeURIComponent(text)
        );

        let data1 = await res1.json();
        let english = data1[0].map(item => item[0]).join("");

        // Step 2: to Korean
        let res2 = await fetch(
            "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=" 
            + encodeURIComponent(english)
        );

        let data2 = await res2.json();
        let korean = data2[0].map(item => item[0]).join("");

        document.getElementById("output").innerHTML =
            "<b>English:</b> " + english + "<br><br><b>Korean:</b> " + korean;

        window.koreanText = korean;

    } catch (error) {
        document.getElementById("output").innerHTML = "❌ Error";
    }
}

// Copy
function copyText() {
    navigator.clipboard.writeText(window.koreanText || "");
    alert("Copied!");
}

// Voice
function startVoice() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        document.getElementById("inputText").value =
            event.results[0][0].transcript;
    };

    recognition.start();
}
