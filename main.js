const meuPedido = {

    itens: [
        {nome: 'Poção de Vida', valor : 100},
        {nome: 'Espada da vida', valor: 1000},
        {nome: 'Entrega', valor: 40, entrega: true}
    ]
}

const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens.filter(item => !item.entrega).reduce((totalPedidos,pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);
    if(valorProdutos > 100){
        return valorProdutos;
    } else {
        return valorProdutos + entrega[0].valor;
    }
}

console.log(calcularValorPedido(meuPedido))

module.exports = calcularValorPedido;