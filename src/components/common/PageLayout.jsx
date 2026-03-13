/**
 * PageLayout.jsx
 * 全ページ共通のラッパーコンポーネント。
 * Navigation・Footer・背景エフェクトを提供します。
 *
 * Usage:
 *   <PageLayout>
 *     <main>...ページコンテンツ...</main>
 *   </PageLayout>
 */
import React from 'react';
import { Navigation }     from './Navigation';
import { Footer }         from './Footer';
import { ParticleCanvas } from './ParticleCanvas';
import { ScrollProgress } from './ScrollProgress';

export function PageLayout({ children }) {
    return (
        <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
            <ScrollProgress />
            <ParticleCanvas />
            <Navigation />
            <div style={{ position: 'relative', zIndex: 10 }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}
