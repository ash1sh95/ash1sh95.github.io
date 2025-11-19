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
                                            {t === 'OpenAI API' && (
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    className="w-3 h-3"
                                                    fill="currentColor"
                                                >
                                                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.0716.0236L4.8303 10.6038a4.504 4.504 0 0 1-2.4904-2.71zm16.5963 3.5864L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .0716-.0236l4.8303 2.7953a4.4979 4.4979 0 0 1 2.4904 2.71 4.4961 4.4961 0 0 1-2.3655 1.9728V11.6a.7664.7664 0 0 0-.3879-.6765L15.1024 7.57zm-4.4961 4.4939L9.7402 14.1212 7.7201 12.9527a.0757.0757 0 0 1-.038-.052v-5.5826a4.4979 4.4979 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543z"/>
                                                </svg>
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
