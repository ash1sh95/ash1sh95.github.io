import { motion } from 'framer-motion';

/*
 * Operating principles — restated from the flagship's design rules and
 * the suite thesis (build, govern, observe, evaluate). No new claims.
 */
const PRINCIPLES = [
    {
        title: 'Build, govern, observe, evaluate',
        body: 'Production agents are a lifecycle, not a demo. The platform work, the gate, the tracing and the evals ship together or not at all.',
    },
    {
        title: 'Rules outrank models',
        body: 'An LLM judge can add strictness on top of deterministic rules — it can never outvote a rule DENY.',
    },
    {
        title: 'Fail closed',
        body: 'When the judge cannot decide, the answer is require-approval, never allow. Uncertainty routes to a human, not to production.',
    },
    {
        title: 'Approvals are per call',
        body: 'Keyed by tool + arguments hash + case. Change an argument, get a new approval. No blanket tool approvals.',
    },
    {
        title: 'Only allowed calls consume budget',
        body: 'A denied call must not poison rate-limit or dedupe state for a later legitimate retry.',
    },
    {
        title: 'Evals gate what ships',
        body: 'The gate takes its own exam — 17/17 with zero false allows, and CI fails the day a false allow appears.',
    },
];

const Principles = () => {
    return (
        <section id="principles" className="py-20 px-6 bg-background">
            <div className="container mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-platinum-700 dark:text-platinum-300">05 — Principles</span>
                    <span className="h-px w-16 bg-platinum-400" />
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-display font-bold text-text mb-6"
                >
                    Operating Principles
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                    transition={{ duration: 0.45, delay: 0.05 }}
                    className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-14"
                >
                    The same rules whether the system is an agent on Databricks or the platform under it —
                    stated once, enforced everywhere.
                </motion.p>

                <div className="border-b border-border">
                    {PRINCIPLES.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                            transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.12) }}
                            className="group flex items-start gap-5 md:gap-10 py-6 md:py-7 border-t border-border"
                        >
                            <span className="font-mono text-sm md:text-base text-platinum-500 pt-1 w-8 shrink-0">
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="font-display font-semibold text-xl md:text-2xl text-text leading-snug w-56 md:w-72 shrink-0 hidden sm:block">
                                {p.title}
                            </h3>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-display font-semibold text-xl text-text leading-snug mb-1.5 sm:hidden">
                                    {p.title}
                                </h3>
                                <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                                    {p.body}
                                </p>
                            </div>
                            <span className="hidden md:block h-[2px] w-0 bg-burgundy-500 transition-all duration-500 group-hover:w-10 shrink-0 mt-4" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
