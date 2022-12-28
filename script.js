const kakashi = document.querySelector(".character");
const trunk = document.querySelector(".trunk");
const jump = () =>
{
    
    kakashi.classList.add('jump');
    setTimeout(() => {
        kakashi.classList.remove('jump');
    }, "500");
    
}


const loop = setInterval(() => {
    
    const kakashibottom = +window.getComputedStyle(kakashi).bottom.replace('px', '');
    const trunkleft = trunk.offsetLeft;
    console.log(trunkleft)


    if(trunkleft <= -95 && trunkleft > -163 && kakashibottom < 60)
    {
        trunk.style.animation = 'none';
        trunk.style.left = `${trunkleft}px`;

        kakashi.classList.remove('jump');
        kakashi.style.bottom = `${kakashibottom}px`

        
    }
}, 10);

document.addEventListener('keydown', jump);

