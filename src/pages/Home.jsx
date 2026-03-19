/**
 * src/pages/Home.jsx
 * トップページ
 * セクションは各コンポーネントに分割されています。
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Github } from 'lucide-react';
import { PageLayout }    from '../components/common/PageLayout';
import { Button }        from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard }   from '../components/ui/ProjectCard';
import { SkillBar }      from '../components/ui/SkillBar';
import { StatBox }       from '../components/ui/StatBox';
import { TerminalCard, T } from '../components/ui/TerminalCard';
import { useReveal }     from '../hooks/useReveal';
import { SITE_DATA }     from '../data';

/* ── Hero ──────────────────────────────────────── */
function Hero() {
    const ref = useReveal();
    return (
        <section id="hero" className="pt-36 pb-20 px-4 sm:px-8 max-w-6xl mx-auto" ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                    {/* Badge */}
                    <div className="reveal inline-flex items-center gap-2 px-3 py-1 mb-6 border"
                        style={{
                            fontFamily: 'var(--font-mono)', fontSize: '.7rem',
                            color: 'var(--green)', letterSpacing: '.15em', textTransform: 'uppercase',
                            borderColor: 'rgba(0,255,136,.3)', borderRadius: '2px',
                            background: 'rgba(0,255,136,.05)',
                        }}
                    >
                        <span className="pulse-dot" />
                        System.Ready() — Available for hire
                    </div>

                    {/* Title */}
                    <h1
                        className="reveal reveal-delay-1 mb-6"
                        style={{
                            fontFamily: 'var(--font-display)', fontWeight: 900,
                            fontSize: 'clamp(2.4rem,5vw,3.8rem)', lineHeight: 1.1, color: '#fff',
                        }}
                    >
                        <span className="glitch" data-text={SITE_DATA.profile.name}>
                            {SITE_DATA.profile.name}
                        </span>
                        <span
                            style={{
                                display: 'block',
                                background: 'linear-gradient(90deg, var(--green), var(--blue))',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {SITE_DATA.profile.role}
                        </span>
                    </h1>

                    {/* Bio */}
                    <p className="reveal reveal-delay-2 mb-8"
                        style={{ color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 480 }}>
                        {SITE_DATA.profile.bio}
                    </p>

                    {/* CTA */}
                    <div className="reveal reveal-delay-3 flex gap-3 flex-wrap">
                        <Button href="/projects">▶ View Projects <ChevronRight size={16} /></Button>
                        <Button variant="outline" href={SITE_DATA.social.github} external>
                            <Github size={16} /> GitHub
                        </Button>
                    </div>
                </div>

                {/* Right — Terminal Card */}
                <TerminalCard
                    title="developer.cs"
                    lines={
                        <div style={{ lineHeight: 2 }}>
                            <div>{T.keyword('namespace')} {T.val('unchunks')} {T.plain('{')}</div>
                            <div style={{ paddingLeft: '1.2rem' }}>{T.comment('// Game Developer Profile')}</div>
                            <div style={{ paddingLeft: '1.2rem' }}>
                                {T.keyword('public class')} {T.class('Developer')} {T.plain('{')}
                            </div>
                            <div style={{ paddingLeft: '2.4rem' }}>
                                {T.type('string')} Name = {T.string(`"${SITE_DATA.profile.name}"`)};
                            </div>
                            <div style={{ paddingLeft: '2.4rem' }}>
                                {T.type('string')} Role = {T.string(`"${SITE_DATA.profile.role}"`)};
                            </div>
                            <div style={{ paddingLeft: '2.4rem' }}>
                                {T.type('string[]')} Skills = {T.plain('{')}
                            </div>
                            <div style={{ paddingLeft: '3.6rem' }}>
                                {T.string('"Unity"')}, {T.string('"Unreal"')},{' '}
                                {T.string('"C#"')}, {T.string('"C++"')}
                            </div>
                            <div style={{ paddingLeft: '2.4rem' }}>{T.plain('};')}</div>
                            <div style={{ paddingLeft: '2.4rem' }}>
                                {T.keyword('void')} {T.method('CreateGame')}() {T.plain('{')}
                            </div>
                            <div style={{ paddingLeft: '3.6rem' }}>{T.comment('// Magic happens here ✨')}</div>
                            <div style={{ paddingLeft: '2.4rem' }}>{T.plain('}')}</div>
                            <div style={{ paddingLeft: '1.2rem' }}>{T.plain('}')}</div>
                            <div>{T.plain('}')}</div>
                            <div style={{ marginTop: '.5rem' }} />
                        </div>
                    }
                />
            </div>

            {/* Stats row */}
            <div
                className="mt-20 reveal"
                style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                    gap: '1px', background: 'var(--border)',
                    border: '1px solid var(--border)',
                }}
            >
                {SITE_DATA.profile.stats.map(s => (
                    <StatBox key={s.label} value={s.value} suffix={s.suffix ?? ''} label={s.label} />
                ))}
            </div>
        </section>
    );
}

