let contador = 0;
let continuarContador = true;
let continuarLoopOsso = true;
let continuarAnimacaoLobo = true;

const osso = document.querySelector('.osso');
const lobo = document.querySelector('.lobo');

function iniciarContador() {
    if (continuarContador) {
        contador += 1;
        document.getElementById("contador").innerText = contador;
        requestAnimationFrame(iniciarContador);
    }
}

function verificarCondicao() {
    const ossoPosition = osso.offsetLeft;
    const loboPosition = lobo.offsetLeft;
    const loboHeight = parseInt(lobo.style.bottom) || 0;

    if (loboHeight < 200 && ossoPosition <= 180 && ossoPosition > 0 && loboPosition < 90) {
        pararContador();
        pararLoopOsso();
        pararAnimacaoLobo();
        lobo.style.backgroundImage = lobo.src = './img/gameover-transformed.png';
    } else {
        requestAnimationFrame(verificarCondicao);
    }
}

function pararContador() {
    continuarContador = false;
}

function pararLoopOsso() {
    continuarLoopOsso = false;
}

function pararAnimacaoLobo() {
    continuarAnimacaoLobo = false;
}

const jumpHeight = 200;
const jumpDuration = 500; // Duração do pulo em milissegundos

const jump = () => {
    if (continuarAnimacaoLobo) {
        lobo.classList.add('jump');
        setTimeout(() => {
            lobo.style.transition = `bottom ${jumpDuration / 4000}s ease-out`; // Aplica uma transição na descida
            lobo.style.bottom = `${jumpHeight}px`; // Define a altura máxima do pulo
            setTimeout(() => {
                lobo.style.transition = ''; // Remove a transição após o pulo
                lobo.style.bottom = '0px'; // Define o lobo de volta ao chão
                lobo.classList.remove('jump');
            }, jumpDuration); // Duração do pulo em milissegundos
        }, 10); // Pequeno atraso para garantir a aplicação da classe jump antes de alterar a posição do lobo
    }
}

document.addEventListener('keydown', jump);

const velocidadeOsso = 30;

function moverOsso() {
    const ossoPosition = osso.offsetLeft;
    osso.style.left = `${ossoPosition - velocidadeOsso}px`;

    if (ossoPosition + osso.offsetWidth < 0) {
        osso.style.left = '100%';
        continuarLoopOsso = true;
    }

    if (continuarLoopOsso) {
        requestAnimationFrame(moverOsso);
    }
}

iniciarContador();
verificarCondicao();
moverOsso();