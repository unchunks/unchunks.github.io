/**
 * useScrollProgress.js
 * ページのスクロール進行率（0〜100）と、
 * スクロール量（px）をリアルタイムで返します。
 *
 * Usage:
 *   const { progress, scrollY } = useScrollProgress();
 */
import { useState, useEffect } from 'react';

export function useScrollProgress() {
    const [state, setState] = useState({ progress: 0, scrollY: 0 });

    useEffect(() => {
        let ticking = false; // ロック用のフラグ

        const handler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const doc = document.documentElement;
                    const scrollY = doc.scrollTop;
                    const maxScroll = doc.scrollHeight - doc.clientHeight;
                    const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
                    
                    setState({ progress, scrollY });
                    ticking = false; // 処理が終わったらロック解除
                });
                ticking = true; // 次のフレームまで処理をブロック
            }
        };

        window.addEventListener('scroll', handler, { passive: true });
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return state;
}
