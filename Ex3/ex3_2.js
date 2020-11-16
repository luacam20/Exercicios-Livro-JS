function Calcular() {
    var nome = window.document.getElementById("nome").value;
    var rdbSexo = window.document.getElementsByName("sexo");

    var masc = rdbSexo[0].checked;
    var fem = rdbSexo[1].checked;

    var alt = window.document.getElementById("alt").value;
    var res = window.document.getElementById("res");
    var pesof = 21 * (Math.pow(Number(alt), 2));
    var pesom = 22 * (Math.pow(Number(alt), 2));

    // se masculino (significa se masculino == true)
    if (masc === true) {
        res.innerHTML = `${nome} : Seu peso ideal e ${pesom.toFixed(3)} kg`
   
    } else if (fem) { 
        res.innerHTML = `${nome} : Seu peso ideal e ${pesof.toFixed(3)} kg`  
    }   

}