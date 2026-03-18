/**
 * src/content/projects/reversist.jsx
 * Reversist — 新感覚リバーシ
 */
import React from "react";

/* ─── 特殊石データ ──────────────────────────────────────────────── */
/*
 * icon にはパス文字列 or 絵文字を指定できます。
 * 画像を使う場合: public/images/projects/reversist/ に置いて
 *   icon: '/images/projects/reversist/Expander.png'
 * fallback: 画像が読み込めなかった場合に表示する絵文字
 */
const SPECIAL_STONES = [
    {
        name: "拡張石",
        icon: "/images/projects/reversist/Expander.png",
        color: "#00ffff",
        effect: "置くと同時に、盤をひとまわり大きくできます。角の場所を変えて逆転の一手にしましょう。",
    },
    {
        name: "固定石",
        icon: "/images/projects/reversist/Fixed.png",
        color: "#ffcc00",
        effect: "一度置くと二度とひっくり返りません。爆弾石では壊されてしまうので使いどころを見極めましょう。",
    },
    {
        name: "爆弾石",
        icon: "/images/projects/reversist/Bomb.png",
        color: "#ff0033",
        effect: "置いて周囲のマスをひっくり返した後、自身と周囲1マスの石を壊します。自分の石も壊してしまうので、置く場所には注意しましょう。",
    },
    {
        name: "幻影石",
        icon: "/images/projects/reversist/Phantom.png",
        color: "#aa88ff",
        effect: "置いて周囲の石をひっくり返した後、消えてしまいます。使いこなすのは難しいですが、うまく使うと強力な石です。",
    },
    {
        name: "諜報石",
        icon: "/images/projects/reversist/Spy.png",
        color: "#00ff66",
        effect: "相手の色として置いた後、この石のみ自分の色に戻ります。相手の石を増やしてしまいますが、うまく使って自分の置ける場所を増やしましょう。",
    },
];

/* ─── 技術スタック ─────────────────────────────────────────────── */
const TECH_STACK = [
    { label: "エンジン", value: "Unity 6000.2", color: "var(--green)" },
    { label: "IDE", value: "Visual Studio", color: "var(--blue)" },
    { label: "非同期", value: "UniTask", color: "#f97316" },
    { label: "AI 探索", value: "MCTS（自前実装）", color: "var(--red)" },
];

/* ─── タイムライン ─────────────────────────────────────────────── */
const TIMELINE = [
    {
        phase: "企画・設計",
        date: "2025年2月",
        status: "done",
        note: "ゲームコンセプト・特殊石の仕様策定",
    },
    {
        phase: "基本実装",
        date: "2025年3月",
        status: "done",
        note: "ボード・ルール・基本 UI の実装",
    },
    {
        phase: "AI 実装",
        date: "2025年4月",
        status: "done",
        note: "MCTS による思考ルーチン構築",
    },
    {
        phase: "リファクタリング",
        date: "2025年5月",
        status: "done",
        note: "Strategy パターン導入・MVC 整備",
    },
    {
        phase: "チュートリアル追加",
        date: "",
        status: "planned",
        note: "特殊石の効果を体験できるモード",
    },
    {
        phase: "AI 強化・最適化",
        date: "",
        status: "planned",
        note: "より深く読む AI の開発と全体最適化",
    },
];

const STATUS_STYLE = {
    done: { color: "var(--green)", label: "完了" },
    wip: { color: "var(--yellow)", label: "進行中" },
    planned: { color: "var(--text-muted)", label: "予定" },
};

/* ─── ヘルパー ─────────────────────────────────────────────────── */
const isPath = (v) =>
    typeof v === "string" &&
    (v.startsWith("/") || v.startsWith(".") || v.startsWith("http"));

/* ─── 石カード ─────────────────────────────────────────────────── */
function StoneCard({ stone }) {
    const [hovered, setHovered] = React.useState(false);
    const [imgError, setImgError] = React.useState(false);

    const showImg = isPath(stone.icon) && !imgError;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: "var(--surface2)",
                border: `1px solid ${hovered ? stone.color : "var(--border)"}`,
                borderRadius: "6px",
                padding: "1.2rem",
                cursor: "default",
                transition: "all .25s",
                boxShadow: hovered ? `0 0 20px ${stone.color}22` : "none",
                transform: hovered ? "translateY(-3px)" : "none",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".7rem",
                    marginBottom: ".6rem",
                }}
            >
                {/* アイコン: 画像 or フォールバック絵文字 */}
                {showImg ? (
                    <img
                        src={stone.icon}
                        alt={stone.name}
                        onError={() => setImgError(true)}
                        style={{
                            width: "2rem",
                            height: "2rem",
                            objectFit: "contain",
                            filter: hovered
                                ? `drop-shadow(0 0 6px ${stone.color})`
                                : "none",
                            transition: "filter .25s",
                        }}
                    />
                ) : (
                    <span style={{ fontSize: "1.6rem" }}>
                        {stone.fallback ?? stone.icon}
                    </span>
                )}
                <span
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: ".85rem",
                        fontWeight: 700,
                        color: hovered ? stone.color : "#fff",
                        transition: "color .25s",
                        letterSpacing: ".04em",
                    }}
                >
                    {stone.name}
                </span>
            </div>
            <p
                style={{
                    color: "var(--text-dim)",
                    fontSize: ".82rem",
                    lineHeight: 1.7,
                    opacity: hovered ? 1 : 0.6,
                    transition: "opacity .25s",
                }}
            >
                {stone.effect}
            </p>
        </div>
    );
}

