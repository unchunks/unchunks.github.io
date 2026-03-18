/**
 * ParticleCanvas.jsx
 * マウスに反応するパーティクルアニメーション背景。
 * どのページでも <ParticleCanvas /> を配置するだけで使えます。
 */
import React, { useEffect, useRef } from "react";

const COLORS = ["#00ff88", "#00d4ff", "#ff3366", "#ffd700", "#8866ff"];
const PARTICLE_COUNT = 120;

class Particle {
    constructor(W, H, init = false) {
        this.W = W;
        this.H = H;
        this.reset(init);
    }
    reset(init = false) {
        this.x = Math.random() * this.W;
        this.y = init ? Math.random() * this.H : this.H + 10;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
        this.life = Math.random() * 200 + 100;
        this.age = init ? Math.random() * this.life : 0;
    }
    update(mouseX, mouseY) {
        const dx = this.x - mouseX,
            dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
            const f = (120 - dist) / 120;
            this.x += (dx / dist) * f * 2;
            this.y += (dy / dist) * f * 2;
        }
        this.x += this.speedX;
        this.y += this.speedY;
        this.age++;
        const r = this.age / this.life;
        this.alpha =
            r < 0.1
                ? r * 10 * this.opacity
                : r > 0.8
                  ? (1 - r) * 5 * this.opacity
                  : this.opacity;
        if (this.age > this.life || this.y < -10) this.reset(false);
    }
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.alpha);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

export function ParticleCanvas() {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: -9999, y: -9999 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let W,
            H,
            particles = [],
            raf;

        const resize = () => {
            // デバイスのピクセル比を取得（標準は1、Retina等は2以上）
            const dpr = window.devicePixelRatio || 1;

            // Canvasの内部解像度をdpr倍にする
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            // 描画コンテキストをスケールして、座標系をCSSピクセルと一致させる
            ctx.scale(dpr, dpr);

            W = window.innerWidth;
            H = window.innerHeight;
            particles = Array.from(
                { length: PARTICLE_COUNT },
                () => new Particle(W, H, true),
            );
        };
        resize();
        window.addEventListener("resize", resize);

        const onMouse = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };
        window.addEventListener("mousemove", onMouse);

        const drawGrid = () => {
            ctx.strokeStyle = "rgba(0,255,136,0.025)";
            ctx.lineWidth = 1;
            for (let x = 0; x < W; x += 60) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, H);
                ctx.stroke();
            }
            for (let y = 0; y < H; y += 60) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(W, y);
                ctx.stroke();
            }
        };

        const frame = () => {
            ctx.clearRect(0, 0, W, H);
            drawGrid();
            particles.forEach((p) => {
                p.update(mouse.current.x, mouse.current.y);
                p.draw(ctx);
            });
            raf = requestAnimationFrame(frame);
        };
        frame();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouse);
        };
    }, []);

    return (
    <canvas
        ref={canvasRef}
        style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100vw',   // CSS上のサイズは100%に固定
            height: '100vh',  // CSS上のサイズは100%に固定
            zIndex: 0, 
            pointerEvents: 'none', 
            opacity: .5 
        }}
    />
    );
}
