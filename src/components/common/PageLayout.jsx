/**
 * PageLayout.jsx
 * 全ページ共通のラッパーコンポーネント。
 * Navigation・Footer・背景エフェクトを提供します。
 *
 * Usage:
 *   <PageLayout>
 *     <main>...ページコンテンツ...</main>
 *   </PageLayout>
 */
import React, { useEffect } from 'react';
import Lenis from 'lenis';

import { Navigation }     from './Navigation';
import { Footer }         from './Footer';
import { ParticleCanvas } from './ParticleCanvas';
import { ScrollProgress } from './ScrollProgress';

export function PageLayout({ children }) {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        let rafId;

        function raf(time) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <ScrollProgress />
            <ParticleCanvas />
            <Navigation />
            <div style={{ position: 'relative', zIndex: 10 }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}
