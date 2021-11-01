const botao = document.querySelector ("#btn"); // criar uma variável constante para que o seletor encontre onde quero que tenha a função

const imagem1 = document.querySelector ("#imagempri");

const frase = document.querySelector ("#fraseprincipal");


btn.addEventListener ("click", function () { //aqui coloca o nome da id para adicionar o evento
    if (botao.value == 'primeiro'){
        imagem1.src = "cão manso.jpg"
        frase.innerText = "Pela manhã o cão estava calmo,sereno...!"
        botao.value = 'segundo'
    }

    else if (botao.value == "segundo"){
        imagem1.src = "cão atento.jpg"
        frase.innerText = "Derrepente ele escuta algo e fica atento..."
        botao.value = "terceiro"
    }

    else {
        imagem1.src = "cão feroz.jpg"
        frase.innerText = "E aparece um gato e o cão fica muito feroz...."
        botao.value = "primeiro"
    }
  });


