/**
 * useReveal.js
 * スクロールで要素が画面内に入ったとき .visible クラスを付与します。
 * index.css の .reveal/.reveal.visible スタイルと連携します。
 *
 * Usage:
 *   const ref = useReveal();
 *   <section ref={ref}>
 *     <div className="reveal reveal-delay-1">...</div>
 *   </section>
 */
import { useEffect, useRef } from 'react';

export function useReveal(options = {}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const targets = el.classList.contains('reveal')
            ? [el]
            : el.querySelectorAll('.reveal');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // 一度表示したら監視解除（パフォーマンス最適化）
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options });

        targets.forEach((t) => observer.observe(t));

        return () => observer.disconnect();
    }, []);

    return containerRef;
}
