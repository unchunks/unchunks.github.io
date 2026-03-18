/**
 * src/pages/ProjectDetail.jsx
 * /projects/:id — 各プロジェクトの詳細ページ
 * コンテンツは src/content/projects/ で管理します。
 */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Play, Gamepad2 } from 'lucide-react';
import { PageLayout } from '../components/common/PageLayout';
import { Tag }        from '../components/ui/Tag';
import { Button }     from '../components/ui/Button';
import { useReveal }  from '../hooks/useReveal';
import { SITE_DATA }  from '../data';

/* Styles injected once for detail content */
const DETAIL_STYLES = `
    .detail-h2 {
        font-family: var(--font-display);
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--green);
        margin: 2rem 0 .8rem;
        letter-spacing: .04em;
    }
    .detail-h2::before { content: '> '; color: var(--text-muted); }
    .detail-table {
        width: 100%;
        border-collapse: collapse;
        font-family: var(--font-mono);
        font-size: .77rem;
    }
    .detail-table th {
        background: rgba(0,0,0,.4);
        color: var(--green);
        padding: .55rem 1rem;
        text-align: left;
        border-bottom: 1px solid var(--border-bright);
        letter-spacing: .06em;
        font-weight: 700;
    }
    .detail-table td {
        padding: .55rem 1rem;
        color: var(--text);
        border-bottom: 1px solid var(--border);
    }
    .detail-table tr:hover td { background: rgba(0,255,136,.03); }
    .detail-list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    .detail-list li {
        color: var(--text-dim);
        padding-left: 1.2rem;
        position: relative;
        line-height: 1.7;
    }
    .detail-list li::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: var(--green);
    }
    .space-y-6 > * + * { margin-top: 1.5rem; }
    .space-y-8 > * + * { margin-top: 2rem; }
    .space-y-10 > * + *{ margin-top: 2.5rem; }
`;

/** パス文字列かどうかを判定 */
const isPath = (v) => typeof v === 'string' && (v.startsWith('/') || v.startsWith('.') || v.startsWith('http'));

/* ================================================================
   外部リンクボタン群
   project.links 配列、または後方互換で project.githubUrl を表示します。

   links の各要素:
     { label: string, url: string, type?: 'github'|'itchio'|'steam'|'play'|'web' }

   type を省略すると 'web'（汎用リンクアイコン）になります。
   ================================================================ */
const LINK_ICONS = {
    github: <Github size={16} />,
    itchio: <Gamepad2 size={16} />,
    steam:  <Gamepad2 size={16} />,
    play:   <Play size={16} />,
    web:    <ExternalLink size={16} />,
};

const LINK_STYLES = {
    github: { bg: '#161b22', border: '#30363d', hover: '#fff',     label: 'GitHub'  },
    itchio: { bg: '#fa5c5c22', border: '#fa5c5c55', hover: '#fa5c5c', label: 'itch.io' },
    steam:  { bg: '#1b2838aa', border: '#66c0f455', hover: '#66c0f4', label: 'Steam'   },
    play:   { bg: 'rgba(0,255,136,.08)', border: 'rgba(0,255,136,.35)', hover: 'var(--green)', label: 'Play' },
    web:    { bg: 'var(--surface2)', border: 'var(--border-bright)', hover: 'var(--blue)', label: 'Link' },
};

function ProjectLinks({ project }) {
    // links 配列 → そのまま使用
    // githubUrl のみの場合 → 後方互換で変換
    const links = project.links ?? (
        project.githubUrl
            ? [{ label: 'ソースコードを見る', url: project.githubUrl, type: 'github' }]
            : []
    );

    if (links.length === 0) return null;

    return (
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
            {links.map(({ label, url, type = 'web' }) => {
                const s = LINK_STYLES[type] ?? LINK_STYLES.web;
                return (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                            fontFamily: 'var(--font-mono)', fontSize: '.78rem',
                            letterSpacing: '.06em', fontWeight: 700,
                            padding: '.75rem 1.4rem',
                            background: s.bg,
                            border: `1px solid ${s.border}`,
                            color: 'var(--text)',
                            textDecoration: 'none',
                            borderRadius: '3px',
                            clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))',
                            transition: 'all .2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.color = s.hover;
                            e.currentTarget.style.borderColor = s.hover;
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = `0 0 20px ${s.hover}33`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.color = 'var(--text)';
                            e.currentTarget.style.borderColor = s.border;
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {LINK_ICONS[type] ?? LINK_ICONS.web}
                        {label}
                    </a>
                );
            })}
        </div>
    );
}

export default function ProjectDetail() {
    const { id } = useParams();
    const ref    = useReveal();
    const project = SITE_DATA.projects.find(p => p.id === id);

    if (!project) {
        return (
            <PageLayout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
                    <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#fff' }}>
                        Project Not Found
                    </h1>
                    <Button href="/projects">← All Projects</Button>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout>
            <style>{DETAIL_STYLES}</style>
            <main className="pt-32 pb-16 px-4 sm:px-8 max-w-4xl mx-auto" ref={ref}>
                {/* Back */}
                <Link to="/projects" className="inline-flex items-center gap-2 mb-8 no-underline reveal"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '.75rem', color: 'var(--text-dim)',
                             letterSpacing: '.08em', transition: 'color .2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                    <ArrowLeft size={16} /> Back to All Projects
                </Link>

                {/* Hero banner */}
                <div
                    className="reveal h-56 rounded relative overflow-hidden mb-10 flex items-center justify-center"
                    style={{ background: project.thumbBg ?? 'linear-gradient(135deg,#0a1530,#1a2560)' }}
                >
                    {project.thumbImage ? (
                        /* 実画像をフルカバー */
                        <img
                            src={project.thumbImage}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ opacity: .75 }}
                        />
                    ) : (
                        <>
                            {/* Grid */}
                            <div className="absolute inset-0"
                                style={{
                                    backgroundImage: 'linear-gradient(rgba(0,255,136,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.05) 1px,transparent 1px)',
                                    backgroundSize: '30px 30px',
                                }} />
                            {/* Glow */}
                            {project.thumbGlow && (
                                <div className="absolute inset-0 opacity-40"
                                    style={{ background: project.thumbGlow }} />
                            )}
                            {/* Icon — 絵文字 or 画像パス */}
                            {isPath(project.icon) ? (
                                <img
                                    src={project.icon}
                                    alt={project.title}
                                    className="relative z-10 w-28 h-28 object-contain"
                                    style={{ filter: 'drop-shadow(0 0 30px rgba(255,255,255,.5))' }}
                                />
                            ) : (
                                <span className="relative z-10" style={{ fontSize: '5rem', filter: 'drop-shadow(0 0 30px currentColor)' }}>
                                    {project.icon ?? '🎮'}
                                </span>
                            )}
                        </>
                    )}
                    {/* タイトルオーバーレイ — 画像があっても常に表示 */}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 60%)' }} />
                    <h1
                        className="absolute bottom-6 left-8"
                        style={{
                            fontFamily: 'var(--font-display)', fontWeight: 900,
                            fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#fff',
                            textShadow: '0 2px 20px rgba(0,0,0,.8)',
                        }}
                    >
                        {project.title}
                    </h1>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 reveal reveal-delay-1">
                    {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </div>

                {/* Detail content */}
                <div className="reveal reveal-delay-2">
                    {project.details ?? (
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            {project.description}
                        </p>
                    )}
                </div>

                {/* 外部リンクボタン群 */}
                <ProjectLinks project={project} />
            </main>
        </PageLayout>
    );
}
