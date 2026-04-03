async function translateText() {
  let text = document.getElementById("inputText").value;

  let response = await fetch(
    "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(text) + "&langpair=auto|ko"
  );

  let data = await response.json();

  document.getElementById("output").innerHTML =
    "<b>Korean:</b> " + data.responseData.translatedText;
}
