/**
 * Navigation.jsx
 * NAV_PAGES（App.jsx）を読んで自動的にリンクを生成します。
 * ページを追加した場合、App.jsx の NAV_PAGES に追記するだけで
 * ここのコードを変更する必要はありません。
 */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_PAGES } from '../../App';
import { SITE_DATA } from '../../data';
import { useScrollProgress } from '../../hooks/useScrollProgress';

const HexLogo = () => (
    <div
        className="w-7 h-7 flex items-center justify-center"
        style={{
            background: 'linear-gradient(135deg, var(--green), var(--blue))',
            clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
            animation: 'spin-hex 8s linear infinite',
        }}
    />
);

export function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScrollProgress();
    const location = useLocation();
    const scrolled = scrollY > 80;

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: 'rgba(5,8,15,.85)',
                backdropFilter: 'blur(16px)',
                borderBottom: `1px solid ${scrolled ? 'rgba(0,255,136,.25)' : 'var(--border)'}`,
                boxShadow: scrolled ? '0 0 30px rgba(0,255,136,.05)' : 'none',
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 no-underline"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'var(--green)', letterSpacing: '.15em' }}
                >
                    <HexLogo />
                    {SITE_DATA.profile.name}
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-8 list-none">
                    {NAV_PAGES.map(({ path, label }) => (
                        <li key={path}>
                            <Link
                                to={path}
                                className="no-underline text-sm uppercase tracking-widest transition-colors duration-200 relative pb-1"
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    color: isActive(path) ? 'var(--green)' : 'var(--text-dim)',
                                    fontSize: '.75rem',
                                }}
                            >
                                {label}
                                {isActive(path) && (
                                    <span className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--green)' }} />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2"
                    style={{ color: 'var(--text-dim)', background: 'none', border: 'none', cursor: 'pointer' }}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden px-4 pb-4 flex flex-col gap-2" style={{ borderTop: '1px solid var(--border)', background: 'rgba(5,8,15,.98)' }}>
                    {NAV_PAGES.map(({ path, label }) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setMobileOpen(false)}
                            className="no-underline py-2 px-3 rounded"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '.8rem',
                                color: isActive(path) ? 'var(--green)' : 'var(--text-dim)',
                                background: isActive(path) ? 'rgba(0,255,136,.05)' : 'transparent',
                            }}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}

            {/* CSS for hex spin */}
            <style>{`@keyframes spin-hex{to{transform:rotate(360deg)}}`}</style>
        </nav>
    );
}
