function solucao(ganhos, serasaScore, mesesParaPagar) {
    //seu código aqui
    
    if(serasaScore < 300) {
        const valorParcela = ( ganhos * 3 + (ganhos * 3 / 100)) / mesesParaPagar 
        return console.log(valorParcela)
    }

    if(serasaScore < 700){
        const valorParcela = ( ganhos * 3 + (ganhos * 9 / 100)) / mesesParaPagar 
        return console.log(valorParcela)
    }

    const valorParcela = ( ganhos * 3 + (ganhos * 15 / 100)) / mesesParaPagar 
    return console.log(valorParcela)
}