function Montar() {
    var fruta = document.getElementById("inFruta").value; 
    var outDica = document.getElementById("outDica");

    // se vazio, exibe alerta, posiciona em inFruta e retorna
    if (fruta == "") {
        alert("Informe a fruta...");
        inFruta.focus();
        return;
    }

    var resposta = fruta.charAt(0); // letra inicial da fruta
    var estrelas = "*" // vai concatenar *
    var tam = fruta.length; // obtem o tamanho da fruta

    // pecorre os demais caracteres da fruta
    for(var i = 1; i < tam; i++) {
        // se a letra da posicao da variavel de controle for igual a primeira...
        if(fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0); // adiciona letra inicial
        } else {
            resposta += "_"; // adiciona sublinhado 
        }
        estrelas += "*"; // concatena *
    }
    // exibe a resposta e estrelas 
    outDica.textContent = resposta;
    inFruta.value = estrelas;
}