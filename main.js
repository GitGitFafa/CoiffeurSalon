/*Cria uma seleção dos objetos relacionados ao menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

/*Cria o sistema de abrir e fechar o menu (evento de click )*/
for ( const element of toggle){
  element.addEventListener('click', function (){nav.classList.toggle('show')
})
}

/* quando clicar em um item do menu, esconder o menu*/


/*query= pesquisar, Selector são os seletores que se quer do documento( no caso  todos que sejam nav, ul li e a), document é o documento usado. Pega tudo isso e atribui a constante links.*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}