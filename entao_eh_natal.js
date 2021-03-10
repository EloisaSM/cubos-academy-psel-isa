function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) {
    // seu código aqui
    let total = 0;

    const descontoPorCategoria = {
        SALGADO: 0.1,
        DOCE: 0.15,
        BEBIDA: 0.3,
    };

    const descontoCupom = {
        NATAL10: { valor: 0.1, valorCompra: 3000 },
        NATAL20: { valor: 0.2, valorCompra: 4500 },
        NATAL30: { valor: 0.3, valorCompra: 6000 },
        NATALSUPREMO: { valor: 0.3, valorCompra: 8000, freteGratis: true },
        };

    // calculo produtos
    for (i = 0; i < produtos.length; i++) {
        const elemento = produtos[i];
        const valor = elemento.valor;
        const descontoCateg = descontoPorCategoria[elemento.categoria];
        const quantidade = elemento.quantidade;

        total = total + (valor - valor * descontoCateg) * quantidade;
    }

    const cupom = descontoCupom[cupomDesconto];
    const cupomEhValido = ehPrimeiraCompra && cupom;

  // calculo cupom
    if (cupomEhValido && total > cupom.valorCompra) {
        total = total - total * cupom.valor;
    }

  let valorFrete = 1.2 * distanciaRestaurante * 100;

    if (cupomEhValido && cupom.freteGratis) {
        valorFrete = 0;
    }

    total = total + valorFrete;

    console.log(total);
}
