function btGerar() {
    var funcionario = document.getElementById("inFuncionario").value; 
    var outEmail = document.getElementById("outEmail");

    // divide o nome em itens do vetor, criados a cada ocorrecia do espaco
    var partes = funcionario.split(""); 
    var email = ""; // concatenar letras 
    var tam = partes.lenght; // obtem n itens do vetor partes 

    // pecorre os itens do vetor (exceto o último)
    for (var i = 0; i < tam - 1; i++) {
        email += partes[i].charAt(0); // e obtem a letra inicial de cada item 
    }

    // concatena as letras iniciais com a ultima parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br";

    // exibe email em letras minúsculas 
    outEmail.textContent = "E-mail: " + email.toLowerCase();
}