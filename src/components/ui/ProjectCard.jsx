/**
 * ProjectCard.jsx
 * プロジェクト一覧・トップページで使うカードコンポーネント。
 * project オブジェクトの shape は src/content/projects/ を参照。
 */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from './Tag';

function useTilt(ref) {
    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        const cx = rect.width / 2, cy = rect.height / 2;
        const rX = ((y - cy) / cy) * 6;
        const rY = ((cx - x) / cx) * 6;
        ref.current.style.transform = `translateY(-6px) perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    };
    const handleLeave = () => { ref.current.style.transform = ''; };
    return { onMouseMove: handleMove, onMouseLeave: handleLeave };
}

/** パス文字列かどうかを判定（絵文字との区別） */
const isPath = (v) => typeof v === 'string' && (v.startsWith('/') || v.startsWith('.') || v.startsWith('http'));

export function ProjectCard({ project, delay = '' }) {
    const cardRef = useRef(null);
    const tilt    = useTilt(cardRef);

    const Inner = () => (
        <>
            {/* Thumbnail */}
            <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ background: project.thumbBg ?? 'linear-gradient(135deg,#0a1530,#1a2560)' }}
            >
                {/* thumbImage がある場合は実画像をフルカバー表示 */}
                {project.thumbImage ? (
                    <img
                        src={project.thumbImage}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ opacity: .85 }}
                    />
                ) : (
                    <>
                        {/* Grid lines */}
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(0,255,136,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.04) 1px,transparent 1px)',
                                backgroundSize: '30px 30px',
                            }}
                        />
                        {/* Glow */}
                        {project.thumbGlow && (
                            <div className="absolute inset-0 opacity-30" style={{ background: project.thumbGlow }} />
                        )}
                        {/* Icon — 絵文字 or 画像パス */}
                        {isPath(project.icon) ? (
                            <img
                                src={project.icon}
                                alt={project.title}
                                className="relative z-10 w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
                                style={{ filter: 'drop-shadow(0 0 16px rgba(255,255,255,.4))' }}
                            />
                        ) : (
                            <span
                                className="relative z-10 text-6xl transition-transform duration-300 group-hover:scale-110"
                                style={{ filter: 'drop-shadow(0 0 20px currentColor)' }}
                            >
                                {project.icon ?? '🎮'}
                            </span>
                        )}
                    </>
                )}
            </div>

            {/* Body */}
            <div className="p-6">
                <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </div>
                <h3
                    className="mb-2 transition-colors duration-200 group-hover:text-[var(--green)]"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', letterSpacing: '.05em' }}
                >
                    {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-dim)' }}>
                    {project.description}
                </p>
                <span
                    className="text-xs uppercase tracking-widest transition-all duration-200 group-hover:text-[var(--green)]"
                    style={{ fontFamily: 'var(--font-mono)', color: 'var(--blue)' }}
                >
                    詳細を見る →
                </span>
            </div>
        </>
    );

    const cardStyle = {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all .3s cubic-bezier(.4,0,.2,1)',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
    };

    const hoverCls = [
        'group reveal',
        delay ? `reveal-delay-${delay}` : '',
    ].join(' ');

    return (
        <Link
            to={`/projects/${project.id}`}
            ref={cardRef}
            className={hoverCls}
            style={cardStyle}
            {...tilt}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--green)';
                e.currentTarget.style.boxShadow   = '0 0 0 1px rgba(0,255,136,.15), 0 20px 60px rgba(0,0,0,.5), 0 0 80px rgba(0,255,136,.05)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow   = 'none';
                e.currentTarget.style.transform   = '';
            }}
        >
            <Inner />
        </Link>
    );
}
