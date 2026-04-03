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
      "❌ Translation failed. Try again.";
  }
}
