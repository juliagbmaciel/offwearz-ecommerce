'use strict';
console.log('loh')

const preencherFormulario = (endereco) => {
  var enderecoCidade = endereco.cidade;
  
  // Verifica se o CEP abrange a região de Campinas ou Hortolândia
  if (enderecoCidade === 'Campinas' || enderecoCidade === 'Hortolândia') {
    alert('Seu CEP abrange a região de ' + enderecoCidade + '. Enviamos para você!!');
  } else {
    alert('Seu CEP não abrange Campinas nem Hortolândia. Infelizmente não enviamos para a sua cidade');
  }
}

const pesquisarCep = async (e) => {
  const cep = document.getElementById('cepPrin').value;
  const url = `https://api.postmon.com.br/v1/cep/${cep}`;

  try {
    const response = await fetch(url);
    const endereco = await response.json();

    preencherFormulario(endereco, e);
  } catch (error) {
    alert("Seu CEP não abrange Campinas nem Hortolândia. Infelizmente não enviamos para a sua cidade");
  }
}

document.querySelector('.botao-cep').addEventListener('click', function(e){
  e.preventDefault(); // Previne o comportamento padrão do botão de submit
  pesquisarCep(e); // Chama a função para pesquisar o CEP
});

document.querySelector('.botao-cep').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    pesquisarCep(); // Chama a função para pesquisar o CEP ao pressionar a tecla Enter
  }
});
