$('.carousel').slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5
});

let nameProducts = ["Jaqueta jeans azul escuro botões feminina estilo inverno", 
                    "Casaco de lã branco e verde romântico estilo inverno quente", 
                    "Cardigan preto oversized pelinhos inverno moda estilo", 
                    "Jaqueta Acolchoada de Inverno com Capuz Removível e Forro Térmico ",
                    "Jaqueta jeans pelinhos botões azul inverno moda estilo",
                    "Jaqueta puffer preta botões pelinhos hipermeável",
                    "Sobretudo oversized botoes preto pelinhos estilo inverno"]
let descProducts = [`A jaqueta jeans escura é uma peça clássica e atemporal que combina com diversos estilos. Feita de jeans resistente, essa jaqueta oferece durabilidade e estilo. Seu tom escuro confere elegância e versatilidade, permitindo que seja usada em diversas ocasiões. Com bolsos funcionais e um design moderno, essa jaqueta é uma escolha perfeita para quem busca um visual casual e estiloso.`,
                    `O casaco de lã verde e branco larguinho é uma opção moderna e estilosa para os dias frios. Feito com um tecido de lã macio e quente, esse casaco apresenta uma combinação de cores verde e branco, criando um visual único e atraente. Seu corte larguinho e descontraído proporciona conforto e liberdade de movimento. Com detalhes cuidadosamente elaborados e uma paleta de cores elegante, esse casaco é uma peça-chave para criar looks fashion e contemporâneos.`,
                    `O cardigan preto com pelinhos é uma peça aconchegante e elegante para os dias mais frios. Feito de um tecido macio e confortável, esse cardigan apresenta um toque de pelinhos na superfície, adicionando textura e estilo. Com um corte clássico e versátil, ele pode ser usado sobre outras roupas como uma camada extra de calor. O cardigan preto é uma escolha versátil para combinar com diferentes estilos e ocasiões.`,
                    `A jaqueta puffer verde é uma escolha moderna e vibrante para os dias mais frios. Feita com um material leve e isolante, essa jaqueta puffer oferece conforto e aquecimento. Seu tom verde vibrante adiciona um toque de cor aos looks de inverno. Com um corte ajustado e detalhes cuidadosamente projetados, essa jaqueta é uma opção fashion e funcional para se manter aquecido com estilo.`,
                    `A jaqueta jeans clara com pelinhos dentro é uma peça versátil e estilosa para os dias mais frios. Feita de jeans de alta qualidade, ela apresenta um forro de pelinhos macios no interior, proporcionando conforto e aquecimento. Com um corte moderno e detalhes despojados, essa jaqueta é perfeita para criar looks descontraídos e cheios de estilo.`,
                    `A jaqueta puffer preta é uma opção prática e estilosa para os dias frios. Feita com um material resistente e acolchoado, essa jaqueta oferece isolamento térmico e proteção contra o vento. Seu design leve e compacto torna fácil de ser transportada. Com um acabamento preto clássico, essa jaqueta puffer é versátil e pode ser combinada com diferentes estilos de roupas, desde looks esportivos até mais casuais.`,
                    `O sobretudo oversized com botões é uma peça sofisticada e elegante para os dias mais frios. Feito com um corte amplo e oversized, esse sobretudo proporciona um visual moderno e confortável. Os botões adicionam um toque de estilo e funcionalidade, permitindo ajustar o fechamento de acordo com a preferência. Com tecido de alta qualidade e detalhes cuidadosamente trabalhados, esse sobretudo é uma escolha perfeita para quem deseja se destacar com um visual fashion e contemporâneo.`]
let valProducts = [299.90, 255.50, 267.70, 278.90, 399.90, 400.00, 300.00]
let imgProducts = ["img/produtos/j_Es.png", "img/produtos/l_Ve.png", "img/produtos/c_Pr.png", "img/produtos/p_Ve.png", "img/produtos/j_Cl.png", "img/produtos/p_Pr.png", "img/produtos/s_Ov.png"]
var cards = document.querySelector('.cards');

for (var i = 0; i < 3; i++) {
    console.log("oi")
    cards.innerHTML += `
      <div class="item">
                    <a href="#" class="position-absolute end-0 p-2 text-danger">
                        <i class="fa-regular fa-heart"></i>
                    </a><img src="${imgProducts[i]}" alt="">
                    <p>${nameProducts[i]}</p>
                    <h3>${valProducts[i].toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</br><span>7x de ${(valProducts[i]/7).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span></h3>
                    <div class="fix">
                        <button class="glow-on-hover"><a href="./produtos/index.html">Ir às compras</a> </button>
                    </div>
                </div>
                
  `;
  }

  
  
  
  
  
  
  