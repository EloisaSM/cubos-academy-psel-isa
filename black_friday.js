function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
    const novoArr = produtos.filter(function(produto){
        if(produto.valor <= valorMaximo && produto.avaliacao >= avaliacaoMinima){
            return true;
        }else {
            return false;
        }
    
    })
    console.log(novoArr)
}