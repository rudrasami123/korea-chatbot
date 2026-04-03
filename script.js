async function translateText() {
    let text = document.getElementById("inputText").value;

    try {
        // Step 1: Translate to English first
        let res1 = await fetch(
            "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" 
            + encodeURIComponent(text)
        );

        let data1 = await res1.json();
        let english = data1[0].map(item => item[0]).join("");

        // Step 2: English → Korean
        let res2 = await fetch(
            "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=" 
            + encodeURIComponent(english)
        );

        let data2 = await res2.json();
        let korean = data2[0].map(item => item[0]).join("");

        document.getElementById("output").innerHTML =
            "<b>English:</b> " + english + "<br><br><b>Korean:</b> " + korean;

    } catch (error) {
        document.getElementById("output").innerHTML =
            "❌ Error: Try again";
    }
}
