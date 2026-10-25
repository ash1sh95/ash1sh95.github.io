import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/content';
import { Github, ArrowUpRight, Play, FileSearch } from 'lucide-react';
import ProjectCover, { type CoverVariant } from '../components/ProjectCover';
import CaseFile from '../components/CaseFile';

const COVERS: Record<string, CoverVariant> = {
    'agent-control-plane': 'gate',
    'databricks-agent-kit': 'kit',
    'DSPy Observability Dashboard': 'traces',
    'Databricks Insight Agent': 'insight',
    'Azure Agentic RAG': 'rag',
    'Awesome Databricks GenAI': 'index',
};

const coverFor = (title: string): CoverVariant => COVERS[title] ?? 'index';

/* Interactive gate — a deterministic policy-check readout for the flagship.
   Clicking runs the pipeline steps in sequence; reduced motion (or the
   MotionConfig user setting) lands on the final state instantly. */
const GATE_STEPS = [
    'tool_call → dedupe ✓',
    'rate_limit ✓ · judge ✓',
    'decision → ALLOW',
    'eval 17/17 · 0 false allows',
];

const GateDemo = () => {
    const reduceMotion = useReducedMotion();
    const [step, setStep] = useState(-1); // -1 idle, 0..n-1 running/done
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => () => timers.current.forEach(clearTimeout), []);

    const run = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
        if (reduceMotion) {
            setStep(GATE_STEPS.length - 1);
            return;
        }
        setStep(0);
        for (let i = 1; i < GATE_STEPS.length; i++) {
            timers.current.push(setTimeout(() => setStep(i), i * 420));
        }
    };

    const running = step >= 0 && step < GATE_STEPS.length - 1;

    return (
        <div className="mt-8">
            <button
                type="button"
                onClick={run}
                aria-live="polite"
                className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-text border border-border rounded-full px-4 py-2 hover:border-burgundy-500 hover:text-burgundy-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
            >
                <Play size={11} className="text-burgundy-500" aria-hidden />
                {step === -1 ? 'Run policy check' : running ? 'Checking…' : 'Run again'}
            </button>
            <div className="mt-4 min-h-[4.25rem] font-mono text-[11px] leading-[1.7] text-text-muted" aria-hidden={step === -1}>
                {step >= 0 && GATE_STEPS.slice(0, step + 1).map((line, i) => (
                    <motion.p
                        key={`${line}-${i}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        className={i === GATE_STEPS.length - 1 ? 'text-primary' : undefined}
                    >
                        <span className="text-burgundy-500 mr-2">{i === GATE_STEPS.length - 1 ? '■' : '›'}</span>
                        {line}
                    </motion.p>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    const [featured, ...rest] = projects;
    const [caseOpen, setCaseOpen] = useState(false);
    const reduceMotion = useReducedMotion();
    return (
        <section id="projects" className="py-20 px-6 bg-background">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-platinum-700 dark:text-platinum-300">04 — Work</span>
                    <span className="h-px w-16 bg-platinum-400" />
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-16">
                    Selected Works
                </h2>

                {/* Featured flagship — cover plate + dossier entry */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                    transition={{ duration: 0.45 }}
                    className="group relative bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors duration-300 mb-4 grid lg:grid-cols-2"
                >
                    <div className="relative min-h-[240px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-border overflow-hidden">
                        <ProjectCover variant={coverFor(featured.title)} className="absolute inset-0" />
                        {/* Gate scan — one platinum sweep through the gate as the
                            card enters view; reduced-motion users keep the static cover */}
                        {!reduceMotion && (
                            <motion.div
                                aria-hidden
                                className="absolute inset-y-0 w-24 pointer-events-none bg-gradient-to-r from-transparent via-platinum-300/25 to-transparent"
                                initial={{ left: '-12%', opacity: 0 }}
                                whileInView={{ left: '104%', opacity: [0, 1, 1, 0] }}
                                viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                                transition={{ duration: 1.8, delay: 0.35, ease: 'easeInOut' }}
                            />
                        )}
                    </div>
                    <div className="p-8 md:p-12 relative">
                        <div className="mb-6 flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-sm text-platinum-500">01</span>
                                <span className="h-px w-8 bg-burgundy-500" />
                                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-burgundy-500">Featured</span>
                            </div>
                            <a
                                href={featured.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub repository for ${featured.title}`}
                                className="text-text-muted hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                            >
                                <Github size={20} />
                            </a>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold font-display text-text mb-4">
                            {featured.title}
                        </h3>

                        <p className="text-text-muted mb-4 max-w-3xl text-base leading-relaxed">
                            {featured.description}
                        </p>

                        {featured.metrics && (
                            <p className="text-xs font-mono text-primary/80 mb-6">
                                {featured.metrics}
                            </p>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {featured.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-background text-text-muted text-xs font-mono rounded-full border border-border">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <GateDemo />

                        <button
                            type="button"
                            onClick={() => setCaseOpen(true)}
                            className="mt-2 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-text border border-border rounded-full px-4 py-2 hover:border-burgundy-500 hover:text-burgundy-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-500"
                        >
                            <FileSearch size={12} className="text-burgundy-500" aria-hidden />
                            Open case file
                        </button>
                    </div>
                </motion.div>

                {/* The index — work presented as a dossier table of contents.
                    Covers are visible at rest: a permanent cover column on
                    desktop (strengthening on hover), a compact cover plate
                    under the text on smaller screens. Nothing is hover-only. */}
                <div className="border-b border-border">
                    {rest.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                            transition={{ delay: Math.min(index * 0.05, 0.15), duration: 0.45 }}
                            className="group relative block py-7 md:py-8 border-t border-border"
                            aria-label={`${project.title} — GitHub repository`}
                        >
                            <div className="flex items-start gap-5 md:gap-8">
                                <span className="font-mono text-sm md:text-base text-platinum-500 pt-1.5 md:pt-2.5 w-8 shrink-0">
                                    {String(index + 2).padStart(2, '0')}
                                </span>

                                <div className="flex-1 min-w-0">
                                    <h3 className="flex items-center gap-3 font-display font-semibold text-2xl md:text-[2rem] leading-tight text-text transition-colors duration-300 group-hover:text-primary">
                                        <span className="inline-block h-[2px] w-0 bg-burgundy-500 transition-all duration-500 group-hover:w-8 shrink-0" />
                                        <span>{project.title}</span>
                                        <ArrowUpRight
                                            size={20}
                                            className="shrink-0 text-burgundy-500 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                                        />
                                    </h3>
                                    <p className="text-text-muted text-sm md:text-base leading-relaxed mt-2 max-w-2xl">
                                        {project.description}
                                    </p>
                                    {project.metrics && (
                                        <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-primary/70 mt-2.5">
                                            {project.metrics}
                                        </p>
                                    )}
                                    {/* Tech on small screens: chips that wrap freely
                                        under the text instead of squeezing right */}
                                    <div className="mt-4 flex flex-wrap gap-1.5 lg:hidden">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted border border-border rounded-full">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden lg:block w-44 shrink-0 pt-2.5">
                                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted text-right leading-[1.9]">
                                        {project.tech.join('  /  ')}
                                    </p>
                                </div>

                                {/* Cover column — at rest, strengthens on hover */}
                                <div className="hidden lg:block w-52 xl:w-60 shrink-0 self-center">
                                    <div className="aspect-[5/3] border border-border overflow-hidden opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:border-primary/40 group-hover:scale-[1.02]">
                                        <ProjectCover variant={coverFor(project.title)} />
                                    </div>
                                </div>
                            </div>

                            {/* Compact cover plate — touch widths, always visible */}
                            <div className="mt-6 ml-[3.25rem] md:ml-16 max-w-md lg:hidden">
                                <div className="aspect-[16/8] border border-border overflow-hidden opacity-90">
                                    <ProjectCover variant={coverFor(project.title)} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            <CaseFile open={caseOpen} onClose={() => setCaseOpen(false)} repoUrl={featured.link} />
        </section>
    );
};

export default Projects;
