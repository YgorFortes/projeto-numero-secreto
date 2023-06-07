const elementoChute = document.getElementById('chute');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const reconhecimento = new SpeechRecognition();

reconhecimento.lang = 'pt-br';
reconhecimento.start();

reconhecimento.addEventListener('result', quandoFalar);

function quandoFalar(evento){
  const chute = evento.results[0][0].transcript;
  exibeChuteNaTela(chute);
  veirificaValorValido(chute);
}

function  exibeChuteNaTela(chute){
  elementoChute.innerHTML = `<div>Você disse:</div>
                          <span class="box">${chute}</span>`;
}

reconhecimento.addEventListener('end', () => {
  reconhecimento.start();
})