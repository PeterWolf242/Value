function berechneAlter() {
    const number = document.querySelector("#number").valueAsNumber;
    let alter = 2024 - number;
    const output = document.querySelector(".output");

    output.innerHTML = `<p>Sie sind ${alter} Jahre alt</p>`
}