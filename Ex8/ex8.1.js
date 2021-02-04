function trocarClube() {
    // cria referencia aos elemntos da pagina 
    var imgClube = document.getElementById("imgClube");
    var divTitulo = document.getElementById("divTitulo");

    var clube; // define variavel que ira receber o nome do clube

    // verifica qual radiobutton esta selecionado 
    if (rbBrasil.checked) {
        clube = "Brasil";
    } else if (rbPelotas.checked) {
        clube = "Pelotas";
    } else {
        clube = "Farroupilha";
    }

    // define as classes de divTitulo: row e cores do clube
    divTitulo.className = "row cores"+clube;

    // modifica a imagem de acordo com a selecao do cliente
    imgClube.src = "img/" + clube.toLocaleLowerCase() + ".png";
    imgClube.className = "exibe"; // exibe imagem
    imgClube.alt = "Simbolo do " + clube; // modifica atributo alt 

    // slava no navegador a escolha do cliente 
    localStorage.setItem("clube", clube);
}
// captura os elementos de radiobutton
var rbBrasil = document.getElementById("rbBrasil");
var rbPelotas = document.getElementById("rbPelotas");
var rbFarroupilha = document.getElementById("rbFarroupilha");

// associa ao evento change a function trocarClube
rbBrasil.addEventListener("change", trocarClube);
rbPelotas.addEventListener("change", trocarClube);
rbFarroupilha.addEventListener("change", trocarClube);

function verificarClube() {
    // se já estiver salvo algum clube 
    if (localStorage.getItem("clube")) {

        var clube = localStorage.getItem("clube"); // obtem nome do clube

        // conforme o clube, marca um dos elementos do input type radio
        if (clube == "Brasil") {
            rbBrasil.checked = true;
        } else if (clube == "Pelotas") {
            rbPelotas.checked = true;
        } else {
            rbFarroupilha.checked = true;
        }
        
        trocarClube(); // chama a function que troca a imagem e as cores
    }
}
// chama function que verifica se cliente já selecionou clube anteriormente 
verificarClube(); 