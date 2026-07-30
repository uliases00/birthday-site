// ===============================
// ЗВЁЗДНОЕ НЕБО
// ===============================

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {
    const star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay = Math.random() * 3 + "s";

    stars.appendChild(star);
}

// ===============================
// ПЕРЕКЛЮЧЕНИЕ ЭКРАНОВ
// ===============================

function hideAll() {

    document.getElementById("letterSection").classList.add("hidden");
    document.getElementById("gallerySection").classList.add("hidden");
    document.getElementById("reasonsSection").classList.add("hidden");
    document.getElementById("finalSection").classList.add("hidden");

}

function openGift() {

    document.querySelector(".welcome").style.display = "none";

    hideAll();

    document.getElementById("letterSection").classList.remove("hidden");

    heartRain();

}

function nextPage() {

    hideAll();

    document.getElementById("gallerySection").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function showReasons() {

    hideAll();

    document.getElementById("reasonsSection").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

function showFinal() {

    hideAll();

    document.getElementById("finalSection").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    heartRain();

}

// ===============================
// ДОЖДЬ ИЗ СЕРДЕЧЕК
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = ["❤️", "💖", "💕", "💗", "💘", "💝"][Math.floor(Math.random() * 6)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = -30;

    const speed = 2 + Math.random() * 4;

    const fall = setInterval(() => {

        y += speed;

        heart.style.top = y + "px";

        if (y > window.innerHeight + 40) {

            clearInterval(fall);

            heart.remove();

        }

    }, 16);

}

function heartRain() {

    for (let i = 0; i < 120; i++) {

        setTimeout(createHeart, i * 120);

    }

}

// ===============================
// КОНФЕТТИ (ПРОСТАЯ ВЕРСИЯ)
// ===============================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const pieces = [];

function startConfetti() {

    pieces.length = 0;

    for (let i = 0; i < 180; i++) {

        pieces.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,

            r: Math.random() * 6 + 3,

            dy: Math.random() * 3 + 2,

            color: [
                "#ff4fa2",
                "#ffd700",
                "#ffffff",
                "#7ee8fa",
                "#ff8fab"
            ][Math.floor(Math.random() * 5)]

        });

    }

    animateConfetti();

}

function animateConfetti() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    pieces.forEach(p => {

        ctx.fillStyle = p.color;

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

        ctx.fill();

        p.y += p.dy;

        if(p.y > canvas.height){

            p.y = -20;

        }

    });
requestAnimationFrame(animateConfetti);

}

// Запустить конфетти на финальном экране
const originalShowFinal = showFinal;
showFinal = function () {
    originalShowFinal();
    startConfetti();
};
