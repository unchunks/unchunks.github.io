/**
 * StatBox.jsx
 * カウントアップアニメーション付きの統計表示ボックス。
 *
 * Usage:
 *   <StatBox value={42} label="Projects" />
 *   <StatBox value={100} suffix="%" label="Passion" />
 */
import React, { useRef, useEffect, useState } from 'react';

export function StatBox({ value, suffix = '', label }) {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                let cur = 0;
                const steps = 50;
                const inc = value / steps;
                const timer = setInterval(() => {
                    cur += inc;
                    if (cur >= value) { cur = value; clearInterval(timer); }
                    setCurrent(Math.floor(cur));
                }, 28);
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div
            ref={ref}
            className="relative overflow-hidden text-center py-8 px-4"
            style={{ background: 'var(--surface)' }}
            onMouseEnter={e => e.currentTarget.querySelector('.top-bar').style.transform = 'translateX(0)'}
            onMouseLeave={e => e.currentTarget.querySelector('.top-bar').style.transform = 'translateX(-100%)'}
        >
            {/* Top highlight bar */}
            <div
                className="top-bar absolute top-0 left-0 right-0"
                style={{
                    height: '2px',
                    background: 'linear-gradient(90deg,transparent,var(--green),transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform .5s',
                }}
            />
            <span
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.4rem',
                    fontWeight: 900,
                    color: 'var(--green)',
                    display: 'block',
                }}
            >
                {current}{suffix}
            </span>
            <span
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '.68rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '.15em',
                    textTransform: 'uppercase',
                    marginTop: '.25rem',
                    display: 'block',
                }}
            >
                {label}
            </span>
        </div>
    );
}
