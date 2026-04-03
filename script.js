async function translateText() {
    let text = document.getElementById("inputText").value;

    if (!text) {
        alert("Enter text first");
        return;
    }

    document.getElementById("output").innerHTML = "Opening translation... ⏳";

    // Open Google Translate in new tab (WORKS 100%)
    let url = "https://translate.google.com/?sl=auto&tl=ko&text=" 
              + encodeURIComponent(text);

    window.open(url, "_blank");
}
