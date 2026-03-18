/**
 * src/pages/Projects.jsx
 * 全プロジェクト一覧ページ
 * タグでフィルタリング可能。新しいプロジェクトは src/content/projects/ に追加するだけ。
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageLayout }    from '../components/common/PageLayout';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard }   from '../components/ui/ProjectCard';
import { useReveal }     from '../hooks/useReveal';
import { SITE_DATA }     from '../data';

export default function Projects() {
    const ref = useReveal();
    const [selectedTag, setSelectedTag] = useState('All');

    const allTags = ['All', ...new Set(SITE_DATA.projects.flatMap(p => p.tags))];
    const filtered = selectedTag === 'All'
        ? SITE_DATA.projects
        : SITE_DATA.projects.filter(p => p.tags.includes(selectedTag));

    return (
        <PageLayout>
            <main className="pt-32 pb-16 px-4 sm:px-8 max-w-6xl mx-auto" ref={ref}>
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
                    tag="Projects"
                    title="All Projects"
                    desc="ゲーム開発プロジェクトの作品集です。"
                />

                {/* Tag filter */}
                {allTags.length > 1 && (
                    <div className="flex flex-wrap gap-2 mb-10 reveal reveal-delay-1">
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                style={{
                                    fontFamily: 'var(--font-mono)', fontSize: '.72rem',
                                    letterSpacing: '.08em', padding: '.5rem 1.1rem',
                                    border: '1px solid',
                                    borderColor: selectedTag === tag ? 'var(--green)' : 'var(--border)',
                                    background: selectedTag === tag ? 'rgba(0,255,136,.1)' : 'var(--surface)',
                                    color: selectedTag === tag ? 'var(--green)' : 'var(--text-dim)',
                                    borderRadius: '2px', cursor: 'pointer', transition: 'all .2s',
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}

                {/* Grid */}
                {filtered.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((p, i) => (
                            <ProjectCard key={p.id} project={p} delay={String((i % 3) + 1)} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 reveal"
                        style={{ background: 'var(--surface)', border: '1px dashed var(--border)', borderRadius: '4px' }}>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: 'var(--text-muted)' }}>
                            このカテゴリーにはプロジェクトがありません。
                        </p>
                    </div>
                )}
            </main>
        </PageLayout>
    );
}
