import { motion } from 'framer-motion';
import { experience } from '../data/content';
import { Terminal } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-surface">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center gap-4 mb-16">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Terminal size={32} />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-text">
                        Experience
                    </h2>
                </div>

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-border group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border group-hover:bg-primary transition-colors duration-300 ring-4 ring-background" />

                            <div className="mb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                    {/* Company Logo */}
                                    <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-md border border-border group-hover:border-primary/30 transition-all duration-300 group-hover:scale-105 overflow-hidden">
                                        <img
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.parentElement?.classList.add('bg-primary/10');
                                                const fallback = document.createElement('div');
                                                fallback.className = 'text-primary font-bold text-xl';
                                                fallback.innerText = job.company.substring(0, 2).toUpperCase();
                                                e.currentTarget.parentElement?.appendChild(fallback);
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                                            {job.role}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-muted">
                                            <span className="font-medium text-text">{job.company}</span>
                                            <span className="hidden sm:inline">•</span>
                                            <span className="font-mono text-sm">{job.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-3 text-text-muted leading-relaxed group-hover:text-text/80 transition-colors duration-300">
                                    {Array.isArray(job.description) ? job.description.map((desc, i) => (
                                        <li key={i} className="pl-0 flex items-start gap-2">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 group-hover:bg-primary transition-colors" />
                                            <span>{desc}</span>
                                        </li>
                                    )) : (
                                        <li className="pl-0 flex items-start gap-2">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 group-hover:bg-primary transition-colors" />
                                            <span>{job.description}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
