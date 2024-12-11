function berechneAlter() {
    let age1 = document.querySelector("#number1").valueAsNumber;
    let age2 = document.querySelector("#number2").valueAsNumber;
    let output = document.querySelector(".output");

    const ergebnis = age1 - age2;

    output.innerHTML = `Der Altersunterschied beträgt ${ergebnis} Jahre.`
}