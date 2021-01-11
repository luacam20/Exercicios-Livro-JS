var nomes = []; // vetor global 
function Adicionar() {
    var nome = window.document.getElementById("candidato").value;
    var nacertos = Number(window.document.getElementById("acertos").value);

    // verifica o preenchimento dos campos 
    if (nome == "" || acertos.value == "" || isNaN(nacertos)) {
        alert("Informe corretamente os dados"); 
        candidato.focus();
        return;
    }

    // adiciona dados ao vetor de objetos 
    nomes.push({ nome: nome, nacertos: nacertos });

    // limpa campos e posiciona cursor 
    candidato.value = "";
    acertos.value = "";
    candidato.focus(); 


}

function listartodos() {
    // verifica se o vetor esta vazio 
    if (nomes.length == 0) {
        alert ("Não há nomes na lista.");
        return;
    }

    var lista = ""; // concatenar lista 

    // pecorre os elementos do vetor 
    for (var i = 0; i < nomes.length; i++) {
        lista += nomes[i].nome + " - " + nomes[i].nacertos + " acertos\n";
    }
    document.getElementById("outlista").textContent = lista;
        
    }
    lista.value = "";
    function aprovados() {
    
    var res = document.getElementById("res");
    var aprov = document.getElementById("media").value;
        
    for (var i = 0; i < nomes.length; i++) { 
        if (nomes[i].nacertos >= aprov) {
            res.innerHTML += ` <strong>${nomes[i].nome} - ${nomes[i].nacertos} \n </strong> `;
        }
    }
        console.log("aprov");

}   
