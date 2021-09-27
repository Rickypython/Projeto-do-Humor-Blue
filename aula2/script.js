var botao1 = document.getElementById("botao");
var valorDoBotao = botao1.value;
var p1 = document.getElementById("p1");
var imagem1 = document.getElementById("fotopit");

botao1.onclick = function (event) {
    var value = event.target.value;
    if (value === "estado1") {
        imagem1.src = 'https://image.cachorrogato.com.br/textimages/cao-bravo.jpg';
    
        botao1.value = "estado2";
        p1.innerHTML = "O canino bravo...";
    } else if (value === "estado2" ) {
        imagem1.src = '  <img src="https://thumbs.dreamstime.com/z/filhote-de-cachorro-de-pitbull-branco-e-marrom-15055294.jpg';
        botao1.value = "estado1";
        p1.innerHTML = "O canino calmo...";

    } else if (value === "estado3" ) {
        imagem1.src = 'https://www.dicaspetz.com.br/wp-content/uploads/2020/07/curiosidades-sobre-pitbull-pet.jpg' ;
        botao1.value = "estado1";
        // Lembra de mudar a URL acima para o noem do arquivo da imagem que pretenda utilizar...
        p1.innerHTML = "O canino calmo...";
    }
}
