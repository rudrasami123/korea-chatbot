async function translateText() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Enter text first");
        return;
    }

    document.getElementById("output").innerHTML = "Translating... ⏳";

    try {
        let response = await fetch("https://translate.argosopentech.com/translate", {
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

    } catch (error) {
        document.getElementById("output").innerHTML =
            "Error: API failed ❌";
    }
}
