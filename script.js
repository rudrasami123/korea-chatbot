async function translateText() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Enter text first");
        return;
    }

    document.getElementById("output").innerHTML = "Translating... ⏳";

    try {
        let res = await fetch(
            "https://api.allorigins.win/raw?url=" +
            encodeURIComponent(
                "https://api.mymemory.translated.net/get?q=" +
                text + "&langpair=en|ko"
            )
        );

        let data = await res.json();

        document.getElementById("output").innerHTML =
            "<b>Korean:</b> " + data.responseData.translatedText;

    } catch (err) {
        document.getElementById("output").innerHTML =
            "Error: Try again ❌";
    }
}
