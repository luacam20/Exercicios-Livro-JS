var numeros = []; 

function btAdicionar() {
    var numero = window.document.getElementById("number").value;
    var res = window.document.getElementById("res");

    res.innerHTML = "";

    numeros.forEach(num => {
        if(num === numero ){
            alert('erro');

            return;
        }
    })

    number.value = '';
    number.focus();    
    
    numeros.push(numero); 

    for (var i = 0; i < numeros.length; i++) {
        res.innerHTML += numeros[i] + ",";
    } 
  }

  function btOrdem() {
    var res = window.document.getElementById("res");
    
    for (var i = 0; i < numeros.length; i++) {
        if (i === numeros.length){
            return;
        }

        if (numeros[i].numero > numeros[i++].numero) {
            res.innerHTML = "Os numeros estão em ordem crescente";
        } 
    }
  }