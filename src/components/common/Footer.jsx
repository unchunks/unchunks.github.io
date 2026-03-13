/**
 * Footer.jsx
 * SITE_DATA からプロフィール・SNS情報を読んで表示します。
 * SNS リンクを追加したい場合は data.jsx の social を編集してください。
 */
import React from "react";
import { Github, Twitter } from "lucide-react";
import { SITE_DATA } from "../../data";

const SOCIAL_ICONS = {
    github: { Icon: Github, href: SITE_DATA.social.github, label: "GitHub" },
    twitter: {
        Icon: Twitter,
        href: SITE_DATA.social.twitter,
        label: "Twitter",
    },
};

export function Footer() {
    return (
        <footer
            className="mt-20 py-10"
            style={{
                borderTop: "1px solid var(--border)",
                background: "var(--bg)",
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span
                    style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: ".9rem",
                        color: "var(--green)",
                        letterSpacing: ".15em",
                    }}
                >
                    {SITE_DATA.profile.name}
                </span>

                <div className="flex gap-5">
                    {Object.values(SOCIAL_ICONS).map(
                        ({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="transition-colors duration-200 text-[var(--text-muted)] hover:text-[var(--green)]"
                            >
                                <Icon size={18} />
                            </a>
                        ),
                    )}
                </div>

                <span
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: ".68rem",
                        color: "var(--text-muted)",
                        letterSpacing: ".08em",
                    }}
                >
                    &copy; {new Date().getFullYear()} {SITE_DATA.profile.name} —
                    Building worlds, debugging reality.
                </span>
            </div>
        </footer>
    );
}
