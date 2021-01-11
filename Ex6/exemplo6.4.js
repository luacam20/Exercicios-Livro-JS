function btGerar() {
    // cria referencia aos elementos da pagina 
    var inNome = document.getElementById("inNome"); 
    var outCracha = window.document.getElementById("outCracha");

    var nome = inNome.value;

    // se vazio ou se nao ha espaço no nome 
    if (nome == "" || nome.index0f (" ") == -1) {
        alert("Informe o nome completo do participante.");
        inNome.focus();
        return;
    }

    var priEspaco = nome.index0f(" "); // posicao do primeiro espaco
    var ultEspaco = nome.lastindex0f(" ");// posicao do ultimo espaco

    // copia nome e sobre nome usando parametros de substr() 
    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco); 

    // altera o texto indentificado na pagina por outcracha
    outCracha.textContent += "Crachá: " + cracha;
}
