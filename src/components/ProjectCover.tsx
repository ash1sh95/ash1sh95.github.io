import type { JSX } from 'react';

export type CoverVariant = 'gate' | 'kit' | 'traces' | 'insight' | 'rag' | 'index';

interface ProjectCoverProps {
    variant: CoverVariant;
    className?: string;
}

/*
 * Designed cover plates for the project index — one shared system:
 * obsidian ground, faint platinum grid, 1.5px platinum line work,
 * burgundy reserved for the single decisive mark in each motif.
 * All covers share viewBox 0 0 400 240 so they crop identically.
 */
const PLATINUM = '#C7CCD6';
const MUTED = '#646E7D';
const FAINT = '#8E97A5';
const BURGUNDY = '#7A1E2B';
const BURGUNDY_LIGHT = '#93303F';
const MONO = "'JetBrains Mono', monospace";

const Grid = () => (
    <g stroke={PLATINUM} strokeWidth="0.5" opacity="0.05">
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="240" />
        ))}
        {[40, 80, 120, 160, 200].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="400" y2={y} />
        ))}
    </g>
);

const Frame = ({ fig, caption }: { fig: string; caption: string }) => (
    <>
        <rect x="10" y="10" width="380" height="220" fill="none" stroke={PLATINUM} strokeWidth="1" opacity="0.14" />
        <text x="24" y="36" fill={FAINT} fontFamily={MONO} fontSize="10" letterSpacing="3">
            {fig} — {caption}
        </text>
    </>
);

const GateMotif = () => (
    <g stroke={PLATINUM} strokeWidth="1.5" fill="none" strokeLinecap="round">
        {/* inputs */}
        {[80, 124, 168].map((y) => (
            <rect key={y} x="48" y={y - 5} width="10" height="10" fill="#101013" />
        ))}
        <path d="M58 80 L182 118" opacity="0.65" />
        <path d="M58 124 L182 124" opacity="0.65" />
        <path d="M58 168 L182 130" opacity="0.65" />
        {/* the gate — burgundy double bar */}
        <line x1="190" y1="66" x2="190" y2="182" stroke={BURGUNDY_LIGHT} strokeWidth="3" />
        <line x1="200" y1="66" x2="200" y2="182" stroke={BURGUNDY} strokeWidth="3" />
        {/* allow path */}
        <path d="M208 112 L292 84" />
        <rect x="296" y="79" width="10" height="10" fill="#101013" />
        <text x="292" y="62" fill={PLATINUM} stroke="none" fontFamily={MONO} fontSize="10" letterSpacing="3">ALLOW</text>
        {/* deny path — terminated */}
        <path d="M208 140 L288 160" stroke={BURGUNDY_LIGHT} />
        <path d="M292 152 L306 166 M306 152 L292 166" stroke={BURGUNDY_LIGHT} strokeWidth="2" />
        <text x="288" y="192" fill={BURGUNDY_LIGHT} stroke="none" fontFamily={MONO} fontSize="10" letterSpacing="3">DENY</text>
    </g>
);

const KitMotif = () => (
    <g stroke={PLATINUM} strokeWidth="1.5" fill="none" strokeLinecap="round">
        {/* blueprint block, dashed — the plan above the foundation */}
        <rect x="150" y="58" width="100" height="38" strokeDasharray="5 5" opacity="0.8" />
        <line x1="200" y1="96" x2="200" y2="110" opacity="0.6" />
        {/* tools resting on the platform */}
        {[158, 195, 232].map((x) => (
            <rect key={x} x={x} y="102" width="11" height="11" fill="#101013" />
        ))}
        {/* stacked foundation layers */}
        <rect x="128" y="118" width="144" height="17" fill="#17171C" />
        <rect x="108" y="141" width="184" height="17" fill="#121216" />
        <rect x="88" y="164" width="224" height="17" fill="#0D0D10" />
        <line x1="64" y1="196" x2="336" y2="196" stroke={MUTED} />
        <line x1="64" y1="202" x2="336" y2="202" stroke={MUTED} opacity="0.5" />
    </g>
);

const TracesMotif = () => (
    <g strokeWidth="1.5" fill="none" strokeLinecap="round">
        {[86, 116, 146, 176].map((y) => (
            <line key={y} x1="64" y1={y} x2="336" y2={y} stroke={PLATINUM} opacity="0.18" />
        ))}
        <g stroke={PLATINUM}>
            <rect x="70" y="79" width="92" height="13" fill="#17171C" />
            <rect x="98" y="109" width="148" height="13" fill="#17171C" />
            <rect x="84" y="139" width="68" height="13" fill="#17171C" />
            <rect x="176" y="139" width="104" height="13" fill="#17171C" />
            <rect x="124" y="169" width="58" height="13" fill="#17171C" />
        </g>
        {/* the one expensive span */}
        <rect x="196" y="109" width="50" height="13" fill={BURGUNDY} stroke={BURGUNDY_LIGHT} />
        <text x="64" y="216" fill={FAINT} fontFamily={MONO} fontSize="10" letterSpacing="3">TRACE · COST · LATENCY</text>
    </g>
);

