import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { Github, ArrowUpRight } from 'lucide-react';
import ProjectCover, { type CoverVariant } from '../components/ProjectCover';

const COVERS: Record<string, CoverVariant> = {
    'agent-control-plane': 'gate',
    'databricks-agent-kit': 'kit',
    'DSPy Observability Dashboard': 'traces',
    'Databricks Insight Agent': 'insight',
    'Azure Agentic RAG': 'rag',
    'Awesome Databricks GenAI': 'index',
};

const coverFor = (title: string): CoverVariant => COVERS[title] ?? 'index';

const Projects = () => {
    const [featured, ...rest] = projects;
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
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="group relative bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors duration-300 mb-4 grid lg:grid-cols-2"
                >
                    <div className="relative min-h-[240px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-border">
                        <ProjectCover variant={coverFor(featured.title)} className="absolute inset-0" />
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
                    </div>
                </motion.div>

                {/* The index — work presented as a dossier table of contents */}
                <div className="border-b border-border">
                    {rest.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: index * 0.06, duration: 0.5 }}
                            className="group relative flex items-start gap-5 md:gap-8 py-7 md:py-8 border-t border-border"
                            aria-label={`${project.title} — GitHub repository`}
                        >
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
                                <p className="text-text-muted text-sm md:text-base leading-relaxed mt-2 max-w-2xl line-clamp-2 lg:line-clamp-1">
                                    {project.description}
                                </p>
                                {project.metrics && (
                                    <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-primary/70 mt-2.5">
                                        {project.metrics}
                                    </p>
                                )}
                                <p className="lg:hidden font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mt-3">
                                    {project.tech.join('  /  ')}
                                </p>
                            </div>

                            <div className="hidden lg:flex flex-col items-end gap-4 shrink-0 pt-2">
                                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted text-right leading-relaxed">
                                    {project.tech.join('  /  ')}
                                </p>
                            </div>

                            {/* Cover reveals on hover — desktop only */}
                            <div className="hidden lg:block shrink-0 self-center overflow-hidden w-0 opacity-0 transition-all duration-500 ease-out group-hover:w-52 group-hover:opacity-100">
                                <div className="w-52 aspect-[5/3] border border-border">
                                    <ProjectCover variant={coverFor(project.title)} />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
