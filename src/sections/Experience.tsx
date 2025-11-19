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

                            <div className="mb-2">
                                <span className="font-mono text-primary font-bold text-sm bg-primary/5 px-3 py-1 rounded-full">
                                    {job.date}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-text mb-1 group-hover:text-primary transition-colors">
                                {job.role} <span className="text-text-muted">@</span> {job.company}
                            </h3>

                            <div className="mt-4 text-text-muted leading-relaxed">
                                <ul className="space-y-2 list-disc list-inside marker:text-primary">
                                    {Array.isArray(job.description) ? job.description.map((desc, i) => (
                                        <li key={i} className="pl-2">{desc}</li>
                                    )) : (
                                        <li className="pl-2">{job.description}</li>
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
