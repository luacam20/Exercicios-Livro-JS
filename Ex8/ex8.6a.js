var res = document.getElementById("outres");

var localStorageProducts = localStorage.getItem('produtos');

var produtos = [];

if(localStorageProducts.length > 1 || localStorageProducts){
    var productsInArray = localStorageProducts.split(',')

    produtos = productsInArray;
    
    productsInArray.forEach(element => {
        res.innerHTML += `<p>${element}</p>`;
    });
}

function btAdicionar() {
    var produto = document.getElementById("inProduto").value; 
    
    // verifica preenchimento de campos 
    if (produto == "") {
        alert("Campo vazio, por favor digite um produto.");
        inProduto.focus;
        return;
    }

    produtos.push(produto);

    localStorage.setItem('produtos', produtos.sort());
    
    res.innerHTML = "";

    produtos.forEach(element => {
        res.innerHTML += `<p>${element}</p>`;
    });
}

function btLimpar() {
    // solicita confirmação para excluir os produtos
    localStorage.removeItem("produtos");
    
        
    
}



