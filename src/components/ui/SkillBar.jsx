/**
 * SkillBar.jsx
 * スクロールで表示されると自動的に伸びるスキルバー。
 *
 * Usage:
 *   <SkillBar name="Unity" pct={90} />
 *   <SkillBar name="C++" pct={55} color="blue" />
 */
import React, { useRef, useEffect, useState } from 'react';

const GRADIENTS = {
    green: 'linear-gradient(90deg, var(--green), var(--blue))',
    blue:  'linear-gradient(90deg, #0099ff, var(--blue))',
    red:   'linear-gradient(90deg, var(--red), #ff9900)',
};

export function SkillBar({ name, pct, color = 'green' }) {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setWidth(pct); observer.disconnect(); } },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [pct]);

    return (
        <div
            ref={ref}
            className="reveal"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '1.2rem 1.5rem', borderRadius: '4px' }}
        >
            <div
                className="flex justify-between mb-2"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '.76rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text)' }}
            >
                <span>{name}</span>
                <span style={{ color: 'var(--green)' }}>{pct}%</span>
            </div>
            <div style={{ height: '3px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                <div
                    style={{
                        height: '100%',
                        width: `${width}%`,
                        borderRadius: '2px',
                        background: GRADIENTS[color] ?? GRADIENTS.green,
                        boxShadow: '0 0 8px rgba(0,255,136,.4)',
                        transition: 'width 1.2s cubic-bezier(.4,0,.2,1)',
                    }}
                />
            </div>
        </div>
    );
}
