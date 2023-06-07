function veirificaValorValido(chute){
  const numero =+ chute;
  switch(true){
    case verificaNumeroMenorEMaior(numero):
      elementoChute.innerHTML +=`<div>Valor inválido: o número precisa ser entre ${menorNumero} e / ou que ${maiorNumero}</div>`;
    break;
    case verificaSeNumeroEString(numero):
      elementoChute.innerHTML +='<div>Valor inválido</div>';
    break;
    default:
      
  }

  if( numeroSecreto === numero) {
      document.body.innerHTML = `<h2>Você acertou!</h2>
                                  <h3>O número secreto era ${numeroSecreto}</h3>
                                  <button id ="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`
                                  botaoReiniciar();
  } else if (numero > numeroSecreto){
    elementoChute.innerHTML += ` <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
  }
    

}

function verificaSeNumeroEString(numero){
 return Number.isNaN(numero);
}

function verificaNumeroMenorEMaior(numero){
  return numero < menorNumero || numero > maiorNumero;
}



function botaoReiniciar(){
  const btn = document.getElementById('jogar-novamente');
  btn.addEventListener('click', (botaoReiniciar) => {
    window.location.reload();
  });
}