/* ── Featured Projects ─────────────────────────── */
function FeaturedProjects() {
    const ref = useReveal();
    return (
        <section id="projects" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto" ref={ref}>
            <div className="flex items-end justify-between mb-12">
                <SectionHeader tag="Projects" title="Selected Works" desc="ゲーム開発プロジェクトの作品集です。" />
                <Link to="/projects"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--text-muted)',
                             textDecoration: 'none', letterSpacing: '.08em', whiteSpace: 'nowrap', marginBottom: '3rem' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                    All Projects →
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SITE_DATA.projects.slice(0, 3).map((p, i) => (
                    <ProjectCard key={p.id} project={p} delay={String(i + 1)} />
                ))}
            </div>
        </section>
    );
}

/* ── Skills ────────────────────────────────────── */
function Skills() {
    const ref = useReveal();
    return (
        <section id="skills" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto" ref={ref}>
            <SectionHeader tag="Skills" title="Tech Stack" desc="ゲーム開発に使用しているエンジンと言語です。" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SITE_DATA.profile.skills.map((s, i) => (
                    <SkillBar key={s.name} name={s.name} pct={s.pct}
                        color={i < 2 ? 'green' : i < 4 ? 'blue' : 'red'} />
                ))}
            </div>
        </section>
    );
}

/* ── DevLog preview ────────────────────────────── */
function DevLogPreview() {
    const ref = useReveal();
    const posts = SITE_DATA.posts.slice(0, 3);
    return (
        <section id="devlog" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto" ref={ref}>
            <div className="flex items-end justify-between mb-12">
                <SectionHeader tag="DevLog" title="Development Log" desc="開発の記録と学びを共有しています。" />
                <Link to="/blog"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--text-muted)',
                             textDecoration: 'none', letterSpacing: '.08em', whiteSpace: 'nowrap', marginBottom: '3rem' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                    All Logs →
                </Link>
            </div>
            {posts.length === 0 ? (
                <div className="reveal text-center py-16 border border-dashed"
                    style={{ borderColor: 'var(--border)', borderRadius: '4px', background: 'var(--surface)' }}>
                    <div style={{ fontSize: '2.5rem', opacity: .35, marginBottom: '.8rem' }}>📝</div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.82rem', color: 'var(--text-muted)' }}>
                        まだ記事がありません。開発ログは随時更新予定です。
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {posts.map((post, i) => (
                        <PostCard key={post.id} post={post} delay={String(i + 1)} />
                    ))}
                </div>
            )}
        </section>
    );
}

function PostCard({ post, delay }) {
    return (
        <div className={`reveal reveal-delay-${delay} p-6 group cursor-pointer`}
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px',
                     transition: 'border-color .25s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-bright)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
        >
            <div className="flex flex-wrap items-center gap-3 mb-2">
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.68rem', color: 'var(--text-muted)' }}>
                    📅 {post.date}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.68rem', color: 'var(--blue)',
                               padding: '.15rem .5rem', background: 'rgba(0,212,255,.06)',
                               border: '1px solid rgba(0,212,255,.2)', borderRadius: '2px' }}>
                    {post.category}
                </span>
            </div>
            <h3 style={{ color: '#fff', fontFamily: 'var(--font-display)', fontSize: '1rem',
                          fontWeight: 700, marginBottom: '.4rem', transition: 'color .2s' }}
                className="group-hover:text-[var(--green)]">
                {post.title}
            </h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '.9rem', lineHeight: 1.6 }}>
                {post.excerpt}
            </p>
        </div>
    );
}

/* ── Page ──────────────────────────────────────── */
/* <Skills /> */
export default function Home() {
    return (
        <PageLayout>
            <Hero />
            <FeaturedProjects />
            
            <DevLogPreview />
        </PageLayout>
    );
}
