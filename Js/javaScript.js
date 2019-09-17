var jogador = 'X';
var empate = 0;

//Função para selecionar campo da tabela//
function clickcelula(id) {
	var src = checaSrc(id);
	var cpu = document.getElementById('cpu').checked;
	if (src == "img_02.png") {
		document.getElementById(id).src = "img/" + jogador + ".png";
		empate++;
		if (ganhador()) {
			alert("FIM DO JOGO!! VITÓRIA DO " + jogador + " !!");
			location.reload();
		} else if (empate >= 9) {
			alert("FIM DO JOGO!! - EMPATE!!");
			location.reload();
		} else if (jogador == 'X') {
			jogador = 'O';
		} else {
			jogador = 'X';
		}
	}

	if (cpu && jogador == 'O') {
		clickcelula(computador());
	}
}



//Função para jogar contra a CPU//
function computador() {
	return 'celula' + Math.floor((Math.random() * 9) + 1);
}

//Função para pega o elemento src que recebe o id//
function checaSrc(id) {
	var src = document.getElementById(id).src;
	return src.substring(src.length - 10, src.length);
}

//Função das jogadas//
function ganhador() {
	if ((checaSrc('celula1') == checaSrc('celula2')) && (checaSrc('celula1') == checaSrc('celula3')) && checaSrc('celula1') != 'img_02.png') {
		return true;
	}
	else if ((checaSrc('celula4') == checaSrc('celula5')) && (checaSrc('celula4') == checaSrc('celula6')) && checaSrc('celula4') != 'img_02.png') {
		return true;
	}
	else if ((checaSrc('celula7') == checaSrc('celula8')) && (checaSrc('celula7') == checaSrc('celula9')) && checaSrc('celula7') != 'img_02.png') {
		return true;
	}
	else if ((checaSrc('celula1') == checaSrc('celula4')) && (checaSrc('celula1') == checaSrc('celula7')) && checaSrc('celula1') != 'img_02.png') {
		return true;
	}
	else if ((checaSrc('celula2') == checaSrc('celula5')) && (checaSrc('celula2') == checaSrc('celula8')) && checaSrc('celula2') != 'img_02.png') {
		return true;
	}
	else if ((checaSrc('celula3') == checaSrc('celula6')) && (checaSrc('celula3') == checaSrc('celula9')) && checaSrc('celula3') != 'img_02.png') {
		return true;
	}
	else if ((checaSrc('celula1') == checaSrc('celula5')) && (checaSrc('celula1') == checaSrc('celula9')) && checaSrc('celula1') != 'img_02.png') {
		return true;
	}
	else if ((checaSrc('celula3') == checaSrc('celula5')) && (checaSrc('celula3') == checaSrc('celula7')) && checaSrc('celula3') != 'img_02.png') {
		return true;
	}
	else {
		return false;
	}
}