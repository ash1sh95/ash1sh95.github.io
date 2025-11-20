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
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 flex flex-col h-full relative z-10">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold font-display text-text mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-text-muted mb-6 flex-1 text-sm leading-relaxed group-hover:text-text transition-colors">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-background text-text-muted text-xs font-mono rounded-full border border-border flex items-center gap-2 group-hover:border-primary/30 transition-colors">
                                            {t === 'OpenAI API' && (
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                                                    alt="OpenAI"
                                                    className="w-3 h-3 object-contain"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                    }}
                                                />
                                            )}
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
