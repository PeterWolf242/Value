function double() {
    let wert = document.querySelector("#number").valueAsNumber;

    let outputWert = wert * 2;
    let outputFeld = document.querySelector(".outputFeld");

    outputFeld.innerHTML = `<p>Der neue Wert ist ${outputWert}</p>`

    console.log(outputWert);
}