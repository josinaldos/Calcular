function imc() {
  let nome = document.querySelector("#nome").value;
  let altura = document.querySelector("#altura").value;
  let peso = document.querySelector("#peso").value;
  let resultado = document.querySelector(".resultado");

  if (nome != "" && altura != "" && peso != "") {
    
    let valorImc = (peso / (altura * altura)).toFixed(1);

    if (valorImc < 18.5) {
      tipoIMC = "abaixo dp peso";
    } else if (valorImc > 18.5 && valorImc < 24.9) {
      tipoIMC = "peso ideal";
    } else if (valorImc > 25.8 && valorImc < 29.9) {
      tipoIMC = "levemente acima do peso";
    } else if (valorImc > 30.0 && valorImc < 34.9) {
      tipoIMC = "obesisdade grau l";
    } else if (valorImc > 35.0 && valorImc < 39.9) {
      tipoIMC = "obesisdade grau ll";
    } else {
      tipoIMC = "obesidade grau lll";
    }

    resultado.innerHTML = `Olá ${nome} seu IMC é ${valorImc} e você está ${tipoIMC}`
  } else {
    resultado.innerHTML  = 'Preencha todos os campos!'
  }
}
