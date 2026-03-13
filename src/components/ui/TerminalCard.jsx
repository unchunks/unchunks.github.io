/**
 * TerminalCard.jsx
 * コードターミナル風のビジュアルカード。
 * Hero セクションなどで使います。
 *
 * Usage:
 *   <TerminalCard title="developer.cs" lines={[...]} />
 */
import React from 'react';

export function TerminalCard({ title = 'main.cs', lines }) {
    return (
        <div
            className="reveal reveal-delay-2"
            style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px rgba(0,255,136,.06), 0 20px 60px rgba(0,0,0,.5)',
                transition: 'border-color .4s, box-shadow .4s',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,255,136,.3)';
                e.currentTarget.style.boxShadow   = '0 0 0 1px rgba(0,255,136,.12), 0 20px 80px rgba(0,0,0,.6), 0 0 60px rgba(0,255,136,.05)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow   = '0 0 0 1px rgba(0,255,136,.06), 0 20px 60px rgba(0,0,0,.5)';
            }}
        >
            {/* Title bar */}
            <div
                className="flex items-center gap-2 px-4 py-2"
                style={{ background: 'rgba(0,0,0,.3)', borderBottom: '1px solid var(--border)' }}
            >
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c841', display: 'inline-block' }} />
                <span
                    className="ml-auto"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '.68rem', color: 'var(--text-muted)', letterSpacing: '.08em' }}
                >
                    {title}
                </span>
            </div>

            {/* Code body */}
            <div style={{ padding: '1.4rem', fontFamily: 'var(--font-mono)', fontSize: '.8rem', lineHeight: 1.9 }}>
                {lines}
                <div>
                    <span style={{ color: 'var(--text-muted)' }}>$ </span>
                    <span style={{ color: 'var(--green)' }}>dotnet run</span>
                    <span className="t-cursor" />
                </div>
            </div>
        </div>
    );
}

/* Syntax highlight helpers — import these in the consumer */
export const T = {
    keyword: (t) => <span style={{ color: '#c792ea' }}>{t}</span>,
    type:    (t) => <span style={{ color: '#82aaff' }}>{t}</span>,
    string:  (t) => <span style={{ color: '#c3e88d' }}>{t}</span>,
    class:   (t) => <span style={{ color: 'var(--yellow)' }}>{t}</span>,
    method:  (t) => <span style={{ color: 'var(--blue)' }}>{t}</span>,
    val:     (t) => <span style={{ color: 'var(--green)' }}>{t}</span>,
    comment: (t) => <span style={{ color: 'var(--text-muted)' }}>{t}</span>,
    plain:   (t) => <span style={{ color: '#fff' }}>{t}</span>,
    indent:  (n = 1) => <span style={{ paddingLeft: `${n * 1.2}rem`, display: 'inline-block' }} />,
};
