function calcular() {
    let altura = (document.querySelector("#altura").value) / 100 // Tranformei em cm
    let peso = document.querySelector("#peso").value


    let imc = peso / altura ** 2
    let text = ""
    
    if (imc < 18.5) {
        text = "Magro"
    } else if (imc < 24.9) {
        text = "Peso compatível com a altura"
    } else if (imc < 29.9) {
        text = "Sobrepeso"
    } else if (imc < 39.9) {
        text = "Obesidade"
    } else if (imc > 39.9) {
        text = "Obesidade Mórbida"
    }

    document.getElementById("text-area").innerHTML = text
}




