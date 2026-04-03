async function translateText() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Enter text first");
        return;
    }

    document.getElementById("output").innerHTML = "Translating... ⏳";

    try {
        let url = "https://api.mymemory.translated.net/get?q=" 
                  + encodeURIComponent(text) + "&langpair=en|ko";

        let res = await fetch("https://api.allorigins.win/raw?url=" + encodeURIComponent(url));

        let data = await res.json();

        document.getElementById("output").innerHTML =
            "<b>Korean:</b> " + data.responseData.translatedText;

    } catch (err) {
        document.getElementById("output").innerHTML =
            "Error: Try again ❌";
    }
}
