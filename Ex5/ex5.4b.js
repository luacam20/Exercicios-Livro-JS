var criancas = []; // declara vetor global 
function Adicionar() {
    var nome = String(window.document.getElementById("inNome").value); 
    var idade = Number(window.document.getElementById("inIdade").value);
    
    
    // Verifica prenchimento do nome
    if (nome == "") {
        alert("Informe o nome da criança"); 
        inNome.focus(); 
        return;

    }
     // Adiciona dados ao vetor de objetos 
     criancas.push({ nome: nome, idade: idade });

     // limpa campos e posicionar cursor em nome 
     inNome.value = "";
     inIdade.value = "";
     inNome.focus();

     // nao coloquei o chamado de listar 
     }
     
     function Listar() {
         // verifica se o vetor esta vazio 
        if (criancas.length == 0) {
            alert("Não há crianças na lista");
            return;
        }
        var lista = ""; // Para concatenar lista de crianças 

        // pecorre os elementos do vetor 
        for (var i = 0; i < criancas.length; i++) {
            lista += criancas[i].nome + " - " + criancas[i].idade + "anos\n";
        }
        // exibe a lista (em uma inica isntrucao)
        document.getElementById("outLista").textContent = lista;
     }
     
     function Resumir() { 
        // Verifica se o vetor esta vazio 
        if (criancas.length == 0) {
            alert("Não há crianças na lista");
            return;
        }
        // cria uma copia do vetor criancas 
        var copia = criancas.slice(); 

        // ordena o vetor copia pela idade 
        copia.sort(function (a,b) {return a.idade - b.idade});

        var resumo = ""; // para concatenar saida 

        var aux = copia[0].idade; // menor idade do vetor ordenado
        var nomes = [];  // vetor para inserir nomes de cada idade 

        // pecorre os elementos do vetor (classificado por idade)
        for (var i = 0; i < copia.length; i++) {
            // se é da mesma idade auxiliar, adiciona ao vetor 
            if (copia[i].idade == aux) {
                nomes.push(copia[i].nome); 
            } else {
                // senao, adiciona ao resumo, dados e nomes inseridos em nomes[]
                resumo += aux + " ano(s): " + nomes.length + "criança(s) - ";
                resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
                resumo += "(" + nomes.join(", ") + ") \n\n";
                aux = copia[i].idade; 
                nomes = [];
                nomes.push(copia[i].nome);

                document.getElementById("list").textContent = resumo;
             }
            }
            // adiciona os nomes da ultima idade ordenada 
            resumo += aux + " ano(s): " + nomes.length + "criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ") \n\n";

            document.getElementById("outLista").textContent = resumo;
         }