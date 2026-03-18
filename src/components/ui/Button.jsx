/**
 * Button.jsx
 * variant: 'primary' | 'outline'
 *
 * Usage:
 *   <Button variant="primary" href="/projects">View Projects</Button>
 *   <Button variant="outline" href="https://..." external>GitHub</Button>
 */
import React from 'react';
import { Link } from 'react-router-dom';

const BASE = {
    fontFamily: 'var(--font-mono)',
    fontSize: '.78rem',
    letterSpacing: '.08em',
    padding: '.85rem 2rem',
    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '.5rem',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all .2s',
    fontWeight: 700,
};

const VARIANTS = {
    primary: {
        background: 'var(--green)',
        color: '#000',
    },
    outline: {
        background: 'transparent',
        color: 'var(--text)',
        border: '1px solid var(--border-bright)',
    },
};

const HOVER_VARIANTS = {
    primary: { background: '#fff', boxShadow: '0 0 30px rgba(0,255,136,.6)' },
    outline: { borderColor: 'var(--blue)', color: 'var(--blue)', boxShadow: '0 0 20px rgba(0,212,255,.2)' },
};

// Button.jsx の劇的な簡略化（TailwindとCSS変数を活用）
export function Button({ variant = 'primary', href, external, onClick, children, className = '' }) {
    // 状態（useState）やJSイベントはすべて削除！
    
    // ベースとなる共通クラス
    const baseClass = "font-mono text-[.78rem] tracking-[.08em] px-8 py-3 clip-btn inline-flex items-center gap-2 no-underline border-none cursor-pointer transition-all duration-200 font-bold hover:-translate-y-[2px]";
    
    // バリアントごとのクラス（Tailwindでホバー時の色や影も指定）
    const variants = {
        primary: "bg-[var(--green)] text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,136,.6)]",
        outline: "bg-transparent text-[var(--text)] border border-[var(--border-bright)] hover:border-[var(--blue)] hover:text-[var(--blue)] hover:shadow-[0_0_20px_rgba(0,212,255,.2)]",
    };

    const combinedClass = `${baseClass} ${variants[variant]} ${className}`;

    if (href && !external) return <Link to={href} className={combinedClass}>{children}</Link>;
    if (href && external)  return <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClass}>{children}</a>;
    return <button onClick={onClick} className={combinedClass}>{children}</button>;
}
