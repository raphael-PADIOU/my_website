let vantaEffect;

function initVanta() {
    if (vantaEffect) vantaEffect.destroy();
    vantaEffect = VANTA.TOPOLOGY({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe00018,
        backgroundColor: 0x0
    });
}

// Initialisation au chargement
initVanta();

// Recalcul au redimensionnement
window.addEventListener('resize', () => {
    initVanta();
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});