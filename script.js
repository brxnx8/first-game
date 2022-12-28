const kakashi = document.querySelector(".character");
const trunk = document.querySelector(".trunk");
const points = document.querySelector(".points");

let point = 0;


const jump = () =>
{
    var trunkl = trunk.offsetLeft;
    kakashi.src = 'assets/jump.png';
    kakashi.classList.add('jump');
    setTimeout(() => {
        kakashi.src = 'assets/kakashi.gif';
        kakashi.classList.remove('jump');
    }, "500");
    if(trunkl > -80 && trunkl < 173)
    {
        point++;
        
    }
    points.textContent = `Score = ${point}`;
}



const loop = setInterval(() => {
    

    const kakashibottom = +window.getComputedStyle(kakashi).bottom.replace('px', '');
    const trunkleft = trunk.offsetLeft;


    if(trunkleft <= -90 && trunkleft > -163 && kakashibottom < 60)
    {
        kakashi.src = 'assets/jump.png';
        
        document.removeEventListener('keydown', jump);
        
        trunk.style.animation = 'none';
        trunk.style.left = `${trunkleft}px`;
        
        
        kakashi.classList.remove('jump');
        kakashi.style.bottom = `${kakashibottom}px`

        clearInterval(loop);

    }
}, 10);



document.addEventListener('keydown', jump);

