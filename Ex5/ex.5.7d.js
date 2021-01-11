var noticias = []; 
function Adicionar() {
    var noticia = document.getElementById("inNoticia").value; 

    // verifica o preenchimento do campo
    if (noticia == "") {
        alert("Informe a Notícia.");
        inNoticia.focus();
        return;
    }

    // adiciona dados ao vetor de objetos 
    noticias.push({noticia: noticia}); 

    // limpa campo 
    inNoticia.value = ""; 
}
function Listar() {
    var lista = ""; // para concatenar lista 
    var res = document.getElementById("res"); 

    for (var i = 0; i < noticias.length; i++) {
        lista +=  ( i+1 ) + " - " + noticias[i].noticia + "\n"; 

    }
    document.getElementById("outlista").textContent = lista;
   
    res.innerHTML = `Notícias Cadastradas:`;  


}