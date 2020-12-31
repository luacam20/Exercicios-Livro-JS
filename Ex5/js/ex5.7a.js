var clubes = []; 
function btAdicionar() {
    var clube = window.document.getElementById("inClube").value; 
    
    // Verifica prenchimento do clube
    if (clube == "") {
        alert("Informe o nome do clube"); 
        inClube.focus(); 
        return;

    }
     // Adiciona dados ao vetor de objetos
    clubes.push({ clube: clube});
   
    // limpa campos e posicionar cursor em nome 
    inClube.value = "";
    inClube.focus();
}

function btListar() {
    // verifica se o vetor esta vazio 
    if (clubes.length == 0) {
        alert("Não há clubes na lista");
        return;
    }
    var lista = ""; // Para concatenar lista de clubes

    // pecorre os elementos do vetor 
    for (var i = 0; i < clubes.length; i++) {
        lista += clubes[i].clube;
    }
    // exibe a lista (em uma inica isntrucao)
    document.getElementById("outLista").textContent = lista;
}

