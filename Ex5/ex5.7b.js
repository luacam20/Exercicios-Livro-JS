function btAdicionar() {
    var numero = window.document.getElementById("number").value;
    var res = window.document.getElementById("res");
    var numeros = []; 
    
    numeros.push(numero); 
    for (var i = 0; i < numeros.length; i++) {
        res.innerHTML += numeros[i] + ",";

    }
    
}