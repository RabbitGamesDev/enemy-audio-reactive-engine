// =========================================================================
// RGS LABS™ - HIGH-PRECISION LYRIC ENGINE (V10 - FINAL)
// Timestamps 100% capturados en vivo por Víctor con MAPPING_MODE
// Coro 2 completo (4 loops) | Outro 5x | Fade out final
// =========================================================================

const AUDIO_OFFSET = 0.0;
const MAPPING_MODE = false;

const timeline = [
    // ── VERSO 1 ──
    { text: "I've been out here for a minute",                        start: 15.572, end: 17.472, style: "INTRO"     },
    { text: "Hands clenched as I walk through the fog",               start: 17.572, end: 19.814, style: "INTRO"     },
    { text: "Blood in the water",                                     start: 19.914, end: 21.221, style: "BERSERKER" },
    { text: "Smoke in the air, filling my lungs",                     start: 21.321, end: 23.605, style: "BERSERKER" },
    { text: "You were a friend",                                      start: 23.705, end: 25.030, style: "INTRO"     },
    { text: "Veil torn, now I'm seeing your lies",                    start: 25.130, end: 27.482, style: "GLITCH"    },
    { text: "Full of demise",                                         start: 27.582, end: 28.870, style: "GLITCH"    },
    { text: "Blood moon painting red in the sky",                     start: 28.970, end: 31.351, style: "BERSERKER" },
    { text: "On the surface",                                         start: 31.451, end: 32.701, style: "INTRO"     },

    // ── VERSO 2 ──
    { text: "Your dark heart leading you to the grave",               start: 32.801, end: 35.162, style: "GLITCH"    },
    { text: "Beautiful mask, pure evil behind the charade",           start: 35.262, end: 38.552, style: "GLITCH"    },
    { text: "I hear the warning",                                     start: 38.652, end: 39.525, style: "KINETIC"   },
    { text: "I hear the cries",                                       start: 39.625, end: 40.503, style: "KINETIC"   },
    { text: "Out of the darkness, into the light",                    start: 40.603, end: 42.351, style: "INTRO"     },
    { text: "If you want me gone, you pull the trigger yourself",     start: 42.451, end: 45.022, style: "KINETIC"   },
    { text: "Look me in the eyes",                                    start: 45.122, end: 48.319, style: "INTRO"     },

    // ── CORO 1 ──
    { text: "I see who you are, you are my enemy", start: 48.419, end: 52.461, style: "BERSERKER" },
    { text: "My enemy",                            start: 52.561, end: 54.153, style: "KINETIC"   },
    { text: "You are my enemy",                    start: 54.253, end: 55.912, style: "BERSERKER" },
    { text: "I see who you are, you are my enemy", start: 56.012, end: 60.135, style: "BERSERKER" },
    { text: "My enemy",                            start: 60.235, end: 61.874, style: "KINETIC"   },
    { text: "You are my enemy",                    start: 61.974, end: 65.401, style: "BERSERKER" },

    // ── RAP ──
    { text: "You want me dead, you want me gone, covered in evil you turn on the song", start: 65.501, end: 69.213, style: "RAP"      },
    { text: "Hungry for power, hungry for pain",                                        start: 69.313, end: 71.139, style: "RAP"      },
    { text: "You kill a man if he gets in your way",                                    start: 71.239, end: 73.095, style: "RAP"      },
    { text: "I walk through the valley of shadows, I'm not alone, no I won't fear",    start: 73.195, end: 76.894, style: "GLITCH"   },
    { text: "The hangman's at the gallows",                                             start: 76.994, end: 78.813, style: "BERSERKER"},
    { text: "I'm not afraid of the death in his stare",                                start: 78.913, end: 80.833, style: "BERSERKER"},
    { text: "I'll never be like you!",                                                  start: 80.933, end: 82.140, style: "CRITICAL" },
    { text: "I'll never be like you!",                                                  start: 82.240, end: 83.634, style: "CRITICAL" },

    // ── CLÍMAX ──
    { text: "I'm rising up and I'm ready to fight you!", start: 83.734, end: 85.971, style: "CRITICAL" },
    { text: "Ready to fight you!",                       start: 86.071, end: 87.413, style: "CRITICAL" },
    { text: "I'm all in!",                               start: 87.513, end: 88.532, style: "CRITICAL" },
    { text: "I've seen you before, you water the sand",  start: 88.632, end: 90.374, style: "GLITCH"   },
    { text: "You're just another going up in the flames",start: 90.474, end: 92.262, style: "CRITICAL" },
    { text: "And if I'm dying in the fight...",          start: 92.362, end: 95.400, style: "CRITICAL" },
    { text: "It'll be while I am bringing you down to the grave!", start: 95.500, end: 98.164, style: "CRITICAL" },

    // ── CORO 2 — 4 loops completos ──
    // Loop 1
    { text: "I see who you are, you are my enemy", start: 98.264,  end: 102.335, style: "BERSERKER" },
    { text: "My enemy",                            start: 102.435, end: 104.021, style: "KINETIC"   },
    { text: "You are my enemy",                    start: 104.121, end: 105.693, style: "BERSERKER" },
    // Loop 2
    { text: "I see who you are, you are my enemy", start: 105.793, end: 110.015, style: "BERSERKER" },
    { text: "My enemy",                            start: 110.115, end: 111.695, style: "KINETIC"   },
    { text: "You are my enemy",                    start: 111.795, end: 113.634, style: "BERSERKER" },
    // Loop 3
    { text: "I see who you are, you are my enemy", start: 113.734, end: 117.704, style: "BERSERKER" },
    { text: "My enemy",                            start: 117.804, end: 119.381, style: "KINETIC"   },
    { text: "You are my enemy",                    start: 119.481, end: 121.033, style: "BERSERKER" },
    // Loop 4
    { text: "I see who you are, you are my enemy", start: 121.133, end: 125.334, style: "BERSERKER" },
    { text: "My enemy",                            start: 125.434, end: 127.082, style: "KINETIC"   },
    { text: "You are my enemy",                    start: 127.182, end: 129.923, style: "BERSERKER" },

    // ── OUTRO — 5x "This ends now" ──
    { text: "This ends now!",   start: 130.023, end: 137.374, style: "FLASH" },
    { text: "This ends now!",   start: 137.474, end: 145.111, style: "FLASH" },
    { text: "This ends now!",   start: 145.211, end: 152.733, style: "FLASH" },
    { text: "This ends now!",   start: 152.833, end: 160.472, style: "FLASH" },
    { text: "This ends now...", start: 160.572, end: 163.500, style: "INTRO" },
];

