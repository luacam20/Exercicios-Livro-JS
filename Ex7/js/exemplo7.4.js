// Usando função anonima 

// cria referencia ao botao 
var btExibir = document.getElementById("btExibir"); 

// ao clicar no botao, a progranacao da funcao anonima e executadan
btExibir.addEventListener("click", function () {
    var inPreco = document.getElementById("inPreco"); 
    var outParcelas = document.getElementById("outParcelas"); 

    // obtem o conteudo do campo de entrada 
    var preco = Number(inPreco.value); 

    // vai acumular as formas de pagamento 
    var lista = ""; 

    // cria uma repeticao para montar as opcoes de pagamento 
    for (var i = 1; i <= 10; i++) {
        // acumula em lista o n° da parcela e o calculo do valor 
        lista += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
    }
    // exibe a lista no elemnto outPercelas 
    outParcelas.textContent = "Opções de Pagamanto\n\n" + lista;
});