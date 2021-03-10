function solucao(stringCorrompida) {
	// seu código aqui
    const caracterNaoPermitidos = ['!', '@', '#','$','%', '&', '*', '(', ')']
    let novaFrase = '';

    for(i = 0; i < stringCorrompida.length; i++){
        const letra = stringCorrompida[i]
        if(caracterNaoPermitidos.includes(letra)){
            novaFrase += ''
        } else {
            novaFrase += letra
        }
    }
    return console.log(novaFrase)
}