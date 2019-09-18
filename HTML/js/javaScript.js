//Função mde alerata da pagina//
function alerta() {
    alert('Site Criado Com Html, CSS e JavaScript');
    console.log('Teste');
}

//Função de troca texto do cabeçalho//
function trocar_texto() {
    document.getElementById('troca').innerHTML = "Hello World The JavaScript";
}

//Função de trocar imagens//
function trocar_img() {
    var elemento = document.getElementById('trocar');
    if (elemento.src.match('img_01')) {
        elemento.src="img/img_02.jpg";
    } else if (elemento.src.match('img_02')) {
        elemento.src="img/img_03.png";
    } else if (elemento.src.match('img_03')) {
        elemento.src="img/img_04.jpg"; 	
    } else {
        elemento.src="img/img_01.jpg";
    }
}

//Função de proteger o codigo//
function protegercodigo() {
    if (event.button==2||event.button==3){
        alert('Codigo protegido!');}
    }

    document.onmousedown=protegercodigo;

//Função para somar//
function Soma() {
    var valor1 = parseInt(document.getElementById('campo1').value);
    var valor2 = parseInt(document.getElementById('campo2').value);

    document.getElementById('resposta').innerHTML = "RESPOSTA = " + (valor1+valor2);
}
