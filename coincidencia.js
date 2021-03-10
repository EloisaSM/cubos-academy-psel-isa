function solucao(jogadas) {
    //seu código aqui
    let zeroQuantidade = 0;
    let umQuantidade = 0;

    for (let index = 0; index < jogadas.length; index++) {
        const elemento = jogadas[index]; 
        if(elemento === 0){
        zeroQuantidade ++
        } else {
        umQuantidade ++
        }
    }

    if(zeroQuantidade === umQuantidade){
        console.log(true)
    } else {
        console.log(false)
    }
}