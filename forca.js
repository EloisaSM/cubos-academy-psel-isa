function solucao(palpite, palavra) {
	// seu código aqui
    let numeroLetras = 0

    for(i = 0; i < palavra.length; i ++){
        if(palavra[i] === palpite){
            numeroLetras ++
        }
    }
    console.log(numeroLetras)
}