var numeroAleatorio = Math.floor(Math.random()*100) + 1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;

function conferirPalpite(){
    var palpiteUsuario = Number(campoPalpite.value);
    if(contagemPalpites === 1){
        palpites.textContent = 'Palpites Anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabéns! você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else if(contagemPalpites === 10){
        ultimoResultado.textContent = 'Fim de JOGO, você não acertou o número!';
        baixoOuAlto.textContent = ' ';
        configFimDeJogo();
    }else{
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'Seu Palpite está muito baixo!';
        }else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }

    contagemPalpites++;
    campoPalpite.value = ' ';
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite);

function configFimDeJogo(){
    campoPalpite.disable = true;
    envioPalpite.disable = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo?';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo(){
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for(var i = 0; i < reiniciarParas.length; i++){
        reiniciarParas[i].textContent = ' ';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disable = false;
    envioPalpite.disable = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}