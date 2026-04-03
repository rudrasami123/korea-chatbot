async function translateText() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Enter text first");
        return;
    }

    document.getElementById("output").innerHTML = "Translating... ⏳";

    try {
        let res = await fetch(
            "https://api.mymemory.translated.net/get?q=" 
            + encodeURIComponent(text) + "&langpair=auto|ko"
        );

        let data = await res.json();

        document.getElementById("output").innerHTML =
            "<b>Korean:</b> " + data.responseData.translatedText;

    } catch (err) {
        document.getElementById("output").innerHTML =
            "Error: Try again ❌";
    }
}
