const negociacao = new Negociacao(new Date(), 1, 100 )
const negociacaoController = new NegociacaoController();

document
    .querySelector('.form')
    .addEventListener('submit', negociacaoController.adiciona.bind(negociacaoController))