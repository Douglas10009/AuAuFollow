const lobo = document.querySelector('.lobo')
const osso = document.querySelector('.osso')

const jump = () => {
    
    lobo.classList.add('jump');
    setTimeout(() => {

        lobo.classList.remove('jump');

    }, 500 );

}

const loop = setInterval(() =>{

const ossoPosition = osso.offsetLeft;
const loboPosition = +window.getComputedStyle(lobo).bottom.replace('px', '');

if(ossoPosition <= 180 && ossoPosition > 0 && loboPosition < 90){

osso.style.animation = 'none';
osso.style.left = `${ossoPosition}px`;

lobo.style.animation = 'none';
lobo.style.bottom = `${loboPosition}px`;

lobo.src = './img/gameover-transformed.png'
lobo.style.width = '200px'
lobo.style.marginLeft = "50px"

clearInterval(loop);

}

},10  )

document.addEventListener('keydown' , jump);