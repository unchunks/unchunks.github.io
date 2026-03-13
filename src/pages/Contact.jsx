/**
 * src/pages/Contact.jsx
 * SNS・ストアへのリンク一覧ページ
 * リンクは data.jsx の social / stores で管理します。
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PageLayout }    from '../components/common/PageLayout';
import { SectionHeader } from '../components/ui/SectionHeader';
import { useReveal }     from '../hooks/useReveal';
import { SITE_DATA }     from '../data';

/* リンクカードの定義
   icon    : 絵文字 or テキスト
   label   : 表示名
   sub     : サブテキスト
   href    : リンク先
   accent  : ホバー時の色 */
const SOCIAL_LINKS = [
    { icon: '🐙', label: 'GitHub',       sub: '@unchunks',        href: SITE_DATA.social.github,  accent: '#fff'    },
    { icon: '𝕏',  label: 'Twitter (X)', sub: '@unchunks_dev',    href: SITE_DATA.social.twitter, accent: '#1d9bf0' },
];

const STORE_LINKS = [
    ...(SITE_DATA.stores.steam   ? [{ icon: '🎮', label: 'Steam',   sub: 'developer/unchunks',  href: SITE_DATA.stores.steam   }] : []),
    ...(SITE_DATA.stores.itchio  ? [{ icon: '🕹️', label: 'Itch.io', sub: 'unchunks.itch.io',    href: SITE_DATA.stores.itchio  }] : []),
    ...(SITE_DATA.stores.googleplay ? [{ icon: '▶', label: 'Google Play', sub: '',               href: SITE_DATA.stores.googleplay }] : []),
    ...(SITE_DATA.stores.appstore   ? [{ icon: '🍎', label: 'App Store',  sub: '',               href: SITE_DATA.stores.appstore   }] : []),
];

function LinkCard({ icon, label, sub, href, accent = 'var(--green)', delay }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            // JSのイベントを消し、代わりに group クラスと Tailwind の hover: を追加
            className={`reveal reveal-delay-${delay} flex items-center justify-between p-5 no-underline group transition-all duration-300 relative overflow-hidden bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface2)] hover:border-[rgba(0,255,136,.3)] hover:translate-x-1 hover:shadow-[0_0_30px_rgba(0,255,136,.04)]`}
        >
            {/* Left accent bar */}
            <span
                // class を className に統一し、group-hover: でスケールを変更
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--green)] scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"
            />

            <div className="flex items-center gap-4">
                <div
                    // アイコン背景も group-hover: で変化させる場合はここに追加
                    className="w-12 h-12 flex items-center justify-center text-xl rounded bg-[rgba(0,255,136,.06)] border border-[var(--border)] transition-colors duration-300 shrink-0 group-hover:border-[var(--green)]"
                >
                    {icon}
                </div>
                <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: '#fff', letterSpacing: '.05em' }}>
                        {label}
                    </div>
                    {sub && (
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'var(--text-muted)', marginTop: '.15rem' }}>
                            {sub}
                        </div>
                    )}
                </div>
            </div>

            <ExternalLink size={16} className="text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--green)]" />
        </a>
    );
}

function Group({ title, links }) {
    return (
        <div>
            <h2
                className="mb-4"
                style={{
                    fontFamily: 'var(--font-mono)', fontSize: '.72rem',
                    color: 'var(--text-muted)', letterSpacing: '.2em', textTransform: 'uppercase',
                }}
            >
                // {title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {links.map((link, i) => (
                    <LinkCard key={link.label} {...link} delay={String(i + 1)} />
                ))}
            </div>
        </div>
    );
}

export default function Contact() {
    const ref = useReveal();

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
                    tag="Contact"
                    title="Get In Touch"
                    desc="SNSやストアへのリンク一覧です。"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <Group title="Socials" links={SOCIAL_LINKS} />
                    {STORE_LINKS.length > 0 && <Group title="Stores" links={STORE_LINKS} />}
                </div>
            </main>
        </PageLayout>
    );
}
