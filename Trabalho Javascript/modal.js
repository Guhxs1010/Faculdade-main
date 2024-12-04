// Array para armazenar produtos no carrinho
let carrinho = [];

document.querySelectorAll('.btn-comprar').forEach(button => {
  button.addEventListener('click', () => {
    const produtoDiv = button.parentElement;
    const nome = produtoDiv.getAttribute('data-nome');
    const preco = produtoDiv.getAttribute('data-preco');
    const imagemSrc = produtoDiv.querySelector('img').src;

    // Verifica se o produto já está no carrinho, se estiver, incrementa a quantidade
    const produtoExistente = carrinho.find(produto => produto.nome === nome);
    
    if (produtoExistente) {
      produtoExistente.quantidade += 1; // Incrementa a quantidade
    } else {
      // Caso o produto não exista, adiciona ao carrinho com quantidade 1
      const produto = { nome, preco, imagemSrc, quantidade: 1 };
      carrinho.push(produto);
    }

    // Atualiza o modal com os produtos
    atualizarCarrinho();

    // Exibe o modal
    document.getElementById('modal-produto').style.display = 'block';
  });
});

function atualizarCarrinho() {
  const carrinhoLista = document.getElementById('carrinho-lista');
  carrinhoLista.innerHTML = '';

  carrinho.forEach((produto, index) => {
    const item = document.createElement('div');
    item.classList.add('carrinho-item');
    item.innerHTML = `
      <img src="${produto.imagemSrc}" alt="${produto.nome}">
      <div class="carrinho-info">
        <h4>${produto.nome}</h4>
        <p>Preço: R$ ${produto.preco}</p>
        <p>Quantidade: <span class="quantidade">${produto.quantidade}</span></p>
      </div>
      <span class="remover-item" data-index="${index}">
        <i class="fas fa-trash"></i> <!-- Ícone de lixeira -->
      </span>
      <button class="decrementar" data-index="${index}">-</button>
      <button class="incrementar" data-index="${index}">+</button>
    `;

    carrinhoLista.appendChild(item);
  });

  // Botão de remover item
  document.querySelectorAll('.remover-item').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      carrinho.splice(index, 1);
      atualizarCarrinho();
    });
  });

  // Botões de incremento e decremento
  document.querySelectorAll('.incrementar').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      carrinho[index].quantidade += 1; // Incrementa a quantidade
      atualizarCarrinho();
    });
  });

  document.querySelectorAll('.decrementar').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1; // Decrementa a quantidade, mas não pode ir abaixo de 1
        atualizarCarrinho();
      }
    });
  });
}

document.querySelector('.close').onclick = function() {
  document.getElementById('modal-produto').style.display = 'none';
};

document.getElementById('finalizar-compra').addEventListener('click', () => {
  if (carrinho.length > 0) {
    alert('Compra finalizada com sucesso!');
    carrinho = []; // Limpar o carrinho
    atualizarCarrinho();
  } else {
    alert('Carrinho vazio! Adicione produtos antes de finalizar.');
  }
  document.getElementById('modal-produto').style.display = 'none';
});

document.getElementById('cancelar-compra').addEventListener('click', () => {
  document.getElementById('modal-produto').style.display = 'none';
});