/* ─── コードブロック ───────────────────────────────────────────── */
const CODE_STRATEGY = `using System.Collections.Generic;

/// <summary>全ての石の基底クラス</summary>
public abstract class StoneStrategy
{
    /// <summary>反転判定時に使用する色を取得する</summary>
    public virtual StoneColor GetAttackColor(StoneColor myColor)
        => myColor;

    /// <summary>
    /// 石が置かれ、反転処理が終わった後に発動する効果
    /// </summary>
    public virtual void OnAfterPlacement(
        BoardState board,
        PlayerMove move,
        List<Position> flippedStones,
        MoveResult outResult) { }
}`;

/* ─── メインコンテンツ ─────────────────────────────────────────── */
export const reversist = {
    id: "reversist",
    title: "Reversist",
    description:
        "特殊効果を持つ石で盤面が一変する、クラシック + α の新感覚リバーシ。",
    tags: ["Board Game", "Unity", "AI", "MVC"],

    // icon: "/images/projects/reversist/Thumbnail.png", // なければ thumbBg + 絵文字にフォールバック
    thumbImage: '/images/projects/reversist/Thumbnail.png',  // カード全面に画像を使いたい場合はこちら
    thumbBg: "linear-gradient(135deg, #0a1a0a, #1a3020)",
    thumbGlow: "radial-gradient(circle, rgba(0,255,136,.4), transparent 65%)",

    /**
     * 外部リンクボタン（詳細ページ下部に横並びで表示）
     * type: 'github' | 'itchio' | 'steam' | 'play' | 'web'
     * 公開後は url を実際のアドレスに変更し、コメントを外してください
     */
    links: [
        { label: 'unityroom でプレイ', url: 'https://unityroom.com/games/unchunks-reversist', type: 'play' },
        { label: 'ソースコードを見る', url: 'https://github.com/unchunks/Reversist', type: 'github' },
    ],

    details: (
        <div className="space-y-12">
            {/* ── キャッチコピー ── */}
            <div
                style={{
                    borderLeft: "3px solid var(--green)",
                    paddingLeft: "1.5rem",
                    paddingTop: ".5rem",
                    paddingBottom: ".5rem",
                }}
            >
                <p
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                        color: "#fff",
                        lineHeight: 1.6,
                        fontWeight: 700,
                    }}
                >
                    戦略がより複雑に！？新感覚リバーシ
                </p>
                <p
                    style={{
                        color: "var(--text-dim)",
                        marginTop: ".4rem",
                        fontSize: ".95rem",
                    }}
                >
                    クラシック + α で生まれる、新しい逆転体験
                </p>
            </div>

            {/* ── 作品概要テーブル ── */}
            <section>
                <h2 className="detail-h2">作品概要</h2>
                <table className="detail-table">
                    <tbody>
                        {[
                            ["タイトル", "Reversist（リバーシスト）"],
                            ["ジャンル", "対戦型ボードゲーム"],
                            ["開発環境", "Unity 6000.2 + Visual Studio"],
                            ["開発期間", "2025年2月〜"],
                            ["開発形態", "個人開発"],
                            ["担当範囲", "企画 / 実装 / UI / AI"],
                            [
                                "制作目的",
                                "脱・定石 — 従来のリバーシを超える戦略体験の提供",
                            ],
                        ].map(([key, val]) => (
                            <tr key={key}>
                                <td
                                    style={{
                                        color: "var(--green)",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: ".78rem",
                                        fontWeight: 700,
                                        whiteSpace: "nowrap",
                                        width: "8rem",
                                    }}
                                >
                                    {key}
                                </td>
                                <td style={{ color: "var(--text)" }}>{val}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* ── ゲーム概要 ── */}
            <section>
                <h2 className="detail-h2">ゲーム概要</h2>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.85 }}>
                    誰もが知っているリバーシのルールをベースに、
                    <strong style={{ color: "var(--green)" }}>
                        「特殊効果を持つ石」
                    </strong>
                    という要素を追加したボードゲームです。
                    盤面の拡張やルールを破壊するような効果により、盤面の状況が一変する展開を楽しめます。
                    クラシックなリバーシとは違い、ただ石を置くだけではなく、
                    <strong style={{ color: "var(--blue)" }}>
                        定石を崩すような奇手
                    </strong>
                    が有効になるのが最大の特徴です。
                </p>
            </section>

            {/* ── 特殊石 ── */}
            <section>
                <h2 className="detail-h2">特殊石の効果</h2>
                <p
                    style={{
                        color: "var(--text-dim)",
                        fontSize: ".9rem",
                        marginBottom: "1.2rem",
                        lineHeight: 1.7,
                    }}
                >
                    各石にはユニークな特殊効果があります。
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(220px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {SPECIAL_STONES.map((stone) => (
                        <StoneCard key={stone.name} stone={stone} />
                    ))}
                </div>
            </section>

            {/* ── 技術スタック ── */}
            <section>
                <h2 className="detail-h2">技術スタック</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(180px, 1fr))",
                        gap: ".75rem",
                    }}
                >
                    {TECH_STACK.map((t) => (
                        <div
                            key={t.label}
                            style={{
                                background: "var(--surface2)",
                                border: "1px solid var(--border)",
                                borderRadius: "4px",
                                padding: ".9rem 1.1rem",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: ".65rem",
                                    color: "var(--text-muted)",
                                    letterSpacing: ".12em",
                                    textTransform: "uppercase",
                                    marginBottom: ".3rem",
                                }}
                            >
                                {t.label}
                            </div>
                            <div
                                style={{
                                    fontFamily: "var(--font-mono)",
                                    fontSize: ".85rem",
                                    color: t.color,
                                    fontWeight: 700,
                                }}
                            >
                                {t.value}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 技術的こだわり ── */}
            <section>
                <h2 className="detail-h2">技術的なこだわり</h2>

                {/* 設計 */}
                <div style={{ marginBottom: "2rem" }}>
                    <h3
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: ".8rem",
                            color: "var(--blue)",
                            letterSpacing: ".1em",
                            textTransform: "uppercase",
                            marginBottom: ".8rem",
                        }}
                    >
                        ① アーキテクチャ — 疎結合な設計
                    </h3>
                    <p
                        style={{
                            color: "var(--text-dim)",
                            lineHeight: 1.85,
                            marginBottom: "1rem",
                        }}
                    >
                        Unity 開発で複雑になりがちな依存関係を整理するために
                        <strong style={{ color: "#fff" }}>
                            VContainer
                        </strong>{" "}
                        を使用した DI（依存性注入）を採用。 イベント処理には{" "}
                        <strong style={{ color: "#fff" }}>MessagePipe</strong>{" "}
                        による Pub/Sub パターンを導入しました。
                        UI・ゲームロジック・オブジェクト同士を疎結合に保つ MVC
                        設計により、
                        初期化順序によるエラーを排除し、メンテナンス性の高いコードベースを実現しています。
                    </p>
                </div>

                {/* Strategy パターン */}
                <div style={{ marginBottom: "2rem" }}>
                    <h3
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: ".8rem",
                            color: "var(--green)",
                            letterSpacing: ".1em",
                            textTransform: "uppercase",
                            marginBottom: ".8rem",
                        }}
                    >
                        ② Strategy パターン — 特殊効果の共通化
                    </h3>
                    <p
                        style={{
                            color: "var(--text-dim)",
                            lineHeight: 1.85,
                            marginBottom: "1rem",
                        }}
                    >
                        以前は各石の特殊効果を条件分岐（if/switch）で実装していましたが、
                        <strong style={{ color: "#fff" }}>
                            抽象基底クラス StoneStrategy
                        </strong>{" "}
                        を作成し、 各石がそれを継承して{" "}
                        <code
                            style={{
                                fontFamily: "var(--font-mono)",
                                color: "var(--green)",
                                fontSize: ".82rem",
                            }}
                        >
                            OnAfterPlacement
                        </code>{" "}
                        をオーバーライドする設計に変更。
                        石の追加・変更が既存コードに影響を与えない、開放閉鎖原則に沿った構造になりました。
                    </p>
                    <pre
                        style={{
                            background: "rgba(0,0,0,.55)",
                            border: "1px solid var(--border)",
                            borderRadius: "4px",
                            padding: "1.2rem 1.5rem",
                            overflowX: "auto",
                            fontFamily: "var(--font-mono)",
                            fontSize: ".78rem",
                            lineHeight: 1.85,
                            color: "var(--text)",
                        }}
                    >
                        {CODE_STRATEGY}
                    </pre>
                </div>

                {/* AI */}
                <div>
                    <h3
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: ".8rem",
                            color: "var(--yellow)",
                            letterSpacing: ".1em",
                            textTransform: "uppercase",
                            marginBottom: ".8rem",
                        }}
                    >
                        ③ AI — MCTS（モンテカルロ木探索）の自前実装
                    </h3>
                    <p style={{ color: "var(--text-dim)", lineHeight: 1.85 }}>
                        思考ルーチンに{" "}
                        <strong style={{ color: "#fff" }}>
                            MCTS（Monte Carlo Tree Search）
                        </strong>{" "}
                        を自前で実装。
                        <strong style={{ color: "#fff" }}>UniTask</strong>{" "}
                        を使った非同期処理により、 AI
                        思考中もメインスレッドをブロックせず、スムーズなゲーム体験を維持しています。
                        スレッド制約が厳しい{" "}
                        <strong style={{ color: "#fff" }}>WebGL 環境</strong>
                        でも動作するよう設計されています。
                    </p>
                </div>
            </section>

            {/* ── 開発タイムライン ── */}
            <section>
                <h2 className="detail-h2">開発タイムライン</h2>
                <div style={{ position: "relative", paddingLeft: "1.5rem" }}>
                    {/* 縦線 */}
                    <div
                        style={{
                            position: "absolute",
                            left: 0,
                            top: ".5rem",
                            bottom: ".5rem",
                            width: "1px",
                            background: "var(--border)",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.2rem",
                        }}
                    >
                        {TIMELINE.map((item, i) => {
                            const s = STATUS_STYLE[item.status];
                            return (
                                <div key={i} style={{ position: "relative" }}>
                                    {/* ドット */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            left: "-1.77rem",
                                            top: ".3rem",
                                            width: "8px",
                                            height: "8px",
                                            borderRadius: "50%",
                                            background: s.color,
                                            boxShadow:
                                                item.status === "done"
                                                    ? `0 0 6px ${s.color}`
                                                    : "none",
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            gap: ".6rem",
                                            marginBottom: ".25rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily:
                                                    "var(--font-display)",
                                                fontSize: ".88rem",
                                                fontWeight: 700,
                                                color: "#fff",
                                            }}
                                        >
                                            {item.phase}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: ".65rem",
                                                color: "var(--text-muted)",
                                                letterSpacing: ".06em",
                                            }}
                                        >
                                            {item.date}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: "var(--font-mono)",
                                                fontSize: ".62rem",
                                                color: s.color,
                                                letterSpacing: ".1em",
                                                padding: ".1rem .45rem",
                                                border: `1px solid ${s.color}55`,
                                                borderRadius: "2px",
                                                background: `${s.color}0a`,
                                            }}
                                        >
                                            {s.label}
                                        </span>
                                    </div>
                                    <p
                                        style={{
                                            color: "var(--text-dim)",
                                            fontSize: ".85rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {item.note}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 今後の展望 ── */}
            <section>
                <h2 className="detail-h2">今後の展望</h2>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: "1rem",
                    }}
                >
                    {[
                        {
                            icon: "📖",
                            title: "チュートリアルの追加",
                            body: "特殊石の効果を体感できる盤面を用意し、テキストガイド付きで初心者でもスムーズに入れる導線を整備する。",
                            color: "var(--blue)",
                        },
                        {
                            icon: "🤖",
                            title: "AI の強化",
                            body: "まだ簡単に勝てるレベルのため、より深く探索できる AI を開発。全体的な最適化も並行して進める。",
                            color: "var(--yellow)",
                        },
                    ].map((card) => (
                        <div
                            key={card.title}
                            style={{
                                background: "var(--surface2)",
                                border: "1px solid var(--border)",
                                borderRadius: "6px",
                                padding: "1.4rem",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: ".6rem",
                                    marginBottom: ".7rem",
                                }}
                            >
                                <span style={{ fontSize: "1.4rem" }}>
                                    {card.icon}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "var(--font-display)",
                                        fontSize: ".9rem",
                                        fontWeight: 700,
                                        color: card.color,
                                    }}
                                >
                                    {card.title}
                                </span>
                            </div>
                            <p
                                style={{
                                    color: "var(--text-dim)",
                                    fontSize: ".87rem",
                                    lineHeight: 1.75,
                                }}
                            >
                                {card.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    ),
};
