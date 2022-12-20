const calcularValorPedido = require ('./main');
it ('NÃO deve cobrar frete acima de 1000 reais no valor total',() =>{

  const meuPedido ={
    itens:[
      {nome: 'Notebook', valor: 2000},
      {nome: 'Celular', valor :1500}
    ]
  }

  const resultado = calcularValorPedido(meuPedido);
  expect(resultado).toBe(3500) 
});

it('deve cobrar o frete quando o valor for menor que 10', () =>{

  const meuPedido ={
    itens: [
      { nome: 'sanduiche', valor: 25},
      {nome: 'entrega', valor: 10, entrega : true}
    ]
  };

  const resultado = calcularValorPedido(meuPedido);
  expect(resultado).toBe(35)
})

it('deve cobrar o frete quando o valor for EXATAMENTE 10', () =>{

  const meuPedido ={
    itens: [
      { nome: 'sanduiche', valor: 25},
      {nome: 'entrega', valor: 10, entrega : true}
    ]
  };

  const resultado = calcularValorPedido(meuPedido);
  expect(resultado).toBe(35)
})