// Timestamp de fin real de la canción para el fade out
const SONG_END = 186.514;


// =========================================================================
// MOTOR DE RENDER — BINARY SEARCH + DRIFT CORRECTION + FADE OUT FINAL
// =========================================================================

const canvas   = document.getElementById("canvas-bg");
const ctx      = canvas.getContext("2d");
const startBtn = document.getElementById("start-btn");
const lyricEl  = document.getElementById("lyric-text");

let audioCtx, analyser, source, dataArray;
let audio        = new Audio("audio/Enemy.mp3");
let particles    = [];
let currentStyle = "INTRO";
let isRunning    = false;

let lastActiveIndex = -1;
let lastFrameTime   = 0;

// Estado del fade out final
let fadeOutActive  = false;
let fadeOutOpacity = 1.0;

// ── Resize ────────────────────────────────────────────────────────────────
function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// ── Partículas ────────────────────────────────────────────────────────────
for (let i = 0; i < 180; i++) {
    particles.push({
        x:      Math.random() * canvas.width,
        y:      Math.random() * canvas.height,
        vx:     (Math.random() - 0.5) * 3,
        vy:     (Math.random() - 0.5) * 3,
        radius: Math.random() * 3 + 1,
        angle:  Math.random() * Math.PI * 2,
        orbit:  Math.random() * 250 + 40
    });
}

// ── Start ─────────────────────────────────────────────────────────────────
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";

    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 64;

    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    dataArray = new Uint8Array(analyser.frequencyBinCount);

    audio.play();
    isRunning = true;
    requestAnimationFrame(renderFrame);
});

