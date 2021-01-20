function mostrarDados() {
    // cria referencia aos elementos da pagina
    var inModelo = document.getElementById("inModelo");
    var inAno = document.getElementById("inAno");
    var inPreco = document.getElementById("inPreco");
    var outClassif = document.getElementById("outClassif");
    var outPrecoVenda = document.getElementById("outPrecoVenda");

    // obtém o conteúdo dos campos de entrada de dados
    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);

    // valida o preenchimento dos campos 
    if (modelo == "" || ano == 0 || isNaN(ano) || isNaN(preco)) {
        alert("Informe corretamente os dados do veículo");
        inModelo.focus();
        return;
    }

    // chama e atribui o retorno das funções ás variáveis 
    var classificacao = classificarVeiculo(ano);
    var precoVenda = calcularVenda(preco, classificacao);

    // exibe as respostas 
    outClassif.textContent = modelo + " - " + classificacao;
    outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
}
// cria referencia ao botao e associa ao evento click a funcao mostrarDados
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados);

// funcao recebe o ano do veiculo como parametro 
function classificarVeiculo(ano) {
    var anoAtual = new Date().getFullYear(); // obtem ano atual 
    var classif; 
    // condicoes para definir a classificacao do veiculo 
    if (ano == anoAtual) {
        classif = "Novo";
    } else if (ano == anoAtual-1 || ano == anoAtual - 2 ) {
        classif = "Seminovo"
    } else {
        classif = "Usado";
    }
    return classif; // retorna a classificacao
}
// funcao recebe valor e status do veiculo como parametro 
function calcularVenda(valor, status) {
    var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
    return prVenda;
}