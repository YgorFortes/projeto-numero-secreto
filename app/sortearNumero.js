const menorNumero = 1;
const maiorNumero = 1000;

const numeroSecreto = sortearNumero();
console.log(numeroSecreto)
function sortearNumero (){
  return parseInt(Math.random() * maiorNumero +1);
  
}

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerText = menorNumero;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerText = maiorNumero;