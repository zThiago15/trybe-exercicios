const custoProduto = 500;
const valorVenda = 600;

// Imposto e lucro
const impostoSobreCusto = (custoProduto * 20) / 100; 
const valorCustoTotal = custoProduto + impostoSobreCusto;


let lucro = valorVenda - valorCustoTotal; 

// Compra de mil produtos
const lucroMilProdutos = lucro * 1000;
console.log(`Lucro ao vender 1000 produtos: ${lucroMilProdutos}`);

if(custoProduto == 0 || valorVenda == 0){
    console.log("Erro! Por favor, informe um valor.");
}

