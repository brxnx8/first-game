const kakashi = document.querySelector(".character");
const trunk = document.querySelector(".trunk");
const points = document.querySelector(".points");
const cloud = document.querySelector("#cloud");
const cloud2 = document.querySelector("#cloud2");
const cloud3 = document.querySelector("#cloud3");

let point = 0;


const jump = () =>
{
    document.querySelector(".div-init").style.display = 'none';

    trunk.classList.add('trunk-animation');
    
    var trunkl = trunk.offsetLeft;
    kakashi.src = 'assets/jump.png';
    kakashi.classList.add('jump');
    setTimeout(() => {
        kakashi.src = 'assets/kakashi.gif';
        kakashi.classList.remove('jump');
    }, "500");
    if(trunkl > -89 && trunkl < 230)
    {
        point++;
        
    }
    points.textContent = `Score = ${point}`;
}



const loop = setInterval(() => {
    
    const cloudleft = cloud.offsetLeft;
    const cloud2left = cloud2.offsetLeft;
    const cloud3left = cloud3.offsetLeft;
    const kakashibottom = +window.getComputedStyle(kakashi).bottom.replace('px', '');
    const trunkleft = trunk.offsetLeft;

    if(trunkleft <= -90 && trunkleft > -163 && kakashibottom < 60)
    {

        document.removeEventListener('keydown', jump);
        
        trunk.style.animation = 'none';
        trunk.style.left = `${trunkleft}px`;
        
        kakashi.src = 'assets/jump.png';
        kakashi.classList.remove('jump');
        kakashi.style.bottom = `${kakashibottom}px`

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudleft}px`;
        cloud2.style.animation = 'none';
        cloud2.style.left = `${cloud2left}px`;
        cloud3.style.animation = 'none';
        cloud3.style.left = `${cloud3left}px`;

        points.classList.add("end-point");

        document.querySelector(".restart").style.display = 'block';

        document.querySelector('main').classList.add('end');

        clearInterval(loop);

    }
}, 10);



document.addEventListener('keydown', jump);

