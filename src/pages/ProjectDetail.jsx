/**
 * src/pages/ProjectDetail.jsx
 * /projects/:id — 各プロジェクトの詳細ページ
 * コンテンツは src/content/projects/ で管理します。
 */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { PageLayout } from "../components/common/PageLayout";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";
import { useReveal } from "../hooks/useReveal";
import { SITE_DATA } from "../data";

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

export default function ProjectDetail() {
    const { id } = useParams();
    const ref = useReveal();
    const project = SITE_DATA.projects.find((p) => p.id === id);

    if (!project) {
        return (
            <PageLayout>
                <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
                    <h1
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "2rem",
                            color: "#fff",
                        }}
                    >
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
            <main
                className="pt-32 pb-16 px-4 sm:px-8 max-w-4xl mx-auto"
                ref={ref}
            >
                {/* Back */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 mb-8 no-underline reveal"
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: ".75rem",
                        color: "var(--text-dim)",
                        letterSpacing: ".08em",
                        transition: "color .2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-dim)")
                    }
                >
                    <ArrowLeft size={16} /> Back to All Projects
                </Link>

                {/* Hero banner */}
                <div
                    className="reveal h-56 rounded flex items-center justify-center relative overflow-hidden mb-10"
                    style={{
                        background:
                            project.thumbBg ??
                            "linear-gradient(135deg,#0a1530,#1a2560)",
                    }}
                >
                    {/* Grid */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(0,255,136,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.05) 1px,transparent 1px)",
                            backgroundSize: "30px 30px",
                        }}
                    />
                    {/* Glow */}
                    {project.thumbGlow && (
                        <div
                            className="absolute inset-0 opacity-40"
                            style={{ background: project.thumbGlow }}
                        />
                    )}
                    {/* Icon */}
                    <span
                        className="relative z-10"
                        style={{
                            fontSize: "5rem",
                            filter: "drop-shadow(0 0 30px currentColor)",
                        }}
                    >
                        {project.icon ?? "🎮"}
                    </span>
                    {/* Title overlay */}
                    <h1
                        className="absolute bottom-6 left-8"
                        style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 900,
                            fontSize: "clamp(1.8rem,4vw,3rem)",
                            color: "#fff",
                            textShadow: "0 2px 20px rgba(0,0,0,.8)",
                        }}
                    >
                        {project.title}
                    </h1>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 reveal reveal-delay-1">
                    {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                    ))}
                </div>

                {/* Detail content */}
                <div className="reveal reveal-delay-2">
                    {project.details ? (
                        // 関数なら実行し、そうでない（古い記法の）場合はそのまま描画する安全な書き方
                        typeof project.details === "function" ? (
                            project.details()
                        ) : (
                            project.details
                        )
                    ) : (
                        <p
                            style={{
                                color: "var(--text-dim)",
                                lineHeight: 1.8,
                                fontSize: "1.05rem",
                            }}
                        >
                            {project.description}
                        </p>
                    )}
                </div>

                {/* GitHub link */}
                {project.githubUrl && (
                    <div className="mt-10 reveal reveal-delay-3">
                        <Button href={project.githubUrl} external>
                            <Github size={16} /> ソースコードを GitHub で見る
                        </Button>
                    </div>
                )}
            </main>
        </PageLayout>
    );
}
