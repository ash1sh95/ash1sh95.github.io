import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { Github, Folder, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 bg-background">
            <div className="container mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-16">
                    Selected Works
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold font-display text-text mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-text-muted mb-6 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-background text-text-muted text-xs font-mono rounded-full border border-border flex items-center gap-2">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
