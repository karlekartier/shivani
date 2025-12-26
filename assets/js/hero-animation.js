/**
 * Hero Background Animation
 * High-performance canvas-based wavy lines
 */

class HeroAnimation {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');

        this.lines = [];
        this.lineCount = 15;
        this.mouse = { x: -1000, y: -1000, active: false };
        this.tick = 0;

        this.init();
        this.animate();
        this.addEventListeners();
    }

    init() {
        this.resize();
        this.createLines();
    }

    resize() {
        this.width = this.canvas.width = this.canvas.parentElement.offsetWidth;
        this.height = this.canvas.height = this.canvas.parentElement.offsetHeight;

        // Reset lines on resize to match new dimensions
        this.createLines();
    }

    createLines() {
        this.lines = [];
        for (let i = 0; i < this.lineCount; i++) {
            this.lines.push({
                y: (this.height / this.lineCount) * i,
                amplitude: 20 + Math.random() * 40,
                speed: 0.005 + Math.random() * 0.01,
                offset: Math.random() * Math.PI * 2,
                segments: 50,
                color: 'rgba(255, 255, 255, ' + (0.1 + (i / this.lineCount) * 0.3) + ')'
            });
        }
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.resize());

        const container = this.canvas.parentElement.parentElement;
        container.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
            this.mouse.active = true;
        });

        container.addEventListener('mouseleave', () => {
            this.mouse.active = false;
        });

        container.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                const rect = this.canvas.getBoundingClientRect();
                this.mouse.x = e.touches[0].clientX - rect.left;
                this.mouse.y = e.touches[0].clientY - rect.top;
                this.mouse.active = true;
            }
        });

        container.addEventListener('touchend', () => {
            this.mouse.active = false;
        });
    }

    draw() {
        // Only draw if dark mode is active
        if (!document.documentElement.classList.contains('dark') &&
            document.documentElement.getAttribute('data-bs-theme') !== 'dark') {
            this.ctx.clearRect(0, 0, this.width, this.height);
            return;
        }

        this.ctx.clearRect(0, 0, this.width, this.height);
        this.tick += 1;

        this.lines.forEach((line, index) => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = line.color;
            this.ctx.lineWidth = 1.5;

            for (let x = 0; x <= this.width; x += 10) {
                let y = line.y;

                // Sine wave motion
                const sine = Math.sin(x * 0.003 + this.tick * line.speed + line.offset);
                y += sine * line.amplitude;

                // Mouse interaction
                if (this.mouse.active) {
                    const dx = x - this.mouse.x;
                    const dy = y - this.mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const force = Math.max(0, (200 - distance) / 200);

                    if (force > 0) {
                        y += (this.mouse.y - y) * force * 0.2;
                    }
                }

                if (x === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            this.ctx.stroke();
        });
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HeroAnimation('hero-canvas');
});
