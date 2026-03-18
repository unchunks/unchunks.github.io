/**
 * src/pages/Blog.jsx
 * DevLog 一覧ページ
 * 記事は src/content/posts/ に追加するだけで自動的に表示されます。
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { PageLayout }    from '../components/common/PageLayout';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Tag }           from '../components/ui/Tag';
import { useReveal }     from '../hooks/useReveal';
import { SITE_DATA }     from '../data';

function PostCard({ post, delay }) {
    return (
        <article
            className={`reveal reveal-delay-${delay} group p-6`}
            style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: '4px', transition: 'border-color .25s, box-shadow .25s',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,255,136,.3)';
                e.currentTarget.style.boxShadow   = '0 0 30px rgba(0,255,136,.04)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow   = 'none';
            }}
        >
            <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '.68rem', color: 'var(--text-muted)' }}>
                    <Calendar size={12} /> {post.date}
                </span>
                <Tag color="blue">{post.category}</Tag>
            </div>
            <h2
                className="mb-3 transition-colors duration-200 group-hover:text-[var(--green)]"
                style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', letterSpacing: '.03em' }}
            >
                {post.title}
            </h2>
            <p style={{ color: 'var(--text-dim)', fontSize: '.9rem', lineHeight: 1.7 }}>
                {post.excerpt}
            </p>
        </article>
    );
}

export default function Blog() {
    const ref = useReveal();
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', ...new Set(SITE_DATA.posts.map(p => p.category))];
    const filtered = selectedCategory === 'All'
        ? SITE_DATA.posts
        : SITE_DATA.posts.filter(p => p.category === selectedCategory);

    return (
        <PageLayout>
            <main className="pt-32 pb-16 px-4 sm:px-8 max-w-4xl mx-auto" ref={ref}>
                {/* Back */}
                <Link to="/" className="inline-flex items-center gap-2 mb-8 no-underline reveal"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '.75rem', color: 'var(--text-dim)',
                             letterSpacing: '.08em', transition: 'color .2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
                >
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <SectionHeader
                    tag="DevLog"
                    title="Development Log"
                    desc="開発の記録と学びを共有しています。"
                />

                {/* Category filter (記事が存在するときのみ表示) */}
                {categories.length > 1 && (
                    <div className="flex flex-wrap gap-2 mb-8 reveal reveal-delay-1">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '.72rem',
                                    letterSpacing: '.08em', padding: '.5rem 1.1rem',
                                    border: '1px solid',
                                    borderColor: selectedCategory === cat ? 'var(--green)' : 'var(--border)',
                                    background: selectedCategory === cat ? 'rgba(0,255,136,.1)' : 'var(--surface)',
                                    color: selectedCategory === cat ? 'var(--green)' : 'var(--text-dim)',
                                    borderRadius: '2px', cursor: 'pointer', transition: 'all .2s',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {/* Posts */}
                {filtered.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {filtered.map((post, i) => (
                            <PostCard key={post.id} post={post} delay={String((i % 3) + 1)} />
                        ))}
                    </div>
                ) : (
                    <div className="reveal text-center py-20"
                        style={{ background: 'var(--surface)', border: '1px dashed var(--border)', borderRadius: '4px' }}>
                        <div style={{ fontSize: '2.5rem', opacity: .35, marginBottom: '.8rem' }}>📝</div>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.82rem', color: 'var(--text-muted)' }}>
                            まだ記事がありません。<br />開発ログは随時更新予定です。
                        </p>
                    </div>
                )}
            </main>
        </PageLayout>
    );
}
