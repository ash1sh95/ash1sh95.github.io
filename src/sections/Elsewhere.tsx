import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

const links = [
    { label: 'GitHub', href: personalInfo.social.github },
    { label: 'LinkedIn', href: personalInfo.social.linkedin },
    { label: 'Email', href: personalInfo.social.email },
];

const Elsewhere = () => {
    return (
        <section id="elsewhere" className="px-6 border-y border-border bg-background">
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px 60px 0px' }}
                transition={{ duration: 0.45 }}
                className="container mx-auto py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
            >
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-platinum-700 dark:text-platinum-300 shrink-0">
                    Elsewhere
                </span>
                <span className="hidden md:block h-px flex-1 bg-border" />
                <nav className="flex flex-wrap items-center gap-x-10 gap-y-4" aria-label="Elsewhere">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-text-muted hover:text-text transition-colors"
                        >
                            <span className="border-b border-transparent group-hover:border-burgundy-500 pb-0.5 transition-colors">
                                {link.label}
                            </span>
                            <ArrowUpRight
                                size={14}
                                className="text-burgundy-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    ))}
                </nav>
            </motion.div>
        </section>
    );
};

export default Elsewhere;
