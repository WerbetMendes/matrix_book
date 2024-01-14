//MATRIX BACKGROUND

let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = " チ ク ら ぷ js:2  ヴ ゆ た ぞ 17  ヺ ヹ YY  ず ほ ゑ ぢ M5r  ポ オ た #1な $!$  ヤ ヒ ダ ギ $Ew er JH # ず * . (! ;) ,: :";
let matrix = str.split("");
let font = 14;
let col = width / font;
let arr = [];

for(let i=0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 20);

window.addEventListener("resize", () => location.reload());



//LOADING AFTER
setTimeout(function() {
    document.querySelector('main').style.display = 'block';
}, 3000);



//TYPEWRITING EFFECT
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ['seu cérebro.', 'sua produtividade.', 'seus relacionamentos.'];
const elem = document.getElementById('typewriter');

let sleepTime = 100;
let curPhraseIndex = 0;
const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
            elem.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }
       
        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            elem.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime - 70);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

writeLoop();


