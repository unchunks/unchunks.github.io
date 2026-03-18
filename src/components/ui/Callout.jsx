// src/components/ui/Callout.jsx
import React from 'react';

/* ================================================================
   Callout — ハイライト吹き出しコンポーネント
   ================================================================ */
export function Callout({ color = 'green', label, children, style }) {
    const colors = {
        green: { border: 'var(--green)', bg: 'rgba(0,255,136,.05)', text: 'var(--green)' },
        blue:  { border: 'var(--blue)',  bg: 'rgba(0,212,255,.05)', text: 'var(--blue)'  },
        red:   { border: 'var(--red)',   bg: 'rgba(255,51,102,.05)',text: 'var(--red)'   },
        yellow:{ border: 'var(--yellow)',bg: 'rgba(255,215,0,.05)', text: 'var(--yellow)'},
    };
    const c = colors[color] ?? colors.green;
    return (
        <div style={{
            borderLeft: `3px solid ${c.border}`,
            background: c.bg,
            padding: '.9rem 1.2rem',
            borderRadius: '0 4px 4px 0',
            ...style,
        }}>
            <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '.68rem',
                color: c.text, letterSpacing: '.12em', fontWeight: 700,
                display: 'block', marginBottom: '.35rem',
            }}>
                {label}
            </span>
            <p style={{ color: 'var(--text-dim)', lineHeight: 1.75, margin: 0, fontSize: '.95rem' }}>
                {children}
            </p>
        </div>
    );
}
