/**
 * useCountUp.js
 * 要素が画面内に入ったとき、数値を 0 からアニメーションしながらカウントアップします。
 *
 * Usage:
 *   const ref = useCountUp();
 *   <div ref={ref}>
 *     <span data-count="42">0</span>
 *     <span data-count="100" data-suffix="%">0</span>
 *   </div>
 */
import { useEffect, useRef } from 'react';

export function useCountUp() {
    const ref = useRef(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        // タイマーIDを保存する配列を用意
        const activeTimers = [];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                observer.unobserve(entry.target);

                entry.target.querySelectorAll('[data-count]').forEach((el) => {
                    const target = parseInt(el.dataset.count, 10);
                    const suffix = el.dataset.suffix ?? '';
                    let current = 0;
                    const steps = 50;
                    const inc = target / steps;
                    
                    const timer = setInterval(() => {
                        current += inc;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        el.textContent = Math.floor(current) + suffix;
                    }, 28);
                    
                    // 発行したタイマーを記録しておく
                    activeTimers.push(timer);
                });
            });
        }, { threshold: 0.5 });

        observer.observe(container);
        
        // クリーンアップ処理
        return () => {
            observer.disconnect();
            // 実行中の全タイマーを安全に停止
            activeTimers.forEach(timer => clearInterval(timer));
        };
    }, []);

    return ref;
}
