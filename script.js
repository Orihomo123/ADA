// =========================
// הרבץ לנתאי - Menu Script
// =========================

const playButton = document.getElementById("playButton");
const flowers = document.getElementById("flowers");
const butterflies = document.getElementById("butterflies");
const particles = document.getElementById("particles");

// -------------------------
// PLAY BUTTON
// -------------------------

playButton.addEventListener("click", () => {

    playButton.innerHTML = "טוען...";

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        alert("כאן יתחיל המשחק!");

        document.body.style.opacity = "1";
        playButton.innerHTML = "▶ שחק";

    },1000);

});

// -------------------------
// RANDOM FLOWERS
// -------------------------

for(let i=0;i<90;i++){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.style.left=Math.random()*100+"vw";

    flower.style.bottom=(Math.random()*170)+"px";

    flower.style.animationDelay=Math.random()*5+"s";

    flower.style.background=[
        "#ff4d6d",
        "#ffcc00",
        "#ffffff",
        "#ff66ff",
        "#00d4ff"
    ][Math.floor(Math.random()*5)];

    flowers.appendChild(flower);

}

// -------------------------
// BUTTERFLIES
// -------------------------

for(let i=0;i<8;i++){

    const b=document.createElement("div");

    b.className="butterfly";

    b.style.left=Math.random()*100+"vw";
    b.style.top=250+Math.random()*250+"px";

    b.style.animationDuration=(6+Math.random()*8)+"s";

    butterflies.appendChild(b);

}

// -------------------------
// PARTICLES
// -------------------------

function createParticle(){

    const p=document.createElement("div");

    p.className="particle";

    p.style.left=Math.random()*window.innerWidth+"px";

    p.style.top=window.innerHeight+"px";

    p.style.animationDuration=(3+Math.random()*4)+"s";

    particles.appendChild(p);

    setTimeout(()=>{

        p.remove();

    },7000);

}

setInterval(createParticle,250);

// -------------------------
// CAMERA MOVEMENT
// -------------------------

let t=0;

setInterval(()=>{

    t+=0.01;

    document.body.style.backgroundPositionX=
        Math.sin(t)*20+"px";

},30);

// -------------------------
// TREE SWAY RANDOMIZER
// -------------------------

document.querySelectorAll(".tree").forEach(tree=>{

    tree.style.animationDuration=
    (3+Math.random()*2)+"s";

});

// -------------------------
// BUTTON HOVER SOUND READY
// -------------------------

document.querySelectorAll(".menuButton").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.08) rotate(-1deg)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});

// -------------------------
// SPARKLES
// -------------------------

setInterval(()=>{

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"vw";

    s.style.top=Math.random()*70+"vh";

    particles.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },2000);

},500);

// -------------------------
// DAY/NIGHT TINT
// -------------------------

let day=true;

setInterval(()=>{

    if(day){

        document.body.style.filter="brightness(.95)";

    }else{

        document.body.style.filter="brightness(1)";

    }

    day=!day;

},20000);

// -------------------------
// FPS COUNTER (REMOVE LATER)
// -------------------------

const fps=document.createElement("div");

fps.style.position="absolute";
fps.style.left="10px";
fps.style.top="10px";
fps.style.color="white";
fps.style.fontSize="10px";
fps.style.fontFamily="monospace";

document.body.appendChild(fps);

let frames=0;

setInterval(()=>{

    fps.innerHTML="MENU";

    frames=0;

},1000);

function loop(){

    frames++;

    requestAnimationFrame(loop);

}

loop();
