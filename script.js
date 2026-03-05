/* spectrum */

const spectrum = document.getElementById("spectrum")
const sctx = spectrum.getContext("2d")

spectrum.width = window.innerWidth
spectrum.height = 120
let lastTime = 0
const fps = 15
const interval = 1000 / fps

function drawSpectrum(time) {

    if (time - lastTime < interval) {
        requestAnimationFrame(drawSpectrum)
        return
    }

    lastTime = time

    sctx.clearRect(0, 0, spectrum.width, spectrum.height)

    let bars = 60

    for (let i = 0; i < bars; i++) {

        let height = Math.random() * 100
        let x = i * (spectrum.width / bars)

        sctx.fillStyle = "corangen"

        sctx.fillRect(x, spectrum.height - height, 6, height)

    }

    requestAnimationFrame(drawSpectrum)

}

requestAnimationFrame(drawSpectrum)

/* partículas */

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for (let i = 0; i < 80; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - .5) * 0.5,
        dy: (Math.random() - .5) * 0.5

    })

}

function animateParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)

        ctx.fillStyle = "rgba(255, 123, 0, 0.8)"
        ctx.fill()

    })

    requestAnimationFrame(animateParticles)

}

animateParticles()

/* luces que siguen el mouse */

document.addEventListener("mousemove", e => {

    const glow = document.querySelector(".neon-bg")

    glow.style.background =

        `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
rgba(255, 0, 0, 0.25),
transparent 40%)`

})