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
    document.getElementById("outLista").innerHTML = `<p></p>`;
    // verifica se o vetor esta vazio 
    if (clubes.length == 0) {
        alert(`Não há clubes na lista`);

        return;
    }

    if( clubes.length % 2 !== 0 ) {
        alert("O número de clubes na lista não pode ser ímpar");
        
        return;
    }

    var lista = ""; // Para concatenar lista de clubes

    // pecorre os elementos do vetor 
    for (var i = 0; i < clubes.length; i++) {
        var output = (i+1) + "." + clubes[i].clube;
        
        document.getElementById("outLista").innerHTML += `<p>${output}</p>`;
    }

    // exibe a lista (em uma inica isntrucao)
}

function btTabela() {
    document.getElementById("outTable").innerHTML =  '';

    // verifica se o vetor esta vazio 
    if (clubes.length == 0) {
        alert("Não há clubes na lista");

        return;
    }

    if( clubes.length % 2 !== 0 ) {
        alert("O número de clubes na lista não pode ser ímpar");
        
        return;
    }

    // pecorre os elementos do vetor 
    for (var i = 0; i < clubes.length/2; i++) {
        var secondOponent = (clubes.length - 1) - i;

        var output = (i+1) + "." + clubes[i].clube + " X " + clubes[secondOponent].clube;

        document.getElementById("outTable").innerHTML += `<p>${output}</p>`;
    }

    // exibe a lista (em uma inica isntrucao)
}