// ── Render Loop ───────────────────────────────────────────────────────────
function renderFrame(now) {
    if (!isRunning) return;

    const delta       = now - lastFrameTime;
    lastFrameTime     = now;
    const currentTime = audio.currentTime;

    // ── Fade out final ────────────────────────────────────────────────────
    // Arranca en "This ends now..." (163.5s) y termina en fin de canción
    const FADE_START = 163.500;
    const FADE_END   = SONG_END; // 186.514

    if (currentTime >= FADE_START) {
        fadeOutActive  = true;
        fadeOutOpacity = Math.max(0, 1 - (currentTime - FADE_START) / (FADE_END - FADE_START));
        canvas.style.opacity  = fadeOutOpacity;
        lyricEl.style.opacity = fadeOutOpacity;

        if (fadeOutOpacity <= 0) {
            isRunning = false;
            return;
        }
    }

    let audioForce = 0;
    if (analyser) {
        analyser.getByteFrequencyData(dataArray);
        audioForce = dataArray[0] / 255;
    }

    const activeIndex = binarySearchTimeline(currentTime);

    if (activeIndex !== -1) {
        if (activeIndex !== lastActiveIndex) {
            lastActiveIndex   = activeIndex;
            const node        = timeline[activeIndex];
            lyricEl.innerText = node.text;
            currentStyle      = node.style;
            applySceneTransition(currentStyle);
        }
    } else {
        if (lastActiveIndex !== -1) {
            lastActiveIndex   = -1;
            lyricEl.innerText = "";
        }
    }

    drawBackgroundEffects(audioForce, delta);
    requestAnimationFrame(renderFrame);
}

// ── Búsqueda binaria O(log n) ─────────────────────────────────────────────
function binarySearchTimeline(t) {
    let lo = 0;
    let hi = timeline.length - 1;
    while (lo <= hi) {
        const mid  = (lo + hi) >> 1;
        const node = timeline[mid];
        if      (t < node.start) hi = mid - 1;
        else if (t > node.end)   lo = mid + 1;
        else                     return mid;
    }
    return -1;
}

// ── Transiciones GSAP ─────────────────────────────────────────────────────
function applySceneTransition(style) {
    gsap.killTweensOf(lyricEl);
    lyricEl.style.textShadow = "none";

    if (style === "INTRO") {
        lyricEl.style.color = "#a0c0e0";
        gsap.fromTo(lyricEl, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.04 });
    }
    else if (style === "GLITCH") {
        lyricEl.style.color = "#00ffaa";
        lyricEl.style.textShadow = "0 0 15px #00ffaa";
        gsap.fromTo(lyricEl, { x: -6 }, { x: 6, duration: 0.02, repeat: 4, yoyo: true });
    }
    else if (style === "BERSERKER") {
        lyricEl.style.color = "#ffffff";
        lyricEl.style.textShadow = "0 0 25px #ff0044";
        gsap.fromTo(lyricEl, { scale: 1.15 }, { scale: 1, duration: 0.05 });
    }
    else if (style === "KINETIC") {
        lyricEl.style.color = "#00aaff";
        gsap.fromTo(lyricEl, { x: -30 }, { x: 0, duration: 0.06 });
    }
    else if (style === "RAP") {
        lyricEl.style.color = "#ffff00";
        gsap.fromTo(lyricEl, { y: 10 }, { y: 0, duration: 0.04 });
    }
    else if (style === "CRITICAL") {
        lyricEl.style.color = "#ff3300";
        lyricEl.style.textShadow = "0 0 35px #ff0000";
        gsap.fromTo(lyricEl, { scale: 0.95 }, { scale: 1.1, duration: 0.04 });
    }
    else if (style === "FLASH") {
        lyricEl.style.color = "#FFFFFF";
        lyricEl.style.textShadow = "0 0 40px #FFFFFF";
        gsap.fromTo(lyricEl, { opacity: 0 }, { opacity: 1, duration: 0.03 });
    }
}

// ── Background Effects con delta-time ────────────────────────────────────
function drawBackgroundEffects(force, delta) {
    const dtFactor = delta / 16.67;

    ctx.fillStyle = (currentStyle === "FLASH" && Math.random() > 0.4)
        ? "rgba(255,255,255,0.95)"
        : "rgba(2, 3, 6, 0.25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        if (currentStyle === "BERSERKER" || currentStyle === "CRITICAL") {
            p.x += p.vx * (1 + force * 10) * dtFactor;
            p.y += p.vy * (1 + force * 10) * dtFactor;
            if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height)  p.vy *= -1;
            ctx.fillStyle = "#ff0044";
        } else {
            p.angle += 0.01 * dtFactor;
            p.x = (canvas.width  / 2) + p.orbit * Math.cos(p.angle);
            p.y = (canvas.height / 2) + p.orbit * Math.sin(p.angle);
            ctx.fillStyle = "#4b87d7";
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// ── Mapping Mode ──────────────────────────────────────────────────────────
if (MAPPING_MODE) {
    let devIndex = 0;
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && isRunning) {
            console.log(`Frase ${devIndex} → Marca EXACTA: ${audio.currentTime.toFixed(3)}`);
            devIndex++;
        }
    });
}