const InsightMotif = () => (
    <g stroke={PLATINUM} strokeWidth="1.5" fill="none">
        <circle cx="200" cy="128" r="62" strokeDasharray="3 6" opacity="0.35" />
        <line x1="200" y1="128" x2="106" y2="80" opacity="0.65" />
        <line x1="200" y1="128" x2="294" y2="80" opacity="0.65" />
        <line x1="200" y1="128" x2="106" y2="178" opacity="0.65" />
        <line x1="200" y1="128" x2="294" y2="178" opacity="0.65" />
        <circle cx="200" cy="128" r="17" fill="#101013" />
        <circle cx="200" cy="128" r="3.5" fill={PLATINUM} stroke="none" />
        <circle cx="106" cy="80" r="9" fill="#101013" />
        <circle cx="294" cy="80" r="9" fill="#101013" stroke={BURGUNDY_LIGHT} strokeWidth="2" />
        <circle cx="106" cy="178" r="9" fill="#101013" />
        <circle cx="294" cy="178" r="9" fill="#101013" />
    </g>
);

const RagMotif = () => (
    <g stroke={PLATINUM} strokeWidth="1.5" fill="none" strokeLinecap="round">
        {/* retrieval arcs */}
        <path d="M96 118 Q 190 62 282 84" opacity="0.8" />
        <path d="M96 126 L282 128" opacity="0.8" />
        <path d="M96 134 Q 190 190 282 172" opacity="0.8" />
        {/* return arc, dashed */}
        <path d="M282 146 Q 200 214 104 142" strokeDasharray="4 5" opacity="0.55" />
        {/* query point */}
        <circle cx="88" cy="126" r="8" fill="#101013" />
        <circle cx="88" cy="126" r="3" fill={BURGUNDY_LIGHT} stroke="none" />
        {/* documents */}
        {[70, 114, 158].map((y) => (
            <g key={y}>
                <rect x="286" y={y} width="58" height="28" fill="#101013" />
                <line x1="296" y1={y + 10} x2="334" y2={y + 10} stroke={MUTED} />
                <line x1="296" y1={y + 19} x2="322" y2={y + 19} stroke={MUTED} />
            </g>
        ))}
    </g>
);

const IndexMotif = () => (
    <g strokeLinecap="round">
        {[0, 1, 2, 3, 4].map((i) => {
            const y = 74 + i * 30;
            const len = [206, 158, 188, 122, 168][i];
            const hot = i === 1;
            return (
                <g key={i}>
                    <rect
                        x="82"
                        y={y - 4}
                        width="8"
                        height="8"
                        fill={hot ? BURGUNDY_LIGHT : 'none'}
                        stroke={hot ? BURGUNDY_LIGHT : PLATINUM}
                        strokeWidth="1.5"
                    />
                    <line
                        x1="106"
                        y1={y}
                        x2={106 + len}
                        y2={y}
                        stroke={PLATINUM}
                        strokeWidth="1.5"
                        opacity={hot ? 0.95 : 0.4 + i * 0.08}
                    />
                </g>
            );
        })}
    </g>
);

const MOTIFS: Record<CoverVariant, { fig: string; caption: string; Motif: () => JSX.Element }> = {
    gate: { fig: 'FIG. 01', caption: 'THE GATE', Motif: GateMotif },
    kit: { fig: 'FIG. 02', caption: 'FOUNDATION', Motif: KitMotif },
    traces: { fig: 'FIG. 03', caption: 'TRACES', Motif: TracesMotif },
    insight: { fig: 'FIG. 04', caption: 'AGENTS', Motif: InsightMotif },
    rag: { fig: 'FIG. 05', caption: 'RETRIEVAL', Motif: RagMotif },
    index: { fig: 'FIG. 06', caption: 'INDEX', Motif: IndexMotif },
};

const ProjectCover = ({ variant, className = '' }: ProjectCoverProps) => {
    const { fig, caption, Motif } = MOTIFS[variant];
    return (
        <svg
            viewBox="0 0 400 240"
            preserveAspectRatio="xMidYMid slice"
            className={`block h-full w-full ${className}`}
            role="img"
            aria-label={`${caption} — project cover illustration`}
        >
            <rect x="0" y="0" width="400" height="240" fill="#0A0A0B" />
            <Grid />
            <Frame fig={fig} caption={caption} />
            <Motif />
        </svg>
    );
};

export default ProjectCover;
