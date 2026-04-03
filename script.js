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
            + encodeURIComponent(text) + "&langpair=en|ko"
        );

        let data = await res.json();

        if (data && data.responseData) {
            document.getElementById("output").innerHTML =
                "<b>Korean:</b> " + data.responseData.translatedText;
        } else {
            document.getElementById("output").innerHTML =
                "No translation found ❌";
        }

    } catch (err) {
        document.getElementById("output").innerHTML =
            "Error: API failed ❌";
    }
}
