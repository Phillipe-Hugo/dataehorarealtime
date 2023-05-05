const h1 = document.querySelector('.container h1');
// Seleciona o elemento HTML onde a data e hora serão exibidos
let dateTime = document.querySelector('#datetime');

// Define a função que atualiza a data e hora
function atualizaDataHora() {
  // Cria um objeto Date para obter a data e hora atual
  let dataAtual = new Date();

  // Formata a data e hora no formato desejado
  let dataFormatada = dataAtual.toLocaleDateString('pt-BR');
  let horaFormatada = dataAtual.toLocaleTimeString('pt-BR');

  // Exibe a data e hora no elemento HTML selecionado
  dateTime.innerHTML = `Hoje ${dataFormatada} - Horário: ${horaFormatada}`;
}

// Chama a função que atualiza a data e hora a cada segundo
setInterval(atualizaDataHora, 1000);