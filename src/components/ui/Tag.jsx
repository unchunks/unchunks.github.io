/**
 * Tag.jsx
 * プロジェクトカテゴリなどに使う小さなラベル。
 *
 * Usage:
 *   <Tag>Roguelike</Tag>
 *   <Tag color="blue">New</Tag>
 */
import React from 'react';

export function Tag({ children, color = 'green' }) {
    const colors = {
        green: { color: 'var(--green)',  border: 'rgba(0,255,136,.3)',  bg: 'rgba(0,255,136,.05)' },
        blue:  { color: 'var(--blue)',   border: 'rgba(0,212,255,.3)',  bg: 'rgba(0,212,255,.05)' },
        red:   { color: 'var(--red)',    border: 'rgba(255,51,102,.3)', bg: 'rgba(255,51,102,.05)' },
        dim:   { color: 'var(--text-muted)', border: 'var(--border)', bg: 'transparent' },
    };
    const c = colors[color] ?? colors.green;

    return (
        <span
            style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '.63rem',
                letterSpacing: '.08em',
                padding: '.25rem .65rem',
                border: `1px solid ${c.border}`,
                color: c.color,
                background: c.bg,
                borderRadius: '2px',
                display: 'inline-block',
            }}
        >
            {children}
        </span>
    );
}
