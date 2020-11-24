function mostrarTabuada() {
    // Cria referencia aos elementos da pagina 
    var num = document.getElementById("inNumero"); 
    var tab = document.getElementById("outTabuada");
    
    console.log(tab)

    // Converte conteudo do campo inNumero
    var num = Number(inNumero.value); 

    // Valida o numero
    if (num == 0 || isNaN(num)) {
        alert("Informe um número válido!"); 
        inNumero.focus(); 
        return;
    }
    //Cria uma variavel do tipo string que ira concatenar resposta 
    var resposta = ""; 
   
    // Cria um laço de repeticao 
    for (var i = 1; i <= 10; i++) {
        //A variavel vai acumulando novos conteudos 
        resposta = resposta + num  + " x " +  i + " = " + num * i + " \n";
    }
     tab.textContent = resposta; 
    
}

    var btMostrar = document.getElementById("btMostrar");
    btMostrar.addEventListener("click", mostrarTabuada);
