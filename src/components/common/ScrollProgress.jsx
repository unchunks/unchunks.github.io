/**
 * ScrollProgress.jsx
 * ページ上部に表示されるスクロール進行バー。
 * <ScrollProgress /> を配置するだけで機能します。
 */
import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
    const { progress } = useScrollProgress();

    return (
        <div
            style={{
                position: 'fixed', top: 0, left: 0, height: '2px', zIndex: 9999,
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--green), var(--blue))',
                boxShadow: '0 0 8px var(--green)',
                transition: 'width .1s linear',
                pointerEvents: 'none',
            }}
        />
    );
}
