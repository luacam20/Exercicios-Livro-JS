const TAXA_MULTA = 2 / 100; //multa por atraso 
const TAXA_JUROS = 0.33 / 100; //juros por dia de atraso

function btCalcular() {
    var inDataVenc = document.getElementById("inDataVenc");
    var inValor = document.getElementById("inValor");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");
    
    var dataVenc = inDataVenc.value;
    var valor = Number(inValor.value);

    //cria duas variáveis (instacia dois objetos) tipo data
    var hoje = new Date();
    var vencto = new Date();

    // a data vem no formato aaaa-mm-dd
    var partes = dataVenc.split("-");
    vencto.setDate(Number(partes[2]));
    vencto.setMonth(Number([1])-1);
    vencto.setFullYear(Number(partes[0]));

    //calcula a diferença de dias entre as datas (em milissegundos)
    var atraso = hoje - vencto;

    var multa = 0; 
    var juros = 0;

    // se a conta estiver em atraso 

    if (atraso > 0) {
        //converte os milissegundos da diferença em dias 
        //(1 dia = 24hor x 60min x 60seg x 1000mseg: 86400000)
        //round(): necessario para periodos envolvendo horario de verao
        var dias = Math.round(atraso / 86400000);

        multa = valor * TAXA_MULTA; // calcula multa e jogos
        juros = (valor * TAXA_JUROS) * dias;
    }

    var total = valor + multa + juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);
}
function btNovaConta() {
    location.reload();
}