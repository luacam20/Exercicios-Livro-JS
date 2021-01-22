var itens = []; //vetor global para armazenar os itens do pedido

function trocarItem() {
    // cria referencia aos elementos select
    var inPizza = document.getElementById("inPizza");
    var inBebida = document.getElementById("inBebida");

    // se estiber marcado 
    if (rbPizza.checked) {
        inBebida.className = "oculta"; //oculta select bebidas
        inPizza.className = "exibe"; // exibe select pizza
    } else {
        inPizza.className = "oculta"; //oculta pizza 
        inBebida.className = "exibe"; //oculta as bebidas
    }
}
// cria referencia aos radiobutton e associa funcao ao evento change
var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

function mostrarNumSabores() {
    // se radiobuttom rbPizza estiver marcado
    if (rbPizza.checked) {
        var pizza = inPizza.value; // obtem value do item selecionado 
        // uso o operador condicional (cap 3), para indicar o numero de sabores 
        var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
        // atributo placeholder exibe uma dica de preenchimento do campo
        inDetalhes.placeholder = "Até " + num + " sabores";
    }
}
// cria referencia ao elemento e associa funcao ao evento focus

var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);

// cria funcao anonima ao evento blur (quando o campo perde o focu)
inDetalhes.addEventListener("blur", function(){
inDetalhes.placeholder = ""; // limpa a dica de preenchiemnto  
});

// cria fução (anonima) associada ao evento keypress (tecla pressionada)
inDetalhes.addEventListener("keypress", function (tecla) {
    // se pressionou tecla de codigo 13 (enter)
    if (tecla.keyCode == 13) {
        adicionarItem(); // ira adicionar item no pedido
    }
});
function adicionarItem() {
    // cria referencia aos elementos da pagina (ainda nao referenciados)
    var inPizza = document.getElementById("inPizza");
    var inBebida = document.getElementById("inBebida");
    var outPedido = document.getElementById("outPedido");

    // se radiobuttum pizza estiver marcado
    if (rbPizza.checked) {
        var num = inPizza.selectedIndex;  // obtem n° do item selecionado
        var produto = inPizza.options[num].text; 
         } else {
             var num = inBebida.selectedIndex;
             var produto = inBebida.options[num].text;
        }
        var detalhes = inDetalhes.value; 
        itens.push(produto + "(" + detalhes + ")"); // adiciona ao vetor
        outPedido.textContent = itens.join("\n"); // exibe em outPedidos
        limparCampos(); //limpa conteudo dos campos
    }
    // cria referencia e associa a funcao ao evento click
    var btAdicionar = document.getElementById("btAdicionar");
    btAdicionar.addEventListener("click", adicionarItem);

    function limparCampos() {
        rbPizza.checked = true; // marca pizza
        inBebida.className = "oculta"; // oculta select de Bebidas
        inPizza.className = "exibe"; // exibe select das pizzas
        inPizza.selectedIndex = 0; // seleciona 1 item (posicao 0)
        inDetalhes.value = ""; // limpa input Detalhes
        rbPizza.focus(); // joga o foco no rbPizza
    }

