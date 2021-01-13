function btGerar() {
    // cria referencia aos elementos da pagina 
    var inNome = document.getElementById("inNome"); 
    var outCracha = document.getElementById("outCracha");

    var nome = inNome.value;
  
    var priEspaco = nome.indexOf(" "); // posicao do primeiro espaco
    var ultEspaco = nome.lastIndexOf(" ");// posicao do ultimo espaco

    // copia nome e sobre nome usando parametros de substr() 
    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco); 

    // altera o texto indentificado na pagina por outcracha
    outCracha.textContent = "Crachá: " + cracha;
}
