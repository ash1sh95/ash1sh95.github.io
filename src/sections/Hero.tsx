import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { personalInfo, stats } from '../data/content';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { MagneticButton } from '../components/animations/MagneticButton';
import photo from '../assets/img/Ashish_Photo.jpg';

/* Decorative audit-log texture — generic gate vocabulary, echoes the
   flagship's JSONL audit trail. Purely visual, aria-hidden. */
const AUDIT_LINES = [
    'gate → allow',
    'judge · 0.98',
    'rate · ok',
    'approval ✓',
    'audit · sealed',
    'dedupe · skip',
    'gate → deny',
    'span · 142ms',
    'policy · pass',
    'router · local',
    'eval · 17/17',
    'per-call ✓',
    'gate → allow',
    'audit · sealed',
];

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 100]);
    const [showAudit, setShowAudit] = useState(false);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center pt-28 pb-14 relative overflow-hidden bg-background">
            {/* Signature texture — fine platinum radial glow, hero only */}
            <motion.div
                style={{ y: y1 }}
                className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[150px] animate-float"
            />
            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(720px circle at 88% 12%, rgba(199,204,214,0.055), transparent 65%)' }}
            />
            {/* Audit-log column — shown only at 1920px and up. Its 144px
                width plus 24px viewport offset fits within the 192px page
                margin beside the 1536px container, keeping the hairline
                gutter and every glyph clear of both content and edge. */}
            <div
                aria-hidden
                className="absolute right-6 top-28 bottom-28 hidden min-[1920px]:flex w-36 flex-col justify-between border-l border-platinum-300/10 pl-4 font-mono text-[10px] tracking-[0.18em] text-platinum-300 opacity-[0.07] pointer-events-none select-none z-0 overflow-hidden"
            >
                {AUDIT_LINES.map((line, i) => (
                    <span key={i} className="block whitespace-nowrap">{line}</span>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-20 w-full">
                <div className="grid lg:grid-cols-12 gap-14 items-center">
                    {/* Left — name block, editorial scale */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="font-display font-semibold text-[clamp(3.75rem,9vw,6.25rem)] leading-[1.0] tracking-[-0.01em] mb-8 text-text"
                        >
                            {personalInfo.name}
                            <motion.button
                                type="button"
                                aria-label="audit detail"
                                aria-expanded={showAudit}
                                onClick={() => setShowAudit(v => !v)}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, type: "spring" }}
                                className="text-burgundy-500 inline-block ml-1 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                            >
                                .
                            </motion.button>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mb-10"
                        >
                            <div className="w-14 h-[2px] bg-burgundy-500 mb-7" />
                            <AnimatePresence initial={false}>
                                {showAudit && (
                                    <motion.p
                                        key="audit-line"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="font-mono text-[11px] md:text-xs tracking-wider text-text-muted mb-5 overflow-hidden"
                                    >
                                        {'{"decision":"ALLOW","reason":"principal_verified","eval":"17/17"}'}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                            <p className="font-mono uppercase tracking-[0.3em] text-sm md:text-base text-platinum-700 dark:text-platinum-300 mb-5">
                                {personalInfo.title}
                            </p>
                            <p className="font-display text-2xl md:text-[1.75rem] leading-snug text-text max-w-xl">
                                {personalInfo.tagline}
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-xl text-text-muted max-w-xl mb-12 leading-relaxed font-light"
                        >
                            {personalInfo.bio}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                            className="flex flex-wrap gap-5"
                        >
                            <MagneticButton
                                href="#projects"
                                className="btn-primary flex items-center gap-3 px-8 py-4 text-lg rounded-full relative overflow-hidden group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                            >
                                <span className="relative z-10">View Work</span>
                                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-white/20 to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-shimmer" />
                            </MagneticButton>

                            <MagneticButton
                                href={personalInfo.social.resume}
                                className="px-8 py-4 rounded-full border border-border font-medium hover:bg-surface hover:border-primary/50 transition-all text-text flex items-center gap-3 text-lg backdrop-blur-sm bg-white/5"
                            >
                                Download CV
                                <Download size={20} />
                            </MagneticButton>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="flex gap-6 mt-14"
                        >
                            {[
                                { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
                                { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                                { icon: Mail, href: personalInfo.social.email, label: 'Email' }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-muted hover:text-primary transition-colors p-3 hover:bg-primary/5 rounded-full border border-transparent hover:border-primary/20"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — treated portrait: grayscale, offset platinum frame, one burgundy corner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="lg:col-span-5 flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative">
                            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border border-platinum-400/30 rounded-md" />
                            <div className="relative w-[280px] h-[352px] md:w-[320px] md:h-[400px] rounded-md overflow-hidden shadow-2xl border border-white/10">
                                <motion.img
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.7 }}
                                    src={photo}
                                    alt="Ashish Arun"
                                    className="w-full h-full object-cover grayscale contrast-[1.07]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                            </div>
                            <div aria-hidden className="absolute -top-2.5 -left-2.5 w-9 h-9 border-t-2 border-l-2 border-burgundy-500 z-10" />
                        </div>
                    </motion.div>
                </div>

                {/* Stats — bottom hairline row spanning the hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.35, duration: 0.8 }}
                    className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="font-display font-semibold text-3xl md:text-4xl text-text">{stat.value}</div>
                            <div className="font-mono uppercase tracking-widest text-[11px] text-text-muted mt-1.5">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
