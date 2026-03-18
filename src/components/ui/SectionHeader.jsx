/**
 * SectionHeader.jsx
 * 各セクションで使う共通の見出しコンポーネント。
 *
 * Usage:
 *   <SectionHeader tag="Projects" title="Selected Works" desc="説明テキスト" />
 */
import React from 'react';

export function SectionHeader({ tag, title, desc, className = '' }) {
    return (
        <div className={`mb-12 reveal ${className}`}>
            <div
                className="flex items-center gap-3 mb-2 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '.68rem', color: 'var(--green)' }}
            >
                <span style={{ color: 'var(--text-muted)' }}>//</span>
                {tag}
            </div>
            <h2
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem,3vw,2.4rem)',
                    fontWeight: 900,
                    color: '#fff',
                    letterSpacing: '.02em',
                }}
            >
                {title}
            </h2>
            {desc && (
                <p className="mt-2 max-w-xl" style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>
                    {desc}
                </p>
            )}
        </div>
    );
}
