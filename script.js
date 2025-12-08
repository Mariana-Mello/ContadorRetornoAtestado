document.addEventListener("DOMContentLoaded", () => {
  const inputDataInicio = document.getElementById("dataInicial");
  const inputDias = document.getElementById("dias");
  const btnCalcular = document.getElementById("btnCalcular");
  const btnReiniciar = document.getElementById("btnReiniciar");
  const resultado = document.getElementById("resultado");

  // Cria uma data SEM interferência de fuso/UTC
  function criarDataBrasil(valorInput) {
    const [ano, mes, dia] = valorInput.split("-").map(Number);
    return new Date(ano, mes - 1, dia); // mês começa em 0 no JS
  }

  const formatoBR = (data) =>
    data.toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });

  function calcularRetorno() {
    const dataInicioValor = inputDataInicio.value;
    const diasValor = Number(inputDias.value);

    if (!dataInicioValor) {
      resultado.innerHTML = "⚠️ Selecione a data inicial.";
      return;
    }

    if (!diasValor || diasValor <= 0) {
      resultado.innerHTML = "⚠️ Informe um número válido de dias.";
      return;
    }

    const dataInicio = criarDataBrasil(dataInicioValor);

    // último dia = início + (dias - 1)
    const ultimoDia = new Date(dataInicio);
    ultimoDia.setDate(dataInicio.getDate() + (diasValor - 1));

    // retorno = último dia + 1
    const retorno = new Date(ultimoDia);
    retorno.setDate(ultimoDia.getDate() + 1);

    resultado.innerHTML = `
      🔙 <strong>Data de retorno:</strong>
      <span style="color: green; font-weight: 700;">
        ${formatoBR(retorno)}
      </span>
    `;

    btnReiniciar.style.display = "block";
  }

  function reiniciarCalculo() {
    inputDataInicio.value = "";
    inputDias.value = "";
    resultado.innerHTML = "";
    btnReiniciar.style.display = "none";
    inputDataInicio.focus();
  }

  btnCalcular.addEventListener("click", calcularRetorno);
  btnReiniciar.addEventListener("click", reiniciarCalculo);
});
